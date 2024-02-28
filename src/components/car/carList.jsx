import { useEffect, useState } from "react";
import React, { useForm } from 'react-hook-form';
import CarTable from "./carTable"
import carsController from "../../service/getCars"
import Pagination from "../Pagination"
import { useParams } from "react-router-dom";


export default function CarList(nuevo){
    const [rows, setRows] = useState([])
    const [name, setName] = useState([])
    const [carsComplete, setCarsComplete] = useState([])
    const [filters, setFilters] = useState({})
    const [noResults, setNoResults] = useState([])
    const params  = useParams()
    
    useEffect(()=>{

        const filterButton = document.getElementById('filters-button')
            const filtersBox = document.getElementById('filters-box')
            const flechaFilters = document.getElementById('filters-flecha')
            filterButton.addEventListener('click', function(){
                if(filtersBox.classList[0] === "filters-closed"){       
                    
                    filtersBox.classList.add("filters-open")
                    filtersBox.classList.remove("filters-closed")
                    flechaFilters.classList.add("transform180")
                }else{
                    
                    filtersBox.classList.add("filters-closed")
                    filtersBox.classList.remove("filters-open")
                    flechaFilters.classList.remove("transform180")
                }
                window.addEventListener('scroll', function() {
    
                    const navbar = document.getElementById('navbar');      
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                        filtersBox.classList.add("filters-closed")
                        filtersBox.classList.remove("filters-open")
                        flechaFilters.classList.remove("transform180")
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
                        
            })
            carsController.getCars(name,nuevo,filters) 
            .then((data)=>{
                    let brand = document.getElementsByClassName('brand')
                    let model = document.getElementsByClassName("model")
                    let year = document.getElementsByClassName("year")
                    const cars = data
                    const brandList = []
                    brand[0].innerHTML = ""
                    model[0].innerHTML = ""
                    year[0].innerHTML = ""
                    const modelList = []
                    const yearList = []
                    for(let i = 0; i < cars.length; i++){
                        
                        if (!(brandList.includes(cars[i].brand))) {
                            brandList.push(cars[i].brand)
                            brand[0].innerHTML += `\n<label style="text-align: left"><input type="checkbox" name="brand" value=${cars[i].brand}>${cars[i].brand}</label>`
                        }
                        if(!(modelList.includes(cars[i].model))){
                            modelList.push(cars[i].model)
                            model[0].innerHTML += `\n<label style="text-align: left"><input type="checkbox" name="model" value=${cars[i].model}>${cars[i].model}</label>`
                        }
                        if(!(yearList.includes(cars[i].year))){
                            yearList.push(cars[i].year)
                            year[0].innerHTML += `\n<label style="text-align: left"><input type="checkbox" name="year" value=${cars[i].year}>${cars[i].year}</label>`
                        }
                }
            }) 
            
    }, [])
    useEffect(()=>{    
        const fin = parseInt(params.pag)*12
        const inicio = fin-12
        carsController.getCars(name,nuevo,filters) 
        .then((data)=>{
            if(data.length === 0){
                setRows([])
                setNoResults("No hay resultados")
                setCarsComplete([])
            }else{
                setNoResults()
                params.pag = 1
                setCarsComplete(data)
                const carList = []
                for (let index = inicio; index < fin; index++) {
                    if (data[index]) {
                        carList.push(data[index])   
                    }
                }
                setRows(carList)
            }
            
        })
        .catch(()=>{

            console.log("error");
        })
    }, [name, filters, params])

    const onSubmit = (data) =>{
        const brandCheckbox = document.getElementsByName("brand")
        const modelCheckbox = document.getElementsByName("model")
        const yearCheckbox = document.getElementsByName("year")
        const filtersBox = document.getElementById("filters-box")
        const flechaFilters = document.getElementById("filters-flecha")
        for(let i = 0; i < 100; i++){
            if (brandCheckbox[i]?.checked) {
                brandCheckbox[i].checked = false
            }
            if (modelCheckbox[i]?.checked) {
                modelCheckbox[i].checked = false
            }
            if (yearCheckbox[i]?.checked) {
                yearCheckbox[i].checked = false
            }
        }
        filtersBox.classList.add("filters-closed")
        filtersBox.classList.remove("filters-open")
        if (flechaFilters.classList.length === 1) {
            flechaFilters.classList.remove("transform180")
        }
        setFilters({})
        setName(data.name)
    }

    const onSubmitFilters = ()=>{
        const brandCheckbox = document.getElementsByName("brand")
        const brandListChecked = []
        const modelCheckbox = document.getElementsByName("model")
        const modelListChecked = []
        const yearCheckbox = document.getElementsByName("year")
        const yearListChecked = []
        console.log(params);
        for(let i = 0; i < 50; i++){
            if(brandCheckbox[i]?.checked){
                brandListChecked.push(brandCheckbox[i].value)
            }
            if(modelCheckbox[i]?.checked){
                modelListChecked.push(modelCheckbox[i].value)
            }
            if(yearCheckbox[i]?.checked){
                yearListChecked.push(parseInt(yearCheckbox[i].value))
            }
            
        }
        
        const form = document.getElementsByClassName("form-control-name")
        form.name.value = ""
        setName("")
        setFilters({brandListChecked, modelListChecked, yearListChecked})
    }

    const reset = ()=>{
        const form = document.getElementsByClassName("form-control-name")
        const brandCheckbox = document.getElementsByName("brand")
        const modelCheckbox = document.getElementsByName("model")
        const yearCheckbox = document.getElementsByName("year")
        const filtersBox = document.getElementById("filters-box")
        const flechaFilters = document.getElementById("filters-flecha")
        for(let i = 0; i < 100; i++){
            if (brandCheckbox[i]?.checked) {
                brandCheckbox[i].checked = false
            }
            if (modelCheckbox[i]?.checked) {
                modelCheckbox[i].checked = false
            }
            if (yearCheckbox[i]?.checked) {
                yearCheckbox[i].checked = false
            }
        }
        
        if (flechaFilters.classList.length === 1) {
            flechaFilters.classList.remove("transform180")
        }
        filtersBox.classList.add("filters-closed")
        filtersBox.classList.remove("filters-open")
        form.name.value = ""
        setName("")
        setFilters({})
    }

    const { register, handleSubmit } = useForm();


    return(
        
        <div>
    
            <div className="row">
            <div className="form-container" >
                <div className="filters-container" >
                    <div className="filters-button-container" >
                        <button id="filters-button" >Filtros</button>
                        <p id="filters-flecha" ><strong>^</strong></p>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmitFilters)} className="filters-closed" id="filters-box">
                            <div>
                                <p>Marcas</p>
                                <div className="brand" >

                                </div>
                            </div>
                            <div>
                                <p>Modelos</p>
                                <div className="model" >
                                    
                                </div>
                            </div>
                            <div>
                                <p>Año</p>
                                <div className="year" >
                                    
                                </div>
                            </div>
                            <button type="submit" id="submit-filters">Buscar</button>
                            
                    </form>
                
                </div>
                <div className="search-bar-container">
                    <form onSubmit={handleSubmit(onSubmit)} className="search-bar">      
                        <div className="mb-3">
                            <input type="text" className="form-control-name" placeholder="Buscar autos "{...register('name')} />
                        </div>
                            <button type="submit"></button>
                    </form>
                    <form onSubmit={handleSubmit(reset)} className="ver-todos-form">
                        <button type="submit">Ver todos</button>
                    </form>
                </div>
                <div className="filters-container invisible"></div>
            </div>
                <br />
                <br />
                <p>{noResults}</p>
                <div>
                    <CarTable items = {rows}>
                    </CarTable>
                    <Pagination cars = {carsComplete}/>
                </div>
                
            </div>
            
        </div>
    );
};

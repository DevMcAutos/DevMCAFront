import axios from "axios";

const link = `http://localhost:8080/getcars`

const getCars = (name,nuevo)=>{
    const filters = {year: 2021}
    return axios.get(`${link}?search=${name}`,  {params: filters}).then((res)=>{
    const { data } = res;
    const news = []
    const used = []
    data.map((c)=>{
        if(c.new){
            news.push(c)
        }else{
            used.push(c)
        }
    })
    if(nuevo.nuevo){
        return news
    }else{
        return used
    }    
    });
    
};

const getCarById = (id)=>{
    return axios.get(`${link}/${id}`).then((res)=>{
        const {data} = res;
        return data
    })
}

const carsController = {
    getCars,
    getCarById
};

export default carsController;
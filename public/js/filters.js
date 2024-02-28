// setTimeout(() => {
//     const usadosButton = document.getElementById("usadosButton")
//     console.log(window.location.pathname.split('/')[1]);

//     if (window.location.pathname.split('/')[1] === "usados" && window.location.pathname.split("/")[2] !== "auto") {
//         const filterButton = document.getElementById('filters-button')
//         const filtersBox = document.getElementById('filters-box')
//         const flechaFilters = document.getElementById('filters-flecha')
//         let brand = document.getElementsByClassName('brand')
//         let model = document.getElementsByClassName("model")
//         let year = document.getElementsByClassName("year")
//         const link = `http://localhost:8080/getcars`
//         fetch(`${link}?search=${name}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('La solicitud no fue exitosa');
//                 }
//             return response.json(); 
//         })
//             .then(data => {
//                 const cars = data
//                 const brandList = []
//                 const modelList = []
//                 const yearList = []
//                 for(let i = 0; i < cars.length; i++){
//                     if (!(brandList.includes(cars[i].brand))) {
//                         brandList.push(cars[i].brand)
//                         brand[0].innerHTML += `\n<label><input type="checkbox" name="brand" value=${cars[i].brand} >${cars[i].brand}</label>`
//                     }
//                     if(!(modelList.includes(cars[i].model))){
//                         modelList.push(cars[i].model)
//                         model[0].innerHTML += `\n<label><input type="checkbox" name="model" value=${cars[i].model}>${cars[i].model}</label>`
//                     }
//                     if(!(yearList.includes(cars[i].year))){
//                         yearList.push(cars[i].year)
//                         year[0].innerHTML += `\n<label><input type="checkbox" name="year" value=${cars[i].year}>${cars[i].year}</label>`
//                     }
//             }})
//             .catch(error => {
//                 console.error('Ocurrió un error:', error);
//             });
//         filterButton.addEventListener('click', function(){
//             if(filtersBox.classList[0] === "filters-closed"){
                
//                 filtersBox.classList.add("filters-open")
//                 filtersBox.classList.remove("filters-closed")
//                 flechaFilters.classList.add("transform180")
//             }else{
//                 filtersBox.classList.add("filters-closed")
//                 filtersBox.classList.remove("filters-open")
//                 flechaFilters.classList.remove("transform180")
//             }
//             window.addEventListener('scroll', function() {
    
//                 const navbar = document.getElementById('navbar');  
                
//                 if (window.scrollY > 50) {
//                     navbar.classList.add('scrolled');
//                     filtersBox.classList.add("filters-closed")
//                     filtersBox.classList.remove("filters-open")
//                     flechaFilters.classList.remove("transform180")
//                 } else {
//                     navbar.classList.remove('scrolled');
//                 }
//             });
        
//         })
// }
//     usadosButton.addEventListener('click', e =>{
//         setTimeout(() => {
            
//             const filterButton = document.getElementById('filters-button')
//             const filtersBox = document.getElementById('filters-box')
//             const flechaFilters = document.getElementById('filters-flecha')
//             let brand = document.getElementsByClassName('brand')
//             let model = document.getElementsByClassName("model")
//             let year = document.getElementsByClassName("year")
//             const link = `http://localhost:8080/getcars`
//             fetch(`${link}?search=${name}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('La solicitud no fue exitosa');
//                     }
//                 return response.json(); 
//                 })
//                 .then(data => {
//                     const cars = data
//                     const brandList = []
//                     const modelList = []
//                     const yearList = []
//                     for(let i = 0; i < cars.length; i++){
//                         if (!(brandList.includes(cars[i].brand))) {
//                             brandList.push(cars[i].brand)
//                             brand[0].innerHTML += `\n<label><input type="checkbox" name="brand" value=${cars[i].brand}/>${cars[i].brand}</label>`
//                         }
//                         if(!(modelList.includes(cars[i].model))){
//                             modelList.push(cars[i].model)
//                             model[0].innerHTML += `\n<label><input type="checkbox" name="model" value=${cars[i].model}/>${cars[i].model}</label>`
//                         }
//                         if(!(yearList.includes(cars[i].year))){
//                             yearList.push(cars[i].year)
//                             year[0].innerHTML += `\n<label><input type="checkbox" name="model" value=${cars[i].year}/>${cars[i].year}</label>`
//                         }
//                 }})
//                 .catch(error => {
//                     console.error('Ocurrió un error:', error);
//                 });
//             filterButton.addEventListener('click', function(){
//                 if(filtersBox.classList[0] === "filters-closed"){
//                     filtersBox.classList.add("filters-open")
//                     filtersBox.classList.remove("filters-closed")
//                     flechaFilters.classList.add("transform180")
//                 }else{
//                     filtersBox.classList.add("filters-closed")
//                     filtersBox.classList.remove("filters-open")
//                     flechaFilters.classList.remove("transform180")
//                 }
//                 window.addEventListener('scroll', function() {
        
//                     const navbar = document.getElementById('navbar');  
                    
//                     if (window.scrollY > 50) {
//                         navbar.classList.add('scrolled');
//                         filtersBox.classList.add("filters-closed")
//                         filtersBox.classList.remove("filters-open")
//                         flechaFilters.classList.remove("transform180")
//                     } else {
//                         navbar.classList.remove('scrolled');
//                     }
//                 });
            
//             })
//     }, 500);
// })
// }, 500);
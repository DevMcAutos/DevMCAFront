import axios from "axios";

const link = `http://localhost:8080/getcars`

const getCars = (name,nuevo, filters)=>{
    if (name) {
        console.log(name);
    }
    return axios.get(`${link}?search=${name}`).then((res)=>{
    const { data } = res;
    let news = []
    let used = []
    const resultado = []
    data.map((c)=>{
        if(c.new){
            news.push(c)
        }else{
            used.push(c)
        }
    })
        if ((JSON.stringify(filters)!== "{}") && (filters.brandListChecked.length !== 0|| filters.modelListChecked.length|| filters.yearListChecked.length)) {
            for (let i = 0; i < data.length; i++) {
                if(!data[i].new){  
                    if ((filters.brandListChecked.includes(data[i].brand) || filters.modelListChecked.includes(data[i].model) || filters.yearListChecked.includes(data[i].year))) {
                    resultado.push(data[i])
                    }
                }else{
                    if ((filters.brandListChecked.includes(data[i].brand) || filters.modelListChecked.includes(data[i].model) || filters.yearListChecked.includes(data[i].year))) {
                        news.push(data[i])
                    }
                }
                
            }
            return resultado
        }else{
            if(nuevo.nuevo){
                return news
            }else{
                return used
            }
        }
        
    }    
    )}

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
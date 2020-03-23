import axios from 'axios';
export const getAllEmployee=()=>{
 return axios.get('http://dummy.restapiexample.com/api/v1/employee')}


// export const getAllEmployee=async=()=>{
//     return await axios.get('http://dummy.restapiexample.com/api/v1/create').then(({data})=>{
//         console.log('GET');
//         return data
        
//     })
// }




 export const Create=()=>{
     return axios.post('http://dummy.restapiexample.com/api/v1/create')
 }
 
import React ,{useState} from 'react'
import axios from 'axios';
// import AllEmployee from '../components/AllEmployee'
export const AllEmployee=()=>{
    const[employee,setEmployee]=useState([])
    await axios.get('http://dummy.restapiexample.com/api/v1/employee').then((res)=>setEmployee(res.data))
    console.log(res.data);
    
}
export const UcitajEmployee=()=>{
    AllEmployee().then((res)=>setEmployee(res.data))
}
return (<>
    {employees.map(employee=><AllEmployee employee={employee}/>)}
    </>
)
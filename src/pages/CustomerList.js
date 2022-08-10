import React from 'react';
import {useEffect, useState} from"react";
import axios from "axios";
const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/CustomerGet")
            .then(res=>setCustomers(res.data))
            .catch(err=>console.log("Some error occurred"))},[])

            function getRowTags(){
                const roww = customers.map(c => <tr key ={c.accountholdername}>
                <td>{c.customerid}</td>
                <td>{c.accountholdername}</td>
                <td>{c.customeraddress}</td>
                <td>{c.customercity}</td>
                <td>{c.customertype}</td>
                <td>{c.clearbalance}</td>
                {/* <td>
                <Button className="p-button-warning" onClick={()=>setSelected(c)}>Show</Button>
                    <Button className="p-button-warning" onClick={()=>deleteCustomer(c.userId)}>Delete</Button>
                </td> */}
               
                </tr>)
                return roww
            }
    return (
        <div>
            <h1>This is CustomerList</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Account Number</th>
                        <th scope="col">Account Holder Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">Customer Type</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                {getRowTags()}   
                </tbody>
            </table>
        </div>
    )
}
export default CustomerList;
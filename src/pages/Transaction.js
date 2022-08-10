import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import { Params } from 'react-router';
import { Button } from "primereact/button";
import { paramCase } from 'param-case';
const Transaction=()=>{
  const options1 = [
    {label:"--Select--",value:'select'},
    { label: 'CustomerTransfer', value: 'customerTransfer' },
    { label: 'BankTransfer', value: 'bankTransfer' },
  ];
  const options2=[
    {label:"--Select--",value:'select'},
    {label: 'CHQB',value:'chqb'},
    {label:'CQRT',value:'cqrt'},
    {label:'HOLD',value:'hold'},
    {label:'INTC',value:'intc'},
    {label:'PHOB',value:'phob'},
    {label:'PHOI',value:'phoi'},
    {label:'PHON',value:'phon'},
    {label:'REPA',value:'repa'},
    {label:'SDVA',value:'sdva'}
  ]

  const[custId,setcustId]=useState("")
  const[senName,setsenName]=useState("")
  const[cbal,setcbal]=useState("")
  const[cur,setcur]=useState("")
  const[Bic,setBic]=useState("")
  const[Iname,setIname]=useState("")
  const[recName,setrecName]=useState("")
  const[accNo,setaccNo]=useState("")
  const[trty,settrty]=useState("")
  const[meco,setmeco]=useState("")
  const[amount,setamount]=useState("")
  const[transfee,settransfee]=useState("")
  const[cBal,setcBal]=useState("")
  const [custIdError,setcustIdError]=useState(null)

  
  const handlecustomerIdChange=(e)=>{
    setcustId(e.target.value);
  }
  const handlesenNameChange=(e)=>{
    setsenName(e.target.value);
  }
  const handlecbalChange=(e)=>{
    setcbal(e.target.value);
  }
  const handlecurChange=(e)=>{
    setcur(e.target.value);
  }
  const handleBicChange=(e)=>{
    setBic(e.target.value);
  }
  const handleInameChange=(e)=>{
    setIname(e.target.value);
  }
  const handlerecNameChange=(e)=>{
    setrecName(e.target.value);
  }
  const handleaccNoChange=(e)=>{
    setaccNo(e.target.value);
  }
  const handletrtyChange=(e)=>{
    settrty(e.target.value);
  }
  const handlemecoChange=(e)=>{
    setmeco(e.target.value);
  }
  const validateCustomer=()=>{
    if (!custId.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) 
    return { 'invalidNumber': true };
  }
  const[senRec,setsenRec]=useState([])
  function getRowTags(){
    const rowTags=senRec.map(c=><tr key={c.custId}>
    <h2>{c.accountholdername}</h2>
    <h2>{c.clearbalance}</h2>
    </tr>)
    return rowTags
  }
  const SubmitCustomer=()=>{
    const params=useParams()
        alert("hi");
      useEffect(()=>{
        axios.get("http://localhost:8080/CustomerGet"+params.customerid)
        .then(res=>setsenRec(res.data))
        .catch(err=>console.log("Couldn't fetch the details"))},[])
        console.log(setsenRec)

}


  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    )
  }

    return(
    <div class="trans">
      <div>
          Customer Id :<input type="text" onChange={(e)=>handlecustomerIdChange(e)}/>
      </div>
      const SubmitCustomer(){
            useEffect(()=>{
            axios.get("http://localhost:8080/CustomerGet")
            .then(res=>setsenRec(res.data))
            .catch(err=>console.log("Couldn't fetch the details"))},[])
            }
        
      <div><Button label="Submit" onClick={SubmitCustomer}></Button></div>
      <div>{getRowTags()}</div>
      <Dropdown
        label="Transaction Type"
        options={options1}
        value={trty}
        onChange={handletrtyChange}
      />
      <br></br>
      <br></br>
      <Dropdown
        label="Message Code"
        options={options2}
        value={meco}
        onChange={handlemecoChange}
      />
     </div>
    )

}
export default Transaction;
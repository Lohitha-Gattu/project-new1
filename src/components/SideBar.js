import React,{useState} from 'react';
import {GiReceiveMoney,GiMoneyStack,GiTakeMyMoney} from 'react-icons/gi';
import {GrTransaction} from 'react-icons/gr';
import {FaBars,FaTh,FaListAlt,FaHandHoldingUsd} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SideBar=({children})=>{
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
        name:"dashboard",
        icon:<FaTh/>
        },
        {
        path:"/transaction",
        name:"Transaction",
        icon:<GrTransaction/>
    },
{
    path:"/customerlist",
    name:"CustomerList",
    icon:<FaListAlt/>  
},
{
    path:"/loans",
    name:"Loans",
    icon:<GiReceiveMoney/>
},
{
    path:"/insurance",
    name:"Insurance",
    icon:<FaHandHoldingUsd/>
},{
    path:"/deposits",
    name:"Deposits",
    icon:<GiMoneyStack/>
},
{
    path:"/withdrawals",
    name:"Withdrawals",
    icon:<GiTakeMyMoney/>
}]

    return(
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    )
}
export default SideBar;
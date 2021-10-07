import React, { useState } from 'react';
import{Link} from 'react-router-dom';
import './Dropdown.css';
import { MenuItems } from './MenuItems';

function Dropdown(props) {
    const [click, setClick]=useState(false);
    const handelClick=()=> setClick(!click)
    return (
        <div>
            <ul onClick={handelClick}
            className={click ? 'dropdown-menu clicked ' : "dropdwon-menu"}> {/*  if it is clicked take to drop down menu  clicked or else(:) dropdpwn menu */}
            {MenuItems.map((item,index) =>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>  
                );  
            })}
            </ul>

            
        </div>
    );
}

export default Dropdown;
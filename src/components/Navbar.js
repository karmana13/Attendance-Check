import React, {useState} from "react";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import "./Navbar.css";
import {AmplifySignOut} from "@aws-amplify/ui-react";
import Footer from "./Footer";
export default function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () =>setSidebar(!sidebar);
    
    return(
        <div>
           
            <div className = 'navbar'>
                <Link to='#' className = 'menu-bars'>
                    <FaIcons.FaBars onClick ={showSidebar} />
                </Link>
            </div>
            <nav className = {sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className = 'nav-menu-items' onClick ={showSidebar}>
                    <li className = 'navbar-toggle'>
                    </li>
                    {SidebarData.map((item,index)=> {
                        return(
                            <li key = {index} className = {item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <AmplifySignOut />
                    
                </ul>
                
            </nav>
            
        </div>
    )
}

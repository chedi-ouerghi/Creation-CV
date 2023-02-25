import { background, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SidebarData } from "./Dataside";
import "./sidebar.css";



const SideBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	 const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{/* {isExpanded && (
						<div className="nav-brand">
							<img  alt="user" srcset="" />
							<h2>user</h2>
						</div>
					)} */}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div 
				className={
							isExpanded ? "nav-menu" : "hidemenu"
						} >
    <Button style={{
  marginTop: "-30%",
  display: "flex",
  justifyContent: "flex-start",
  width: "fit-content",
 transition: "transform 0.2s ease-out",
  transform: "translateY(0)",
  ":hover": {
    transform: "translateY(-10px)",
	background:"gray"
  }
}}
 onClick={handleClick}>
      Back
    </Button>

                    <nav>
						{SidebarData.map((item, index) => {
                return (
						<NavLink to={item.path} key={index} className="link">
                    <div className={isExpanded ? "item-open" : "item-closed"}>
                      <div className="icon">{item.icon}</div>
                      <span
                        className="title"
                        style={{ display: isExpanded ? "block" : "none" }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
);
              })}
      {/* <ul>
        <li>
          <Link to='/homepage/aboutus'>About Us</Link>
        </li>
        <li>
          <Link to='/homepage/help'>Help</Link>
        </li>
        <li>
          <Link to='/homepage/createcv'>Create CV</Link>
        </li>
	
      </ul> */}
    </nav>    
  
				</div>
			</div>
				<img className="logout-icon"  alt="" srcset="" />
			</div>
	);
};

export default SideBar;
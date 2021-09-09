// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SignUp from "../../pages/Authentication/SignUp/signup";
import SignIn from "./../../pages/Authentication/SignIn/signin";
import mockData from '../../core/mockData/mock'

function Header() {

  const [navBar, setNavBar] = useState(false);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    setCate(mockData.data.category)
  }, [setCate])

  const [switchPage, setSwitchPage] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  console.log(cate)


  return (
    <div>
      <header className="header">
        <div className="navContainer">
          <nav className="nav-container">
            <ul className="container">
              <li className="nav-home">
                <NavLink to="/"> Home Pages </NavLink>
              </li>
              {cate?.map(item => (
                <li className="dropdown">
                  <a href={"foo"}>
                    {item.name} <i className="fa fa-angle-down"></i>
                  </a>
                  <div className="mega-menu">
                    <div className="container">
                      {item.children?.map(child => (
                        <div className="item">
                          <h3>{child.name}</h3>
                          <ul>
                            {child.children?.map(child2 => (
                              <li>
                                <a href={"foo"}>{child2.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}

              <li>
                <a href={"foo"}>About</a>
              </li>
              <li>
                <a href={"foo"}>Conatct</a>
              </li>
            </ul>
          </nav>
          <nav>
            <div
              className="mainNav"
              style={navBar ? { transform: "translateX(0)" } : null}
            >
              {switchPage ? <SignUp /> : <SignIn />}
            </div>
          </nav>
          <button
            onClick={handleNavBar}
            className={`navToggle ${navBar ? "open" : null}`}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            onClick={handleNavBar.bind(this)}
            className={`overlay ${navBar ? "open" : ""}`}
          />
        </div>
      </header>
      <div className="wrapper"></div>
    </div>
  );
}
export default Header;
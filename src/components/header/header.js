import React from "react";

export default function header() {
  return (
    <header className="header ">
      <div className="container">
        <nav className="nav bd-grid flex_just_align">
          <div>
            <h1>
              Pratik
            </h1>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list d_flex">
              <li className="nav__item">
                <a href="#home" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { useScrollSection, Section } from 'react-scroll-section';
import 'animate.css';
// import Headroom from 'react-headroom';

const Header = () => {
  // const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const builderSection = useScrollSection('builder');
  const featuresSection = useScrollSection('features');
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(prevState => !prevState);

  return (
    <Section id="home">
      {/* <Headroom> */}
      <header className="header">
        <div className="lg-container">
          <div className="header-parent">
            <div className="header-child_title header-child1">
              <h3
                className="header-title"
                // onClick={homeSection.onClick}
                // selected={homeSection.selected}
              >
                PlatformPro
              </h3>
            </div>
            <div className="header-child_menu header-child2">
              <ul className="header-ul">
                <li>
                  <button
                    id="header-ul_btn1"
                    className="header-ul_btn"
                    onClick={aboutSection.onClick}
                    selected={aboutSection.selected}
                  >
                    about
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_btn"
                    onClick={builderSection.onClick}
                    selected={builderSection.selected}
                  >
                    builder
                  </button>
                </li>
                <li>
                  <button
                    className="header-ul_btn"
                    onClick={featuresSection.onClick}
                    selected={featuresSection.selected}
                  >
                    features
                  </button>
                </li>
                <li>
                  <button className="header-ul_btn">blog</button>
                </li>
                <li>
                  <button className="header-ul_btn">brand</button>
                </li>
              </ul>
            </div>
            <div className="header-child3">
              <div className="header-child_btns">
                <button id="header-login" className="btn-border">
                  log in
                </button>
                <button id="header-signup" className="btn-bg">
                  sign up
                </button>
              </div>
            </div>
            <div className="header-child4">
              <span>
                <button onClick={handleMobileMenu} className="ham">
                  <i class="fas fa-bars"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ display: `${isOpen ? 'flex' : 'none'}` }}
          className="mobile-menu animate__animated animate__fadeIn animate__faster"
        >
          <ul>
            <li>
              <button
                className="mobile-menu_btn"
                onClick={aboutSection.onClick}
                selected={aboutSection.selected}
              >
                about
              </button>
            </li>
            <li>
              <button
                className="mobile-menu_btn"
                onClick={builderSection.onClick}
                selected={builderSection.selected}
              >
                builder
              </button>
            </li>
            <li>
              <button
                className="mobile-menu_btn"
                onClick={featuresSection.onClick}
                selected={featuresSection.selected}
              >
                features
              </button>
            </li>
            <li>
              <button className="mobile-menu_btn">blog</button>
            </li>
            <li>
              <button className="mobile-menu_btn">brand</button>
            </li>
          </ul>
        </div>
      </header>
      {/* </Headroom> */}
    </Section>
  );
};

export default Header;

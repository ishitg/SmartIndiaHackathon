import React from 'react';
import './navbar.css';
import { useState } from 'react';
function Nav() {
  const [showDrop, setShowDrop] = React.useState(false);
  const [showDrop2, setShowDrop2] = React.useState(false);
  const [zIndexRight1, setZIndexRight1] = React.useState(12);
  const [zIndexRight2, setZIndexRight2] = React.useState(11);
  const [zIndexRight3, setZIndexRight3] = React.useState(10);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/"><img src="./src/assets/Logo.png" alt="Logo" /></a>
        </div>
        <ul className="navlink">
          <li onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => { setTimeout(() => { setShowDrop(false); }, 600) }} className='li'>
            Product<img src="./src/assets/icon1.svg" alt="Logo" />
            {(showDrop || showDrop2) && (
              <div onMouseEnter={() => setShowDrop2(true)} onMouseLeave={() => { setTimeout(() => { setShowDrop2(false); }, 200); setZIndexRight1(12); setZIndexRight2(10); setZIndexRight3(11); }} className='drop' >
                <div className="dr">
                  <div className='left'>
                    <div className='left1' onMouseEnter={() => { setZIndexRight1(12); setZIndexRight2(10); setZIndexRight3(11) }}>
                      <p>Platform<p className='lp'>Drive and measure meaningful<br />engagement</p></p>
                    </div>
                    <div className='left1' onMouseEnter={() => { setZIndexRight1(10); setZIndexRight2(12); setZIndexRight3(11) }}>
                      <p>Features<p className='lp'>Drive and measure meaningful<br />engagement</p></p>
                    </div>
                    <div className='left1' onMouseEnter={() => { setZIndexRight1(11); setZIndexRight2(10); setZIndexRight3(12) }}>
                      <p>Donation Portal<p className='lp'>Drive and measure meaningful<br />engagement</p></p>
                    </div>
                  </div>


                  <hr className='hr' />


                  <div className='right'>
                    <div className='right1' style={{ zIndex: zIndexRight1 }}>
                      <div className='top'>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                        <div><h1 className='top1'>Alumni <br />
                          Directory</h1><p>Foster connections and keep information updated</p></div>
                      </div>
                      <div className='low'><div>
                        <p><p className='h2'>Alumni Directory</p>
                          Foster connections and keep information updated</p></div>
                        <button type='button'>Explore</button>
                      </div>
                    </div>
                    <div className='right2' style={{ zIndex: zIndexRight2 }} >

                    </div>
                    <div className='right3' style={{ zIndex: zIndexRight3 }}>

                    </div>
                  </div>
                </div>


              </div>
            )}
          </li>
          <li><a href="/about">Blog</a></li>
          <li><a href="/services">Feedback</a></li>
          <li><a href="/contact">About Us</a></li>
          <li><a href="/about">Success Stories</a></li>
        </ul>
        <div className='navbut'>
          <button type='button' id='login'><a>Login</a></button>
          <a className='btn'>Request a Demo</a>
        </div>
      </nav >
    </>
  );
}

export default Nav;
import React,{useEffect} from 'react'
import Logo from '../Assets/Logo.png'
import menu from '../Assets/menu.png'
import './App.scss';

import AOS from 'aos'
import 'aos/dist/aos.css'




const Navbar = () => {
useEffect(() =>{
  AOS.init({duration: 2000})
},[]);


  return (
    <div className='firstpage'  >

      <nav class="navbar navbar-expand fixed-top">
        <div class="container-fluid">
          <div class='image-wrapper'>
            <img src={Logo} alt='Logo.png'></img>
          </div>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button className='k8s-btn'>Talk to K8s Expert</button>
              </li>
              <li class="nav-item">
                <div class='image-wrappe'>
                  <img src={menu} alt='menu.png'></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='Remote' data-aos ='fade-right'>
        <h1 className='gilroyextrabold'>
          Hire Remote Engineers, On Demand.
        </h1>
        <p className='avenireg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        <button className='k8-btn'>Kickoff your Kubernetes Journey</button>
      </div>
    </div>


  )
}

export default Navbar;
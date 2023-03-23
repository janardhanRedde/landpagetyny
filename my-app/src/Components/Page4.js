import React,{useEffect} from 'react';
import iorta from '../Assets/iorta.svg';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page4 = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  },[]);
  return (
    
    <div className='impact-container' data-aos ='fade-up'>
      <h1 className='impact-head'>Impact Stories</h1>
      <p className='impactsub-head'>H ow ‘Doing it Right’ Benefited Our Clients.</p>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2' data-aos ='fade-up'>
        <div className='col col-md-7'>
          <div className='impact-content'>
          <h4 className='impactside-head'>Reduced Deployment Cycle From 2 Weeks To 6 Hours.</h4>
          <p className='hours-text'>Helped Asia’s Largest Insurance Group through our client Iorta in modernizing their
            production infrastructure using Kubernetes. This enabled them to deploy builds more
            quickly and reduce their release cycles from 2 to 3 weeks to less than 6 hours.</p>
            <img src={iorta} class="image-logo2" alt="iorta.svg" />
        </div>
        </div>
        <div className='col col-md-5'>
          <div className='impact-content'>
          <h4 className='impactside-head'>We will share Case Study to your email id</h4>
       <form>
        <input type={'email'} className='input-field' placeholder='Enter your email  @'></input><br></br>
        <input type={'submit'} className='input-button'value='Email me the case study' ></input>
       </form>
       </div>
        </div>
      </div>

    </div>
  )
}

export default Page4
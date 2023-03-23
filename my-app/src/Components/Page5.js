import React,{useEffect} from 'react'
import card4 from '../Assets/card4.png'
import card5 from '../Assets/card5.png'
import card6 from '../Assets/card6.png'
import arrowup from '../Assets/arrowup.svg'
import accesstime from '../Assets/accesstime.svg'
import arrowdown from '../Assets/arrowdown.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page5 = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  },[]);
  return (
    <div className='thinking' data-aos ='fade-up'>
      <h1 className='impact-head'>Our Thinking</h1>
      <p className='impactsub-head'>Documenting our learning, opinions, knowledge and more… &nbsp; <span className='special-text1'>View all &nbsp;<img src={arrowup} alt=''></img></span></p>
      <div className='thinking-card'>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3" data-aos ='fade-up'>
        <div class="col">
        <div className='thinking-card'>
          <div class="card">
            <img src={card4} class="card-img-top" alt="card4.png" />
            <div class="card-body">
              <small class="text-muted">Containers and Kubernetes</small>
              <h5 class="card-titl">Doing Cloud-Native the Right Way. Key Components.</h5>
              <div className='row'>
                <div className='col'>
                
                  <p class="card-text">
                    <img src={accesstime} alt='accesstime.svg' />&nbsp;
                    <small>Nov 12th, 2021</small>
                  </p>
                </div>
                <div className='col'>
               
                  <p className='card-text'><span className='special-text'>Learn more &nbsp;<img src={arrowdown} alt=''></img></span></p>

                </div>
              </div>
            </div>
          </div></div>
        </div>
        <div class="col">
        <div className='thinking-card'>
          <div class="card">
            <img src={card5} class="card-img-top" alt="card5.png" />
            <div class="card-body">
              <small class="text-muted">Containers and Kubernetes</small>
              <h5 class="card-titl">DevOps vs GitOps: 4 Benefits you must know to Master the Methodologies</h5>
              <div className='row'>
                <div className='col'>
                  <p class="card-text">
                    <img src={accesstime} alt='accesstime.svg' />&nbsp;
                    <small>Nov 12th, 2021</small>
                  </p>
                </div>
                <div className='col'>
                  <p className='card-text'><span className='special-text'>Learn more &nbsp;<img src={arrowdown} alt=''></img></span></p>

                </div>
              </div>

            </div>
          </div></div>
        </div>
        <div class="col">
        <div className='thinking-card'>
          <div class="card">
            <img src={card6} class="card-img-top" alt="card6.png" />
            <div class="card-body">
              <small class="text-muted">Containers and Kubernetes</small>
              <h5 class="card-titl">ArgoCD vs FluxCD vs Jenkins X: Which</h5>
              <div className='row'>
                <div className='col'>
                  <p class="card-text">
                    <img src={accesstime} alt='accesstime.svg' />&nbsp;
                    <small>Nov 12th, 2021</small>
                  </p>
                </div>
                <div className='col'>
                  <p className='card-text'><span className='special-text'>Learn more &nbsp;<img src={arrowdown} alt=''></img></span></p>

                </div>
              </div>

            </div>
          </div></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Page5
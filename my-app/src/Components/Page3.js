import React, { useEffect } from 'react'
import card1 from '../Assets/card1.png'
import card2 from '../Assets/card2.png'
import card3 from '../Assets/card3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page3 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);
  return (
    <div>
      <div className='third' data-aos='fade-up'>
        <h3 className='head-what'>What we do</h3>
        <h1 className='sub-head'>Our engineers guide you on a proven path to success</h1>
        <p className='third-para'>Kubernetes expert engineers will work alongside you to accelerate transformation specific to your needs. We empower teams with proven frameworks, tactical content and workshop taught by master practitioners.</p>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3" data-aos='fade-up'>

          <div class="col ">
            <div className='thinking-card'>
              <div class="card h-100" >
                <img src={card1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Remote Engineers</h5>
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                  <button className='k8-btn'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className='thinking-card'>
              <div class="card h-100">
                <img src={card2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cloud Native</h5>
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                  <button className='k8-btn'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div className='thinking-card'>
              <div class="card h-100">
                <img src={card3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Accelerator <span className='second-title'>(B2B, AI, Web3)</span></h5>
                  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                  <button className='k8-btn'>Learn more</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Page3
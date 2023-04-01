import React ,{useEffect}from 'react'
import kuber from '../Assets/kuber.png'
import docker from '../Assets/docker.png'
import helm from '../Assets/helm.png'
import argo from '../Assets/argo.png'
import promethenus from '../Assets/promethenus.png'
import fluentd from '../Assets/fluentd.png'
import jaeger from '../Assets/jaeger.png'
import envoy from '../Assets/envoy.png'
import coredns from '../Assets/coredns.png'
import redhat from '../Assets/redhat.png'
import rancher from '../Assets/rancher.png'
import aws from '../Assets/aws.png'
import confluent from '../Assets/confluent.png'
import rightmark from '../Assets/rightmark.png'
import king from '../Assets/king.mp4';

import AOS from 'aos'
import 'aos/dist/aos.css'


const Page2 = () => {
    useEffect(() =>{
        AOS.init({duration: 2000})
      },[]);
    return (
        <div >
            <div className='second' data-aos ='fade-up'>
                <div class="about-container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div class="col ">
                            <h1 className='hours-head'>15K+ Hours</h1>
                            <p className='hours-text'>Kubernetes Expertise</p></div>
                        <div class="col">
                            <h1 className='hours-head'>150K+ Hours</h1>
                            <p className='hours-text'>Mean Stack Expertise</p></div>
                        <div class="col"><h1 className='hours-head'>10K+ Hours</h1>
                            <p className='hours-text'>Time Saved for Client Teams</p></div>
                        <div class="col"><h1 className='hours-head'>20+ Teams</h1>
                            <p className='hours-text'>Enabled & Empowered</p></div>
                    </div>
                </div>
            </div>
            <div className='about-container' data-aos ='fade-up'>
                <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2'>
                    <div className='col'>
                        <div className='about-tyny' data-aos ='fade-up'>
                            <h1 className='hours-head'>About TYNYBAY</h1>
                            <p className='hours-text'>A Kubernetes consulting company founded in 2020. We enable and empower teams to get the most out of the Cloud Native ecosystem. Every TYNYpreneur is a certified Kubernetes and Cloud architect.</p>
                        </div>
                        <div className='video-ref' data-aos ='fade-up'>
                        <video  controls  className='king'>
                        <source src={king} class="object-fit-cover" alt='king.mp4'   /></video>
                        
                        </div>
                    </div>
                    <div className='col'>
                            <div className='about-cloud' data-aos ='fade-up'>
                                <div className='master-container'>
                                    <span className='cloud-head'>Mastering Cloud Native Landscape</span>
                                    <label>
                                        <input type={'submit'} className='logo2-btn'></input><input type={'submit'} className='logo-btn'></input>
                                        
                                    </label>
                                    
                                   
                                </div>
                                <div class="container-logo"> 
                                    <div class="row row-cols-3 row-cols-sm-3 row-cols-md-3">
                                        <div class="col">
                                            <img src={kuber} class="image-logo" alt="kuber.png" />

                                        </div>
                                        <div class="col">
                                            <img src={docker} class="image-logo" alt="docker.png" />

                                        </div>
                                        <div class="col">
                                            <img src={helm} class="image-logo" alt="helm.png" />
                                        </div>
                                        <div class="col">
                                            <img src={argo} class="image-logo" alt="argo.png" />
                                        </div>
                                        <div class="col">
                                            <img src={promethenus} class="image-logo" alt="promethenus.png" />
                                        </div>
                                        <div class="col">
                                            <img src={fluentd} class="image-logo" alt="fluentd.png" />
                                        </div>
                                        <div class="col">
                                            <img src={jaeger} class="image-logo" alt="jaeger.png" />
                                        </div>
                                        <div class="col">
                                            <img src={envoy} class="image-logo" alt="envoy.png" />
                                        </div>
                                        <div class="col">
                                            <img src={coredns} class="image-logo" alt="coredns.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className='master-container'>
                                    <span className='cloud-head'>Driving Consistent Innovation with Partnerships</span>
                                </div>
                                <div class="container-logo">
                                    <div class="row row-cols-3 row-cols-sm-3 row-cols-md-3">
                                        <div class="col">
                                            <img src={redhat} class="image-logo" alt="redhat.png" />

                                        </div>
                                        <div class="col">
                                            <img src={rancher} class="image-logo" alt="rancher.png" />

                                        </div>
                                        <div class="col">
                                            <img src={aws} class="image-logo" alt="aws.png" />

                                        </div>
                                        <div class="col">
                                            <img src={confluent} class="image-logo" alt="confluent.png" />

                                        </div>
                                    </div>
                                </div>
                                <div className='bottom-content'>
                               <div className='row'>
                                <div className='col'>
                                <img src={rightmark} class="image-logo2" alt="rightmark.png" />
                                <p className='hours-text'>Certified Cloud & Kubernetes Architects</p>
                                </div>
                                <div className='col'>
                                <img src={rightmark} class="image-logo2" alt="rightmark.png" />
                                <p className='hours-text'>Lowest possible TAT for Critical Issues</p>
                                </div>
                                <div className='col'>
                                <img src={rightmark} class="image-logo2" alt="rightmark.png" />
                               <p className='hours-text'>Round the clock Monitoring & Support</p>                               
                                </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page2
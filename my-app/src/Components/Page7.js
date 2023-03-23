import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import insta from '../Assets/insta.svg';
import linkedin from '../Assets/linkedin.svg';
import logowhite from '../Assets/logowhite.svg';

const Page7 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className='contact' data-aos='fade-up'>
            <div>
                <span className='eng-mainhead'>Get access to exclusive technology-scaling knowledge</span>

                <label>
                <input type={'email'} placeholder='Email' className='input-field2' /><input type={'submit'} value='Subscribe' className='subscribe' /><br></br>
                    </label>
            </div>
            <div>
                <div class="container " data-aos='fade-up'>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" data-aos='fade-up'>
                        <div class="col">
                            <h3 className='eng-head'>Product Enginnering</h3>
                            <p className='info' >Cloud Native Product Development</p>
                            <p className='info' >Hire Dedicated Cloud Native Engineers</p>
                            <p className='info' >Idea to Prototype</p>
                            <h3 className='eng-head'>Become a TYNYpreneur</h3>
                            <p className='info' >About</p>
                            <p className='info' > Life at TYNYBAY </p>
                            <p className='info' > Current Openings </p>
                            <p className='info' > WomenInTech</p>
                        </div>
                        <div class="col">
                            <h3 className='eng-head'>Cloud Engineering</h3>
                            <p className='info' >Hire Dedicated DevOps Engineers</p>
                            <p className='info' >Kubernetes Kickoff</p>
                            <p className='info' >Hire a Kubernetes Engineer</p>
                            <p className='info' >SnapQ (Product)</p>
                            <h3 className='eng-head'>Other Links</h3>
                            <p className='info' >Low/No Code Engineering</p>
                            <p className='info' >Low/No Code Engineering</p>
                        </div>
                        <div class="col">
                            <h3 className='eng-head'>Insights</h3>
                            <p className='info' >Our Thinking</p>
                        </div>
                        <div class="col">
                            <div>
                                <p className='info' >hello@tynybay.com</p>
                                <p className='info' >340 S Lemon Ave #6618</p>
                                <p className='info' >Walnut, CA 91789</p>
                                <p className='info' >United States</p>
                                <p className='info' >+1 650 422 9533</p>
                                <p className='info' >hello@tynybay.com</p>
                            </div>

                            <img src={insta} alt='insta.svg' className='social'></img>&nbsp;&nbsp;&nbsp;&nbsp;<img src={linkedin} alt='linkedin.svg' className='social'></img>

                        </div>

                    </div>
                    <div>
                        <img src={logowhite} alt='logotyny.png' className='btm-logo'></img> <span className='inc'>TERMS | PRIVACY | © TYNYBAY INC.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page7
import React ,{useEffect}from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page6 = () => {
    useEffect(() =>{
        AOS.init({duration: 2000})
      },[]);
    return (
        <div className='journey' data-aos ='fade-up'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2' >
                <div className='col col-md-7' >
                <div className='journey1' data-aos ='fade-right'>
                    <h2 className='journey1-head'>Let’s get started. This is exactly what will happen after you get started</h2>
                    <div className='content'><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#169E7D" class="bi bi-check-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg></span>
                        <text className='des-journey'>We will respond to you within 24 hours.</text><br></br>
                        <div className='mid-des'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#169E7D" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg>
                            <text className='des-journey'>We’ll sign a Non-disclosure agreement.</text><br></br>
                        </div>
                        <div className='mid-des'><span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="#169E7D" class="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                            </svg></span>
                            <span className='des-journey'>You’ll be talking to the product and tech experts (no account managers).</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col col-md-5'>
                <div className='journey1' data-aos ='fade-left'>
                    <form className='form'>
                        <h3 className='journey2-head'>Your best partner for the  journey ahead.</h3>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>I would like to Talk to a TYNYpreneur</option>
                            <option value="1">About Kubernetes Kickoff</option>
                            <option value="2">About Hiring a Kubernetes Expert</option>
                            <option value="3">About DevOps/Kubernetes Consulting</option>
                            <option value='4'>Other</option>
                        </select> <br></br>
                        <input class='input-field' type="text" placeholder="How can we help you?" ></input>
                        <input type='text' className='input-field' placeholder='Name' /><br></br>
                        <input type={'email'} className='input-field'  placeholder='Email (Company)' /><br></br>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>How did you hear about us</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select><br></br>
                        <input type={'submit'} value='submit' className='input-button' /><br></br>

                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Page6
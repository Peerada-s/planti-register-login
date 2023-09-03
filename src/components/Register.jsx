import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



//import assest
import video from '../assets/video.mp4'
import logo from '../assets/logo.png'

//import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

import {auth} from '../../src/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    

    const signUp = (e) => {
        e.preventDefault ()
        createUserWithEmailAndPassword (auth, email, password)
        .then ((userCredential) =>{
            console.log(userCredential);
            navigate('/dashboard');
            
        })
        .catch((error) => {
            console.log(error)
        })
    }



    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    <div className='textDiv'>
                        <h2 className='title'>Create and Sell Extraordinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className='text'>Have an account?</span>
                        <Link to={'/'}>
                            <button className='btn'>Log in</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className="headerDiv">
                        <img src={logo} alt='Logo Image' />
                        <h3>Let Us Know You</h3>
                    </div>

                    <form action='' className='form grid' onSubmit={signUp}>
                       
                        <div className='inputDev'>
                            <label
                                htmlFor='username'>Email</label>
                            <div className='input flex' >
                                <MdEmail className='icon' />
                                <input
                                    type='email'
                                    id='username'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value)}}
                                />
                            </div>
                        </div>

                        <div className='inputDev'>
                            <label
                                htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value)}}

                                />
                            </div>
                        </div>

                        
                            <button type='submit' className='btn flex'>
                                <span>Register</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>

                        <span className='forgotPassword'>
                            Forgot your password? <a href=''>Click Here</a>
                        </span>

                    </form>

                </div>



            </div>

        </div>
    )
}

export default Register

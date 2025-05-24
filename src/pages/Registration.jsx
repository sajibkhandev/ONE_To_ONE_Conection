import React, { useState } from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import RegistrationImage from '../assets/registration.png'
import { Link } from 'react-router-dom'

const Registration = () => {
  let [email,setEmail]=useState("")
  let [name,setName]=useState("")
  let [password,setPassword]=useState("")

  let [emailerror,setEmailError]=useState("")
  let [nameerror,setNameError]=useState("")
  let [passwordrror,setPasswordError]=useState("")
  let  handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailError("")
  }
  let  handleName=(e)=>{
    setName(e.target.value)
    setNameError("")
  }
  let  handlePassword=(e)=>{
    setPassword(e.target.value)
    setPasswordError("")
  }
  let handleSubmit=()=>{
    if(!email){
      setEmailError("Email is required")
    }else{
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError("Enter valid Email")
      }
    }
    if(!name){
      setNameError("Name is required")
    }if(!password){
      setPasswordError("Password is required")
    }else if(!/(?=.*[a-z])/.test(password)){
      setPasswordError("Must be LowerCase")
    }
    else if(!/(?=.*[A-Z])/.test(password)){
      setPasswordError("Must be UpperCase")
    }
    else if(!/(?=.*[0-9])/.test(password)){
      setPasswordError("Must be Number")
    }
    else if(!/(?=.*[!@#$%^&*])/.test(password)){
      setPasswordError("Must be Special Charator")
    }else if(!/(?=.{8,})/.test(password)){
      setPasswordError("Must be 8 Length")
    }else{
      console.log("all ok");
      

    }
    
  }
  return (
    <section>
       <Flex>
        <div className='w-1/2 '>
        <Flex className='items-end h-full justify-center flex-col mx-[70px]'>
           <div>
             <h2 className='text-[34px] text-[#11175D] font-nuni font-bold'>Get started with easily register</h2>
            <p className='text-lg text-[#808080] font-nuni font-normal pt-3 pb-10'>Free register and you can enjoy it</p>
            <label className='text-sm text-[#11175D] font-numi font-semibold pl-8' htmlFor="email">Email Address <br />
                <input onChange={handleEmail} className='w-[368px] py-[26px] px-8 border border-[#11175D] rounded-md mt-2 text-xl placehoder:text-xl ' id='email' type="text"  placeholder='Ladushing691@gmail.com'/>
            </label>
            {
              emailerror && <p className='text-white bg-red-500 w-[368px] py-3 px-3 rounded-md mt-3 '>{emailerror}</p>
            }
            <br />
            <label className='text-sm text-[#11175D] font-numi font-semibold pl-8' htmlFor="name">Ful name <br />
                <input onChange={handleName} className='w-[368px] py-[26px] px-8 border border-[#11175D] rounded-md mt-2 text-xl placehoder:text-xl ' id='name' type="text"  placeholder='Ladushing691'/>
            </label>
             {
              nameerror && <p className='text-white bg-red-500 w-[368px] py-3 px-3 rounded-md mt-3 '>{nameerror}</p>
            }
            <br />
            <label className='text-sm text-[#11175D] font-numi font-semibold pl-8' htmlFor="password">Password <br />
                <input onChange={handlePassword} className='w-[368px] py-[26px] px-8 border border-[#11175D] rounded-md mt-2 text-xl placehoder:text-xl ' id='password' type="text"  placeholder='..............'/>
            </label>
             {
              passwordrror && <p className='text-white bg-red-500 w-[368px] py-3 px-3 rounded-md mt-3 '>{passwordrror}</p>
            }
            <br />
            <button onClick={handleSubmit} className='w-[368px] text-xl text-white font-nuni font-bold py-5 bg-[#5F35F5] rounded-[86px] mt-[51px] mb-[31px]' >Sign up</button>
            <p className='w-[368px] text-center text-black text-base font-nuni font-normal'>Already  have an account ? <Link to='/login'><span className='text-[#EA6C00] cursor-pointer'>Sign In</span></Link></p>
           </div>
        </Flex>
        </div>
        <div className='w-1/2'>
         <Image className='w-full h-screen object-cover' src={RegistrationImage}/>
        </div>
       </Flex>
    </section>
  )
}

export default Registration

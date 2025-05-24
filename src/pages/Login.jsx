import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LoginImage from '../assets/login.png'
import GoogleImage from '../assets/google.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
        <Flex>
            <div className='w-1/2'>
            <Flex className='items-end h-full justify-center flex-col mx-[170px]'>
           <div>
             <h2 className='text-[34px] text-[#11175D] font-nuni font-bold'>Login to your account!</h2>
             <Flex className='border border-[#03014c4d] py-4 px-6 w-[230px] rounded-md gap-x-2 mt-8 mb-14'>
                <Image src={GoogleImage}/>
                <p>Login with Google</p>
             </Flex>
           
            <label className='text-sm text-[#11175D] font-numi font-semibold pl-8' htmlFor="email">Email Address <br />
                <input className='w-[368px] py-[26px] px-8 border border-[#11175D] rounded-md mt-2 text-xl placehoder:text-xl ' id='email' type="text"  placeholder='Youraddres@email.com'/>
            </label>
            <br />
            
            
            <label className='text-sm text-[#11175D] font-numi font-semibold pl-8' htmlFor="password">Password <br />
                <input className='w-[368px] py-[26px] px-8 border border-[#11175D] rounded-md mt-2 text-xl placehoder:text-xl ' id='password' type="text"  placeholder='..............'/>
            </label>
            <br />
            <button className='w-[368px] text-xl text-white font-nuni font-bold py-5 bg-[#5F35F5] rounded-[86px] mt-[51px] mb-[31px]' >Login to Continue</button>
            <p className='w-[368px] text-center text-black text-base font-nuni font-normal'>Don’t have an account ?  <Link to='/registration'><span className='text-[#EA6C00] cursor-pointer'>Sign up</span></Link></p>
           </div>
        </Flex>
            </div>
            <div className='w-1/2'>
            <Image className='w-full h-screen object-cover' src={LoginImage}/></div>
        </Flex>
    </section>
  )
}

export default Login
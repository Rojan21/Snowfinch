import './side.css'
import mobile from '../assets/mobile.svg';
import email from '../assets/email.svg';
import person from '../assets/person.svg';
import fb from '../assets/fb.svg';
import logo from '../assets/logo.svg';
import Button from './Button';


function Header(){

   

    return(
        
       <>


        <div className=" flex flex-row w-full h-12">

<div className="  relative w-9/12 z-0 h-12  bg-[#4691F2]">
   

<div className=' flex justify-center items-center absolute left-20 w-1/2 h-12  gap-10'>
<div className=' flex  justify-center items-center gap-2'>
    <img src={mobile}/>
    <p className=' font-sans text-white'>+91 123456789</p>
</div>
<div className=' flex  justify-center items-center gap-2'>
    <img src={email}/>
    <p className=' font-sans text-white'>company@gmail.com</p>
</div>
</div>


    
    
 
</div>

    <div className=" z-10 side absolute  right-0 w-2/4 h-12 bg-black">
    
    <div className=' flex justify-center items-center absolute  left-64 w-1/2 h-12  gap-10'>
<div className=' flex  justify-center items-center gap-2'>
<div className=' flex justify-center items-center  w-8 h-8 bg-white rounded-full'><img src={person}/></div>
    <p className=' font-sans text-white'>Login/Register</p>
</div>
<div className=' flex  justify-center items-center gap-2'>
   <div className=' flex justify-center items-center  w-8 h-8 bg-white rounded-full'><img src={fb}/></div>
   <div className=' flex justify-center items-center w-8 h-8 bg-white rounded-full'><img src={fb}/></div>
   <div className=' flex justify-center items-center w-8 h-8 bg-white rounded-full'><img src={fb}/></div>
   <div className=' flex justify-center items-center w-8 h-8 bg-white rounded-full'><img src={fb}/></div>

</div>
</div>
    </div>

</div>

<div className=' mt-10 flex justify-around items-center w-full h-14'>

    <div><img src={logo} alt="" /></div>
    <div >
        <ul className=' text-[#6C6C6C]  font-sans flex flex-row justify-center items-center gap-7'>
            <li className=' text-[#4691F2]'>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Features</li>
            <li>Blog</li>
            
        </ul>
        </div>
    <Button text='Contact Us' logo={mobile}/>


</div>


</>
    )

}


export default Header;
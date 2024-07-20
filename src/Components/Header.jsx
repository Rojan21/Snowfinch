import './side.css'
import mobile from '../assets/mobile.svg';
import email from '../assets/email.svg';
import person from '../assets/person.svg';
import fb from '../assets/fb.svg';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import Button from './Button';


function Header(){

   

    return(
        
       <>


        <div className=" flex flex-row w-full h-12">

<div className="  relative w-9/12 z-0 h-12  bg-[#4691F2]">
   

<div className=' left-8 gap-10 flex justify-center items-center absolute  w-1/2 h-12  md:left-10 md:gap-10'>
<div className=' flex  justify-center items-center gap-2'>
    <img src={mobile}/>
    <p className='  text-[8px] font-sans text-white lg:text-lg'>+91 123456789</p>
</div>
<div className=' right-10  flex  justify-center items-center gap-2 '>
    <img src={email}/>
    <p className=' text-[8px] font-sans text-white lg:text-lg'>company@gmail.com</p>
</div>
</div>


    
    
 
</div>

    <div className=" z-10 side absolute  right-0 w-2/4 h-12 bg-black">
    
    <div className=' gap-2 text-[8px]  left-14 flex justify-center items-center absolute  w-1/2 h-12  lg:gap-10 lg:left-64 lg:text-lg'>
<div className=' flex  justify-center items-center gap-2'>
<div className=' w-4 h-4 flex justify-center items-center  md:w-8 md:h-8 bg-white rounded-full'><img src={person}/></div>
    <p className=' font-sans text-white'>Login/Register</p>
</div>
<div className=' flex  justify-center items-center gap-2'>
   <div className=' w-4 h-4  flex justify-center items-center  md:w-8 md:h-8 bg-white rounded-full'><img  src={fb}/></div>
   <div className=' w-4 h-4 flex justify-center items-center md:w-8 md:h-8 bg-white rounded-full'><img src={fb}/></div>
   <div className=' w-4 h-4 flex justify-center items-center md:w-8 md:h-8 bg-white rounded-full'><img src={fb}/></div>
   <div className=' w-4 h-4  flex justify-center items-center md:w-8 md:h-8 bg-white rounded-full'><img src={fb}/></div>

</div>
</div>
    </div>

</div>

<div className=' justify-between mt-10 flex  items-center w-full h-14 md:justify-around p-5'>

    <div><img src={logo} alt="" /></div>
    <div className=' hidden sm:block '>
        <ul className='  text-[#6C6C6C]  font-sans flex flex-row justify-center items-center gap-7'>
            <li className=' text-[#4691F2]'>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Features</li>
            <li>Blog</li>
            
        </ul>
        </div>
        <div className=' hidden sm:block '>

    <Button text='Contact Us' logo={mobile}/>
        </div>
    <img className='block  md:hidden' src={menu}/>


</div>


</>
    )

}


export default Header;
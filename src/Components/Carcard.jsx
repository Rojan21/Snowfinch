import './side.css'
import star from '../assets/star.svg'
import empty from '../assets/empty.svg'

import buttonarrow from '../assets/arrow.svg'

function Carcard(){
    return(

        <div className=" relative w-80 h-[500px] -z-50 rounded-md flex flex-col justify-center items-center bg-[#4691F2]">
            <img className=' w-44 -z-30 absolute top-16 ' src="car.png" alt="" />
            <div className='  flex mt-44  items-center  gap-28'>
                <p>Regular <div>TATA TIAGO</div></p>
                <div>
                 <div className=' flex gap-1'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />

                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={empty} alt="" />
                    
                 </div>
                <p className=' mt-1'>₹ 399/km</p>
                </div>
                
            </div>
            <div className=' w-72 mt-6  text-slate-500  h-auto items-center mx-auto  '>
                <div className='  flex justify-between font-sans '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
                <div className=' flex justify-between '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
                <div className=' flex justify-between '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
                <div className=' flex justify-between '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
                <div className=' flex justify-between '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
                <div className=' flex justify-between '> 
                    <p>Taxi Doors</p>
                    <p>4</p>
                </div>
            </div>
        <button className=' mt-4 flex gap-5 flex-row justify-center items-center font-sans text-white rounded-full   w-52 h-12 bg-[#4691F2]'>

            <p>Read More</p>
            <img src={buttonarrow} alt="" />
        </button>
<div className=" carshape rounded-md absolute w-80 h-[400px] -z-40 bg-white bottom-0"></div>
</div>
)
}


export default Carcard;
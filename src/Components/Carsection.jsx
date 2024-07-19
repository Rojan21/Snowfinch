import Button from "./Button";
import './side.css'
import arrow from '../assets/iconarrow.svg';
import buttonarrow from '../assets/arrow.svg'

function Carsection(){
return(
    <div className="flex relative mt-20 flex-row gap-7 justify-center items-center  bg-cover  bg-center w-full  h-auto">
        <div className=" relative" >
        <img className= " absolute bottom-28 w-80  right-28 z-10" src="car.png" alt="" />
        <img className= " w-80  " src="cube.png" alt="" />


    </div>
    <img src="reactangle.png"  alt="" className=" -z-50 absolute   -left-36 -top-80" />
    <div className=" mt-28">
        <p className=" customfont font-text text-3xl mb-6  text-[#4691F2]">Get About Us</p>
        <p className="customfont2 mb-9  text-6xl">
More About Us
</p>



        <p className=" w-96 mb-7 text-[#6C6C6C] text-justify" >We are company name Car Rentals, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade, we are uniquely placed as the largest chauffeur driven car rental company in India in terms of geographical reach. We love that you're free to stop to breathe in clean air, learn about cultures and taste local food when you travel by cabs. We love that these wholesome experiences make travelling better and enrich our lives. We live for the surprises we find on road trips.</p>
        <ul className=" font-sans">
          <li className=" mb-2  flex flex-row gap-1 items-center "><img className=" w-5" src={arrow} alt="" />
          <p> Most trusted car renting company in mumbai</p>
          </li>
          <li className=" mb-2  flex flex-row gap-1 items-center "><img className=" w-5" src={arrow} alt="" />
          <p>10 plus years of experience in car renting field</p>
          </li>
          <li className=" mb-10 flex flex-row gap-1 items-center "><img className=" w-5" src={arrow} alt="" />
          <p> Professional and trustable agency in town</p>
          </li>
        
        </ul>
        <Button  logo={buttonarrow} text="READ MORE"/>
    </div>
    
</div>

)
}


export default Carsection;
import Button from "./Button";
import './side.css'

function Herosection(){
return(
    <div className=" p-5 flex  flex-row gap-7 justify-center items-center bg-[url('/map.png')] bg-cover  bg-center w-full mt-5 h-auto">
    <div className=" mt-28">
        <p className=" customfont font-text text-3xl mb-6">Relax & Enjoy the Vacation</p>
        <p className=" text-1xl customfont2 lg:mb-9  lg:text-6xl">
  Choose <span className=" text-[#4691F2] ">Company name</span>
</p>
<p className="  customfont2 mb-9 lg:text-6xl">
  To Book Your Hotel
</p>


        <p></p>
        <Button  text="BOOK YOUR RIDE NOW"/>
    </div>
    <div>
        <img className= " w-80" src="banner.png" alt="" />
    </div>
</div>

)
}


export default Herosection;
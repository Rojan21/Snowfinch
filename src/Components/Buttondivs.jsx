import Button from "./Button";

import arrow from '../assets/arrow.svg';
function Buttondivs(){

return(
    <div className=" flex-col flex justify-center mt-9 items-center gap-7 lg:flex-row mx-auto lg:w-[1200px] ">

        <div className=" w-52 border-[#4691F24D] p-5 rounded-full border-2">Pick up location</div>
        <div className=" w-52 border-[#4691F24D] p-5 rounded-full border-2">Dropoff location</div>
        <div className=" w-52 border-[#4691F24D] p-5 rounded-full border-2">Date & Time</div>
        <div className=" w-52 border-[#4691F24D] p-5 rounded-full border-2">no of passenger</div>
        <Button text='Search' logo={arrow}/>



    </div>
)

}


export default Buttondivs;
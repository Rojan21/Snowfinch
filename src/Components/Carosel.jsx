import Card from "./Card";

import Caroselbutton from "./Caroselbutton";
function Carosel(){


    return(
        <div className=" p-10 bg-gradient-to-b lg:p-24 from-[#4691F21A] to-[#4691F21A]  relative mt-20      w-full ">
            <div className="  w-auto mx-auto text-center">

            <p className=" text-3xl  text-[#4691F2] font-text">What we offers</p>
            <p className=" text-2xl font-sans lg:text-5xl">Start your journey with us !</p>
            </div>
            <div className=" mx-auto w-full justify-center items-center  mt-8 gap-5 flex flex-row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                



            </div>
            <Caroselbutton/>
        </div>
    )
}


export default Carosel;
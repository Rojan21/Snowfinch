import Card from "./Card";

Card
function Carosel(){


    return(
        <div className="bg-gradient-to-b p-24 from-[#4691F21A] to-[#4691F21A]  relative mt-20     w-full ">
            <div className=" w-auto mx-auto text-center">

            <p className=" text-3xl  text-[#4691F2] font-text">What we offers</p>
            <p className=" font-sans text-5xl">Start your journey with us !</p>
            </div>
            <div className=" mx-auto w-full justify-center items-center  mt-8 gap-5 flex flex-row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                



            </div>
        </div>
    )
}


export default Carosel;
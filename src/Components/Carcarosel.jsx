import Carcard from "./Carcard";


function Carcarosel(){
return(
    <div className=" p-10 bg-gradient-to-b lg:p-24     w-full ">

<div className=" w-auto mx-auto text-center">

<p className=" text-3xl  text-[#4691F2] font-text">Best Places For Your Party</p>
<p className=" text-2xl font-sans lg:text-5xl">Let's Check Available vehicle</p>
</div>
<div className=" mx-auto w-full justify-center items-center  mt-8 gap-5 flex flex-row">

<Carcard/>
<Carcard/>
<Carcard/>
</div>
    </div>
    
)
}


export default Carcarosel;
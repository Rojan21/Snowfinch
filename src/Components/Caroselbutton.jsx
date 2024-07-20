import buttonarrow from '../assets/bluearrow.svg'
const Caroselbutton =()=>{
    return(
<div className=" w-24 h-14 rounded-full bg-white mx-auto mt-16 flex  justify-around items-center ">
    <div><img className=' rotate-180' src={buttonarrow} alt="" /></div>
    <div><img src={buttonarrow} alt="" /></div>

    
</div>
    )


    
}

export default Caroselbutton
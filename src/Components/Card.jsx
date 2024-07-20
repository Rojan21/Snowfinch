import buttonarrow from '../assets/arrow.svg'



function Card(){
return(
    <div className="  w-60 p-2 h-auto bg-white flex flex-col justify-center  ">
                    <div className=" mb-3"><img className=" w-60" src="blog.png" alt="" /></div>
                    <p className=" text-sm mb-3 font-sans">Rapid City Transfer</p>
                    <p className=" w-44 text-justify text-[#6C6C6C]">If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</p>
                    <div className=" flex flex-row justify-between items-center">
                        <p>Learn More</p>
                        <button className=" flex justify-center items-center w-10 h-10 rounded-full bg-[#4691F2]">
                         <img src={buttonarrow} alt="" />
                        </button>
                    </div>



                </div>
)
}


export default Card;
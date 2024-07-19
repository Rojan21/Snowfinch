const Button = ({text,logo})=>{
return(
   <button className=" flex gap-5 flex-row justify-center items-center font-sans text-white rounded-full   w-52 h-20 bg-[#4691F2]">
    
    
    <div>{text}</div>
    {logo&&<div><img src={logo} alt="" /></div>}
   </button>
)
}


export default Button;
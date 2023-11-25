

const SharedButton = ({name,icon}) => {
    return (
       <>
       <div className="group relative">
    <button className="btn hover:bg-cyan-300 border-none bg-cyan-400 ">
      <img className="w-5 h-5 " src={icon} alt="" />
    </button>
    <span className="absolute -bottom-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100">{name}<span>
      </span></span></div>
       </>
    );
};

export default SharedButton;
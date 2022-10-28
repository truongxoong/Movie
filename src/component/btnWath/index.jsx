function BtnWath(props) {
  return (
    <div
      onClick={props.onClick}
      className={`h-[${props.h}] w-[${props.w}] bg-slate-400 rounded-lg flex items-center 
      justify-center text-xl font-medium cursor-pointer hover:bg-slate-500 hover:text-white`}
    >
      Wath
    </div>
  );
}
export default BtnWath;

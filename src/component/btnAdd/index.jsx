function BtnAdd(props) {
  return (
    <div
      className={`w-[${props.w}] h-[${props.h}] bg-red-200 flex items-center justify-center rounded-lg text-3xl cursor-pointer`}
    >
      +
    </div>
  );
}
export default BtnAdd;

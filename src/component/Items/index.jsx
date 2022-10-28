export const urlImg = "https://image.tmdb.org/t/p/original";

function Items(props) {
  return (
    <div>
      <div
        className={`overflow-hidden rounded-3xl h-[${props.height}] w-[${props.width}]`}
      >
        <img
          className="w-full h-full object-cover"
          src={`${urlImg}${props.img}`}
        />
      </div>
      <div className={`absolute bottom-12 left-${props.left}`}>
        <h3 className={`text-${props.size} font-bold m-0 text-white`}>
          {props.title}
        </h3>
        <p className="text-base text-red-100 w-[80%]">{props.overview}</p>
      </div>
    </div>
  );
}
export default Items;

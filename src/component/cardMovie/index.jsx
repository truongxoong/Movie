import { urlImg } from "../Items"
import {EllipsisOutlined} from '@ant-design/icons';
import { Popover } from "antd";

function CardMovie(props) {
    const content = (
        <div>
            <p >Add to list</p>
            <p>Favorite</p>
            <p>Watchlist</p>
            <p>Your rating</p>
        </div>
    )
    return <>
        <div className="rounded-lg border h-[450px] overflow-hidden relative">
            <div className="h-[350px] cursor-pointer" onClick={props.ClickDetail}>
                <img className="h-full w-full object-cover" src={`${urlImg}${props.poster_path}`} />
            </div>
            <div className="pt-4 pl-2">
                <p className="text-lg font-medium m-0">{props.title}</p>
                <p>View: <span className="font-medium">{props.popularity}</span></p>
            </div>
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#a4a5a6] flex justify-center items-center text-lg 
                cursor-pointer hover:bg-teal-500 "
            >
                <Popover trigger='click' content={content} placement='bottom'>
                    <EllipsisOutlined />
                </Popover>
            </div>
        </div>
    </>
}
export default CardMovie
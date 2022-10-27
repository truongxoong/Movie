import { useEffect, useState } from "react"
import { ApiAll } from "../../api"
import { useParams } from "react-router-dom"
import { urlImg } from "../Items"

function Card() {
    let {IdMovie} = useParams()
    const [listCast, setListCast] = useState([])
    useEffect(() => {
        ApiAll.getCast(IdMovie)
            .then((repo) => {
                setListCast(repo?.data?.cast)
            })
            .catch((err) => console.log(err))
    }, [])
    return <div className="grid grid-cols-4 gap-5">
        {
            listCast.slice(0,6).map((item) => (
                <div>
                    <div className="w-auto h-[250px] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src={`${urlImg}${item.profile_path}`} />
                    </div>
                    <p className="text-center text-lg font-medium mt-2">{item.name}</p>
                </div>
            ))
        }
    </div>
}
export default Card
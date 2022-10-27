import { useEffect, useState } from "react"
import { ApiAll } from "../../api"
import { useParams } from "react-router-dom"

function Trailer() {
    let {IdMovie} = useParams()
    const [listTrailer, setListTrailer] = useState([])
    useEffect(() => {
        ApiAll.getTrailer(IdMovie) 
            .then((repo) => {
                setListTrailer(repo?.data?.results)
            })
            .catch((err) => console.log(err))
    }, [])
    return <div className="grid grid-cols-2 gap-2">
        {
            listTrailer.slice(0,4).map((item) => (
                <div key={item.id} className="">
                    <iframe width= '90%' height= '250' src={`https://www.youtube.com/embed/${item.key}`}
                            title= {item.name} 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
            ))
        }
    </div>
}
export default Trailer
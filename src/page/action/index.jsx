import { useEffect, useState } from "react"
import { ApiAll } from "../../api"
import { urlImg } from "../../component/Items"
import {useNavigate} from 'react-router-dom'
import { Button, Input } from "antd"
import {useSelector} from 'react-redux'
const {Search} = Input

function Action() {
    let searchRedux = useSelector((state)=>state.counter.value)

    const navigate = useNavigate()
    const [listNow, setListNow] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const onSearch = (value) => {
        console.log(value);
        // setSearch(value)
    }

    const navigateDetail =(id) => {
        console.log(id);
        navigate(`/detail/${id}`)
    }
    const clickLoadMore = () => {
        setPage(page+1)
    }
    

    useEffect(() => {
        setLoading(true)
        if(searchRedux) {
            ApiAll.getSearch({query: searchRedux, page: page})
            .then((repo) => {
                setListNow(repo?.data?.results)
                setLoading(false)
            })
            .catch((err) => console.log(err))
        } else {
            ApiAll.getNowplaying('now_playing', {page: page})
            .then((repo) => {
                setListNow(
                    [...listNow,...repo?.data?.results]
                )
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [page, searchRedux])

    return <>
        <div className="grid grid-cols-5 gap-6 relative mb-8">
    {
        listNow.map((ele) => (
            <div key={ele.id} className="rounded-lg border h-[450px] overflow-hidden ">
                <div className="h-[350px] cursor-pointer" onClick={()=>navigateDetail(ele.id)}>
                    <img className="h-full w-full object-cover" src={`${urlImg}${ele.poster_path}`} />
                </div>
                <div className="pt-4 pl-2">
                    <p className="text-lg font-medium m-0">{ele.title}</p>
                    <p>View: <span className="font-medium">{ele.popularity}</span></p>
                </div>
            </div>
        ))
    }
        <div className="  rounded-xl text-center absolute left-[50%] -bottom-16 translate-x-[-50%] cursor-pointer"
            onClick={clickLoadMore}
        >
            <Button  type="primary" loading={loading}>Load More</Button>
        </div>
    </div>
    </>
}
export default Action
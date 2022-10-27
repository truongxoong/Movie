import { Fragment, useEffect, useState } from "react"
import { ApiAll } from "../../api"
import { urlImg } from "../../component/Items"
import { useNavigate } from "react-router-dom"
import { Pagination } from "antd"
import { Spin } from "antd"
import { useSelector } from "react-redux"
import CardMovie from "../../component/cardMovie"

function Romance() {
    let search = useSelector((state) => state.counter.value)
    const [latest, setLatest] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const navigateTopRate = (id) => {
        navigate(`/detail/${id}`)
    }
    const onChange =(pageID) => {
        setPage(pageID)
    }
    const [total, setTotal] = useState()    

    useEffect(() => {
        setLoading(true)
        if(search) {
            ApiAll.getSearch({query: search, page: page})
                .then((repo) => {
                    setTotal(repo?.data.total_results)
                    setLatest(repo?.data?.results)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false)
                })
        }else {
            ApiAll.getPopular('popular', {page:page})
            .then((repo) => {
                setTotal(repo?.data.total_results)
                setLatest(repo?.data?.results);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }        
    }, [page, search])
    return <div>
    {
        loading ? <Spin /> :
        <div className="grid grid-cols-5 gap-6 mb-8 relative">
            {
                latest.map((ele) => (
                    <Fragment key={ele.id}>
                        <CardMovie  poster_path={ele.poster_path} title= {ele.title} popularity={ele.popularity} ClickDetail ={() => navigateTopRate(ele.id)}/>
                    </Fragment>
                ))
            }
            <div className="absolute -bottom-16 left-[50%] translate-x-[-50%]"> 
                <Pagination defaultCurrent={page} onChange={onChange} total={total} />
            </div>
        </div>
    }
    </div>
}
export default Romance
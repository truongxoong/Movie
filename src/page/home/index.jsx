import Items from "../../component/Items"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ApiAll } from "../../api";
import { useEffect, useState } from "react";
import BtnWath from "../../component/btnWath";
import BtnAdd from "../../component/btnAdd";
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [listUpcoming, setListUpcoming] = useState([])
    const [listToprated, setListToprated] = useState([])
    const [listPopular, setListPopular] = useState([])
    const [listNowplaying, setListNowplaying] = useState([])
    useEffect(()=>{
        // lay ds phim sap ra mat
         ApiAll.getUpcoming('latest')
        .then((repo)=> {
            console.log(repo);
            setListUpcoming(repo?.data?.results)
        })
        .catch((error) => console.log(error))
        // lay ds phim hot
        ApiAll.getToprated('top_rated')
        .then((repo) => {
            setListToprated(repo?.data?.results)
        })
        .catch((err) => console.log(err))
        // lay ds phim noi tieng
        ApiAll.getPopular('popular')
        .then((repo) => {
            setListPopular(repo?.data?.results)
        })
        .catch((err) => console.log(err))
        // lay ds phim dang chieu rap
        ApiAll.getNowplaying('now_playing')
        .then((repo) => {
            setListNowplaying(repo?.data?.results)
        })
        .catch((err) => console.log(err))
    }, [])
    const ClickDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    return <div>
        {/* banner */}
        <div className="upcoming w-full h-[450px] rounded-3xl relative overflow-hidden">
            <div className="w-full h-full bg-black absolute top-0 left-0 bottom-0 opacity-30"></div>
            <Swiper>
                {
                    listToprated?.slice(6,9).map((ele)=> (
                        <SwiperSlide key={ele.id}>
                            <Items height='450px' size='3xl' title={ele.title} overview={ele.overview} img={ele.backdrop_path} bottom='16' left='5'/>
                            <div className="flex w-[180px] justify-between absolute bottom-5 left-5">
                                <BtnWath h='50px' w='120px' onClick= {() => ClickDetail(ele.id)}/>
                                <BtnAdd h='50px' w='50px' />
                            </div>
                        </SwiperSlide>
                    ))
                }
                       
            </Swiper>
        </div>
        {/* nhung bo phim dang chieu rap*/}
        <div className="mt-12">
            <h3 className="text-3xl font-bold">Những bộ phim đang Chiếu Rạp</h3>
            <div className="relative w-full h-[350px] overflow-hidden flex mt-10">
                <Swiper 
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        listNowplaying?.map((ele) => (
                            <SwiperSlide key={ele.id}>
                                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                                <Items height='350px' size='xl' title={ele.title} overview='' img={ele.poster_path} bottom='15' left='4'/>
                                <div className="absolute bottom-0 w-full ">
                                    <BtnWath h='40px'onClick= {() => ClickDetail(ele.id)}/>
                                </div>
                                <div className="absolute left-4 top-3 w-full ">
                                    <BtnAdd h='40px' w='40px'/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        {/* nhung bo phim hang dau*/}
        <div className="mt-12">
            <h3 className="text-3xl font-bold">Những bộ phim Hot nhất</h3>
            <div className="relative w-full h-[350px] overflow-hidden flex mt-10">
                <Swiper 
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        listToprated?.map((ele) => (
                            <SwiperSlide key={ele.id}>
                                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                                <Items height='350px' size='xl' title={ele.title} overview='' img={ele.poster_path} bottom='8' left='4'/>
                                <div className="absolute bottom-0 w-full ">
                                    <BtnWath h='40px' onClick= {() => ClickDetail(ele.id)}/>
                                </div>
                                <div className="absolute left-4 top-3 w-full ">
                                    <BtnAdd h='40px' w='40px'/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
        {/* những bộ phim nổi tiêngs */}
        <div className="mt-12">
            <h3 className="text-3xl font-bold">Những bộ phim NỔI tiếng</h3>
            <div className="relative w-full h-[350px] overflow-hidden flex mt-10">
                <Swiper 
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        listPopular?.map((ele) => (
                            <SwiperSlide key={ele.id}>
                                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                                <Items height='350px' size='xl' title={ele.title} overview='' img={ele.poster_path} bottom='8' left='4'/>
                                <div className="absolute bottom-0 w-full ">
                                    <BtnWath h='40px' onClick= {() => ClickDetail(ele.id)}/>
                                </div>
                                <div className="absolute left-4 top-3 w-full ">
                                    <BtnAdd h='40px' w='40px'/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>  
    </div>
}
export default Home
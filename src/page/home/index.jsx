import Items from "../../component/Items";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ApiAll } from "../../api";
import { useEffect, useState } from "react";
import BtnWath from "../../component/btnWath";
import BtnAdd from "../../component/btnAdd";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [listUpcoming, setListUpcoming] = useState([]);
  const [listToprated, setListToprated] = useState([]);
  const [listPopular, setListPopular] = useState([]);
  const [listNowplaying, setListNowplaying] = useState([]);
  useEffect(() => {
    // lay ds phim sap ra mat
    ApiAll.getPopular("latest")
      .then((repo) => {
        console.log(repo);
        setListUpcoming(repo?.data?.results);
      })
      .catch((error) => console.log(error));
    // lay ds phim hot
    ApiAll.getPopular("top_rated")
      .then((repo) => {
        setListToprated(repo?.data?.results);
      })
      .catch((err) => console.log(err));
    // lay ds phim noi tieng
    ApiAll.getPopular("popular")
      .then((repo) => {
        setListPopular(repo?.data?.results);
      })
      .catch((err) => console.log(err));
    // lay ds phim dang chieu rap
    ApiAll.getPopular("now_playing")
      .then((repo) => {
        setListNowplaying(repo?.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);
  const ClickDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="">
      {/* banner */}
      <div className="upcoming w-full h-[450px] rounded-3xl relative overflow-hidden">
        <div className="w-full h-full bg-black absolute top-0 left-0 bottom-0 opacity-30"></div>
        <Swiper>
          {listToprated?.slice(10, 14).map((ele) => (
            <SwiperSlide key={ele.id}>
              <Items
                height="450px"
                size="3xl"
                title={ele.title}
                overview={ele.overview}
                img={ele.backdrop_path}
                bottom="16"
                left="5"
              />
              <div className="flex w-[180px] justify-between absolute bottom-3 left-5">
                <BtnWath
                  h="50px"
                  w="120px"
                  onClick={() => ClickDetail(ele.id)}
                />
                <BtnAdd h="50px" w="50px" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* nhung bo phim dang chieu rap*/}
      <div className="mt-20 nowPlaying ">
        <h3 className="text-3xl font-bold">Những bộ phim đang Chiếu Rạp</h3>
        <div className="relative w-full h-[400px]  flex mt-10 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
          >
            {listNowplaying?.map((ele) => (
              <SwiperSlide key={ele.id}>
                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                <Items
                  height="400px"
                  size="xl"
                  title={ele.title}
                  overview=""
                  img={ele.poster_path}
                  bottom="15"
                  left="4"
                />
                <div className="absolute bottom-0 w-full ">
                  <BtnWath h="40px" onClick={() => ClickDetail(ele.id)} />
                </div>
                <div className="absolute left-4 top-3 w-full ">
                  <BtnAdd h="40px" w="40px" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* nhung bo phim hang dau*/}
      <div className="mt-20 nowPlaying">
        <h3 className="text-3xl font-bold">Những bộ phim Hot nhất</h3>
        <div className="relative w-full h-[400px]  flex mt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
          >
            {listToprated?.map((ele) => (
              <SwiperSlide key={ele.id}>
                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                <Items
                  height="400px"
                  size="xl"
                  title={ele.title}
                  overview=""
                  img={ele.poster_path}
                  bottom="8"
                  left="4"
                />
                <div className="absolute bottom-0 w-full ">
                  <BtnWath h="40px" onClick={() => ClickDetail(ele.id)} />
                </div>
                <div className="absolute left-4 top-3 w-full ">
                  <BtnAdd h="40px" w="40px" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* những bộ phim nổi tiêngs */}
      <div className="mt-20 nowPlaying">
        <h3 className="text-3xl font-bold">Những bộ phim NỔI tiếng</h3>
        <div className="relative w-full h-[400px]  flex mt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={true}
          >
            {listPopular?.map((ele) => (
              <SwiperSlide key={ele.id}>
                <div className="absolute w-full h-full bg-black opacity-30 rounded-3xl"></div>
                <Items
                  height="400px"
                  size="xl"
                  title={ele.title}
                  overview=""
                  img={ele.poster_path}
                  bottom="8"
                  left="4"
                />
                <div className="absolute bottom-0 w-full ">
                  <BtnWath h="40px" onClick={() => ClickDetail(ele.id)} />
                </div>
                <div className="absolute left-4 top-3 w-full ">
                  <BtnAdd h="40px" w="40px" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Home;

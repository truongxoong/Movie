import { Button, Tabs } from "antd";
import {
  LinkOutlined,
  FacebookFilled,
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { ApiAll } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../component/card";
import Trailer from "../../component/trailer";
const urlImg = "https://image.tmdb.org/t/p/original";

function DetailMovie() {
  let { IdMovie } = useParams();
  const [Detail, setDetail] = useState();
  useEffect(() => {
    ApiAll.getDetail(IdMovie)
      .then((repo) => {
        setDetail(repo?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const listDetail = [
    {
      label: "Summary",
      key: "1",
      children: `${Detail?.overview}`,
    },
    {
      label: "Cast",
      key: "2",
      children: <Card />,
    },
    {
      label: "Trailer",
      key: "re",
      children: <Trailer />,
    },
  ];
  return (
    <div className=" border w-full">
      <div className="w-full h-[400px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={`${urlImg}${Detail?.backdrop_path}`}
        />
      </div>
      <div className=" w-full px-7 flex pb-4 -top-[100px]">
        <div className="w-[30%] p-4 bg-white rounded-lg border ">
          <div className="w-full h-[550px] overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover"
              src={`${urlImg}${Detail?.poster_path}`}
            />
          </div>
          <div className="pt-5">
            <p className="m-0 text-xl font-bold">Thời lượng phim</p>
            <p className="m-0 text-sm text-slate-500 font-medium">
              {Detail?.runtime} phút
            </p>
          </div>
          <div className="pt-5">
            <p className="m-0 text-xl font-bold">Ngày phát hành</p>
            <p className="m-0 text-sm text-slate-500 font-medium">
              {Detail?.release_date}
            </p>
          </div>
          <div className="pt-5">
            <p className="m-0 text-xl font-bold">Plot</p>
            <p className="m-0 text-sm text-slate-500 font-medium">
              peter parker and his friends go on a summer trip to Eurropa
            </p>
          </div>
        </div>
        <div className="w-[70%] rounded-lg ml-4 bg-white">
          <div className="h-[200px] border rounded-lg p-4">
            <div className="h-[50%] flex items-center justify-between border-b-2">
              <div className="text-2xl font-bold">{Detail?.title}</div>
              <div className="flex">
                <div className="bg-red-400 px-4">
                  <LinkOutlined />
                </div>
                <Button type="primary" className="ml-2">
                  Watch
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between h-[50%]">
              <div className="text-lg font-medium">
                Budget: <span>{Detail?.budget}</span>
              </div>
              <div className="flex justify-between w-[120px] text-2xl">
                <div className="text-teal-500">
                  <FacebookFilled />
                </div>
                <div className="text-red-500">
                  <YoutubeFilled />
                </div>
                <div className="text-sky-600">
                  <TwitterCircleFilled />
                </div>
                <div className="text-yellow-400">
                  <InstagramFilled />
                </div>
              </div>
            </div>
          </div>
          <div className="border mt-5 rounded-lg p-4">
            <Tabs defaultActiveKey="1" items={listDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailMovie;

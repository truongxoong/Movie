import { useEffect, useState } from "react";
import { ApiAll } from "../../api";
import { urlImg } from "../../component/Items";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { Spin } from "antd";
import { useSelector } from "react-redux";

function Anime() {
  let search = useSelector((state) => state.counter.value);
  const [listTopRate, setListTopRate] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();
  const navigate = useNavigate();
  const navigateTopRate = (id) => {
    navigate(`/detail/${id}`);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (search) {
      ApiAll.getSearch({ query: search, page: page })
        .then((repo) => {
          setTotalResults(repo?.data?.total_results);
          setListTopRate(repo?.data?.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      ApiAll.getToprated("top_rated", { page: page })
        .then((repo) => {
          setTotalResults(repo?.data?.total_results);
          setListTopRate(repo?.data?.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [page, search]);
  const onChange = (pageID) => {
    setPage(pageID);
  };

  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div className="grid grid-cols-5 gap-6 mb-8 relative">
          {listTopRate.map((ele) => (
            <div
              key={ele.id}
              className="rounded-lg border h-[450px] overflow-hidden "
            >
              <div
                className="h-[350px] cursor-pointer"
                onClick={() => navigateTopRate(ele.id)}
              >
                <img
                  className="h-full w-full object-cover"
                  src={`${urlImg}${ele.poster_path}`}
                />
              </div>
              <div className="pt-4 pl-2">
                <p className="text-lg font-medium m-0">{ele.title}</p>
                <p>
                  View: <span className="font-medium">{ele.popularity}</span>
                </p>
              </div>
            </div>
          ))}
          <div className="absolute -bottom-16 left-[50%] translate-x-[-50%]">
            <Pagination
              defaultCurrent={page}
              total={totalResults}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Anime;

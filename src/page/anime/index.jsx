import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import useFtching from "../../hook/useFetching";
import CardMovie from "../../component/cardMovie";
import { setPage } from "../../redux/features";

function Anime() {
  const dispatch = useDispatch();
  let { page } = useSelector((state) => state.counter.page);
  const { listData, loading, totalResults } = useFtching("top_rated", page);
  const navigate = useNavigate();
  const navigateTopRate = (id) => {
    navigate(`/detail/${id}`);
  };
  const onChange = (page) => {
    console.log(page);
    dispatch(setPage({ page: page }));
  };
  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div className="grid grid-cols-5 gap-6 mb-8 relative">
          {listData.map((ele) => (
            <Fragment key={ele.id}>
              <CardMovie
                poster_path={ele.poster_path}
                title={ele.title}
                popularity={ele.popularity}
                ClickDetail={() => navigateTopRate(ele.id)}
              />
            </Fragment>
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

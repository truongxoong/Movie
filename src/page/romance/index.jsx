import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import CardMovie from "../../component/cardMovie";
import useFtching from "../../hook/useFetching";
import { setPage } from "../../redux/features";

function Romance() {
  let { page } = useSelector((state) => state.counter.page);
  const { listData, loading, totalResults } = useFtching("popular", page);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateTopRate = (id) => {
    navigate(`/detail/${id}`);
  };
  const onChange = (pageID) => {
    dispatch(setPage({ page: pageID }));
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
              onChange={onChange}
              total={totalResults}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Romance;

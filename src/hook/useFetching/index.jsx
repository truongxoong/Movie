import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiAll } from "../../api";

export default function useFtching(type, page) {
  let search = useSelector((state) => state.counter.value);
  let pageHook = useSelector((state) => state.counter.page);

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetching = async () => {
    setLoading(true);
    if (search) {
      await ApiAll.getSearch({ query: search })
        .then((repo) => {
          setListData(repo?.data?.results);
          setTotalResults(repo?.data.total_results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      await ApiAll.getPopular(type, { page: page })
        .then((repo) => {
          setListData(repo?.data?.results);
          setTotalResults(repo?.data.total_results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    fetching();
  }, [search, pageHook]);
  return { search, listData, loading, totalResults, page };
}

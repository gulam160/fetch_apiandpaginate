import { useEffect, useState } from "react";
import LoadingIndicator from "./Components/loadingIndicator";
import Pagination from "./Components/pagination";
import PostItem from "./Components/postItem";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = (page = 1) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    ).then((res) => res.json());
  };

  const getUpdataData = async (page = 1) => {
    setLoading(true);
    try {
      let result = await getData(page);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error, "Page says : 400/Not Found");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpdataData(page);
  }, [page]);

  const post = data.map(({ id, title, body }) => {
    return <PostItem key={id} Id={id} Title={title} Body={body} />;
  });

  const handelChange = (changeby) => {
    setPage(page + changeby);
  };

  return loading ? (
    <LoadingIndicator />
  ) : (
    <div className="App">
      <Pagination current={page} onChange={handelChange} />
      <h2>Your Post is Here</h2>
      {post}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Post from "./Post";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const getImage = async () => {
    try {
      const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`);
      const images = await res.json();
      if (images) {
        setData((prev) => [...prev, ...images]);
      }
    } catch (error) {
        console.log("error", error);
    }
  };

  useEffect(() => {
    getImage();
  }, [pageNo]);

  console.log(data);

  return (
    <div className="parent-container">
      <Post data={data} pageNo={pageNo} setPageNo={setPageNo} /> 
    </div>
  );
};

export default InfiniteScroll;

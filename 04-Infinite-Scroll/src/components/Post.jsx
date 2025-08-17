import { useEffect } from "react";

const Post = ({ data, pageNo, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((prevPage) => prevPage + 1);
      }
    }, {threshold: 0.5});

    const lastImage = document.querySelector(".post-image:last-child");

    if (!lastImage) return;

    observer.observe(lastImage);


    return () => {
        if(lastImage) {
            observer.unobserve(lastImage);
        }

        observer.disconnect();
    }
  }, [data]);

  return data.length ? (
    <div className="post-container">
      {data.map((item) => (
        <img
          key={item.id}
          className="post-image"
          src={item.download_url}
          alt="post-image"
          loading="lazy"
        />
      ))}
    </div>
  ) : (
    <p>Loading....</p>
  );
};

export default Post;

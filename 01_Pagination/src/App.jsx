import { useEffect, useState } from "react";
import "./index.css";


function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    let skipPage = page * 20 - 20;

    const res = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${skipPage}`
    );

    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPage(Math.ceil(data.total / 20)); // if total items = 200 then page = 10
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      {products.length > 0 && (
        <div className="main__container">
          {products.map((prod) => {
            return (
              <div key={prod.id} className="product__container">
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  className="product__image"
                />
                <p>{prod.title}</p>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          {/* creating an array with length of total page  */}
          {[...Array(totalPage)].map((_, idx) => {
            return (
              <span
                className={page === idx + 1 && "selected"}
                onClick={() => setPage(idx + 1)}
                key={idx}
              >
                {idx + 1}
              </span>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default App;

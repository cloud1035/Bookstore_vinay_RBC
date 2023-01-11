import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  console.log(products);
  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <div className="products">
            {products &&
              products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.download_url} alt={product.id} />
                  <h3>{Number(product.id) + Number(1)}</h3>
                  <h4>{product.author}</h4>
                  <div className="details">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Senectus et netus et malesuada fames ac. Eu nisl
                      nunc mi ipsum faucibus vitae.
                    </span>
                    <span className="price">$10</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;

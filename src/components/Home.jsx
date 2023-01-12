import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //navigate("/cart"); //will Navigate to cart page directly after adding product
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <div className="products">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.isbn13} className="product">
                <img src={product.image} alt={product.subtitle} />

                <h4>{product.title}</h4>
                <div className="details" key={product.isbn13}>
                  <h4>Author: {product.isbn13}</h4>
                  <span className="description">
                    Description: {product.subtitle}
                  </span>
                  <span className="price">
                    ${Number(product.price.replace(/\$/g, ""))}
                  </span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;

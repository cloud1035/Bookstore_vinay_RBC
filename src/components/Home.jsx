import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router";
import { addToCart } from "../slices/cartSlice";

const Home = () => {
  /* const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    axios.get("https://api.itbook.store/1.0/new").then((res) => {
      setBookDetails(res.data.books);
    });
  });*/

  const { items: products, status } = useSelector((state) => state.products);
  console.log(products);
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
          {products ? (
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
            ))
          ) : (
            <p>Loading</p>
          )}
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

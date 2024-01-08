import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/cartReducer";

function ProductCard(props) {
  const product = props.product;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  return (
    <>
      <div className="product-card overflow-hidden rounded-2 d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center"> {product.title} </h3>
        <h4>{product.price}$</h4>

        <button
          className="add-to-cart btn btn-success"
          style={{ width: "90%" }}
          onClick={() => dispatch(addProduct(product))}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;

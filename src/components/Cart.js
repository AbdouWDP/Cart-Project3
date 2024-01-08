import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { clearAllProducts, deleteProduct } from "../store/cartReducer";

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = state.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  const cartRow = state.map((product) => {
    return (
      <tr
        className="table-row border-bottom border-secondary-emphasis fw-normal"
        style={{ height: "50px" }}
        key={product.id}
      >
        <td> {product.title} </td>
        <td>{product.price}$</td>
        <td>Lorem Ipsum</td>
        <td> {product.quantity} </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteProduct(product))}
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="m-auto" style={{ width: "90%" }}>
        <h1 className="text-center mt-2">Your Cart</h1>
        <button
          className="btn btn-success"
          onClick={() => dispatch(clearAllProducts())}
        >
          Clear Products
        </button>
        <h3>Total Price is: {total}$ </h3>
        <table className="mt-2 w-100">
          <thead
            className="border-bottom border-secondary"
            style={{ height: "50px" }}
          >
            <tr>
              <th className="w-25">Name</th>
              <th className="w-25">Price</th>
              <th className="w-25">Description</th>
              <th className="w-25">Quantity</th>
            </tr>
          </thead>
          <tbody>{cartRow}</tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;

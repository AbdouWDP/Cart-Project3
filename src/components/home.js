import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/reducer";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const allProducts = state.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <>
      <div
        className="m-auto mt-4 d-flex justify-content-center flex-wrap gap-4"
        style={{ width: "90%" }}
      >
        {allProducts}
      </div>
    </>
  );
}

export default HomePage;

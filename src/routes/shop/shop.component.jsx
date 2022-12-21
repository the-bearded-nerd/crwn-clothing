import { useContext } from "react";

import { ProductsContext } from "../../context/products.context";
import ProducrCard from "../../components/Product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProducrCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

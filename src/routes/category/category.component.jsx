import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProducrCard from "../../components/Product-card/product-card.component";

import { CategoriesContext } from "../../context/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProducrCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;

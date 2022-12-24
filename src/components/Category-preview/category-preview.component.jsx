import { Link } from "react-router-dom";
import ProducrCard from "../../components/Product-card/product-card.component";

import "./category-preview.styles.scss";

const CateroryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProducrCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CateroryPreview;

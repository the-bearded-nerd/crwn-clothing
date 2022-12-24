import { Link } from "react-router-dom";
import ProducrCard from "../../components/Product-card/product-card.component";

import { CategoryPreviewContainer, Preview } from "./category-preview.styles";

const CateroryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProducrCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CateroryPreview;

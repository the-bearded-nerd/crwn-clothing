import DirectoryItem from "../Directory-item/directory-item.component";

import "./CategoryList.styles.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;

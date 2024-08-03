import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Sop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

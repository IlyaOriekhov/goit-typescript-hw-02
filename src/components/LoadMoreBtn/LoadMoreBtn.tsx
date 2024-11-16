import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button type="button" className={css.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

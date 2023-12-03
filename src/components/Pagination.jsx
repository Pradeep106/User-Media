import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";

const Pagination = ({ totalPage }) => {
  const [active, setActive] = React.useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  totalPage = Math.ceil(totalPage / 20);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => handlePageClick(index),
  });

  const handlePageClick = (index) => {
    setActive(index);
    const newSearch = `?page=${index}`;
    navigate(`${location.pathname}${newSearch}`);
  };

  const next = () => {
    if (active === totalPage) return;
    handlePageClick(Math.min(active + 1, totalPage));
  };

  const prev = () => {
    if (active === 1) return;
    handlePageClick(Math.max(active - 1, 1));
  };

  const renderPageNumbers = () => {
    const pagesToShow = 4;
    const pageNumbers = [];
    const ellipsis = <span key="ellipsis">...</span>;

    if (totalPage <= pagesToShow) {
      for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }
    } else {
      const start = Math.max(1, active - Math.floor(pagesToShow / 2));
      const end = Math.min(totalPage, start + pagesToShow - 1);

      if (start > 1) {
        pageNumbers.push(
          <IconButton key={1} {...getItemProps(1)}>
            {1}
          </IconButton>
        );
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <IconButton key={i} {...getItemProps(i)}>
            {i}
          </IconButton>
        );
      }

      if (end < totalPage) {
        pageNumbers.push(ellipsis);
        pageNumbers.push(
          <IconButton key={totalPage} {...getItemProps(totalPage)}>
            {totalPage}
          </IconButton>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}>
        Previous
      </Button>
      <div className="flex items-center gap-2">{renderPageNumbers()}</div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPage}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;

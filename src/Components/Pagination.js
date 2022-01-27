import { useEffect, useRef } from "react";

const offsetPage = [-2, -1, 0, 1, 2];

function Pagination({
  activePage,
  setActivePage,
  noOfRecipes,
  RESULTS_PER_PAGE,
}) {
  const noOfPages = Math.ceil(noOfRecipes / RESULTS_PER_PAGE);

  const pages = useRef([1, 2, 3, 4, 5]);
  useEffect(() => {
    let newOffset = -1;
    pages.current = offsetPage.map((offset) => {
      if (offset + activePage > noOfPages) return undefined;
      if (offset + activePage > 0) {
        return offset + activePage + 1 + newOffset;
      } else {
        newOffset++;
        return activePage + newOffset;
      }
    });

    if (activePage === 2) pages.current = [1, 2, 3, 4, 5];
  }, [activePage, RESULTS_PER_PAGE, noOfPages, noOfRecipes]);

  const nextPageHandler = () => {
    if (activePage === noOfPages) return;
    setActivePage((page) => page + 1);
  };

  const prevPageHandler = () => {
    if (activePage === 1) return;
    setActivePage((page) => page - 1);
  };

  const changePageHandler = (e) => {
    // console.log(+e.target.dataset.page);
    setActivePage(+e.target.dataset.page);
  };

  return (
    <div className="pagination">
      {activePage > 1 && (
        <button className="btn-pagination prev" onClick={prevPageHandler}>
          Prev
        </button>
      )}
      {!pages.current.includes(1) && (
        <>
          <button className="page-btn" onClick={() => setActivePage(1)}>
            {1}
          </button>
          <span>. . .</span>
        </>
      )}

      {pages.current.map((page, i) => {
        return (
          page && (
            <button
              key={i}
              className={`page-btn ${activePage === page ? "active-btn" : ""}`}
              data-page={page}
              onClick={changePageHandler}
            >
              {page}
            </button>
          )
        );
      })}
      {!pages.current.includes(noOfPages) && (
        <>
          <span>. . .</span>
          <button className="page-btn" onClick={() => setActivePage(noOfPages)}>
            {noOfPages}
          </button>
        </>
      )}
      {activePage !== noOfPages && (
        <button className="btn-pagination next" onClick={nextPageHandler}>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;

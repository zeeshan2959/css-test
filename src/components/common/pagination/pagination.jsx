import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./index.css"

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-normal font-bold transition-colors rounded-lg
      ${active ? "active-btn" : "text-[#A1A1A1]"}
      ${
        !disabled
          ? "bg-[#FFFFFF] active-btn-hover"
          : "text-[#A1A1A1] bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 10;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex,gotoPage]);

  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      <li>
        <Button2
          content={<FaChevronLeft size="0.6rem" />}
          onClick={() => gotoPage(pageIndex - 1)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={<FaChevronRight size="0.6rem" />}
          onClick={() => gotoPage(pageIndex + 1)}
          disabled={!canNextPage}
        />
      </li>
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

const PaginationNav1Presentation = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setPageCount] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setPageCount(3);
      } else {
        setPageCount(10);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex justify-center gap-3 flex-wrap p-6 py-6">
      <PaginationNav1
        gotoPage={setPageIndex}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  );
}

export default PaginationNav1Presentation;

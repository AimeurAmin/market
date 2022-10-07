import React, { useEffect } from "react";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

import styles from "./paginator.module.scss";

interface Props {
  pagesNumber: number;
  selectedPage: number | undefined;
}

const { container, pageBox, activePage, arrow, arrowContainer } = styles;

const Paginator = ({ pagesNumber = 0, selectedPage = 1 }: Props) => {
  const [currentPage, setCurrentPage] = useState(selectedPage);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const generatePages = (): number[] => {
    let pages = [currentPage];
    for (let i = 1; i <= pagesNumber && pages.length <= 4; i++) {
      if (currentPage - i > 0) {
        pages = [currentPage - i, ...pages];
      }
      if (currentPage + i <= pagesNumber) {
        pages = [...pages, currentPage + i];
      }
    }
    return pages;
  };
  const moveLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const moveRight = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setVisiblePages(generatePages());
  }, [currentPage]);

  return pagesNumber ? (
    <div className={container}>
      <div className={arrowContainer}>
        {pagesNumber > 4 && currentPage > 1 && (
          <MdArrowLeft size={45} onClick={moveLeft} className={arrow} />
        )}
      </div>
      {visiblePages.map((pageNumber: number) => (
        <div key={pageNumber}>
          <div
            className={`${pageBox} ${
              pageNumber === currentPage ? activePage : ""
            }`}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </div>
        </div>
      ))}
      <div className={arrowContainer}>
        {pagesNumber > 4 && currentPage < pagesNumber && (
          <MdArrowRight size={45} onClick={moveRight} className={arrow} />
        )}
      </div>
    </div>
  ) : null;
};

export default Paginator;

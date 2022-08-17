import React, { useEffect } from "react";
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

import styles from "./paginator.module.scss";

interface Props {
  pagesNumber: number;
  selectedPage: number | undefined;
}

const { container, pageBox, activePage, arrow } = styles;

// const generatePages = (
//   current: number,
//   pagesNumber: number
// ): {
//   prev: boolean;
//   pages: number[];
//   next: boolean;
// } => {
//   const MAX_SHOWING_PAGES = 2;
//   let pages: number[] = [];
//   let iter = MAX_SHOWING_PAGES;
//   for (let i = current; i > 0 && iter > 1; i--) {
//     pages = [i, ...pages];
//     iter--;
//   }

//   iter = MAX_SHOWING_PAGES;
//   for (let i = current + 1; i <= pagesNumber && iter >= 0; i++) {
//     pages = [...pages, i];
//     iter--;
//   }

//   return {
//     prev: pages[0] !== 1,
//     pages,
//     next: pages[pages.length - 1] !== pagesNumber,
//   };
// };

const Paginator = ({ pagesNumber = 0, selectedPage = 1 }: Props) => {
  const [currentPage, setCurrentPage] = useState(selectedPage);
  const [visiblePages, setVisiblePages] = useState<{
    previous: boolean;
    pages: number[];
    next: boolean;
  }>({
    previous: false,
    pages: [],
    next: false,
  });
  useEffect(() => {
    const generatedPages = generateNeighboors(1, pagesNumber);
    setVisiblePages({
      previous: false,
      pages: generatedPages,
      next: generatedPages.includes(2),
    });
    // Just a one time thing to generate pages at when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moveRight = () => {
    setCurrentPage((prev) => {
      if (prev < pagesNumber) {
        const generatedPages = generateNeighboors(prev + 1, pagesNumber);
        setVisiblePages({
          previous: generatedPages.includes(prev - 1),
          pages: generatedPages,
          next: generatedPages.includes(prev + 1),
        });
      } else {
        setVisiblePages((prev) => ({ ...prev, next: false }));
      }

      return prev < pagesNumber ? prev + 1 : prev;
    });
  };

  const moveLeft = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        const generatedPages = generateNeighboors(prev - 1, pagesNumber);
        setVisiblePages({
          previous: generatedPages.includes(prev - 2),
          pages: generatedPages,
          next: true,
        });
      } else {
        setVisiblePages((prev) => ({ ...prev, previous: false }));
      }

      return prev > 1 ? prev - 1 : prev;
    });
  };

  const generateNeighboors = (
    currentPage: number,
    pagesNumber: number
  ): number[] => {
    const MAX_NEIGHBORS = 4;
    let generatedPages = [currentPage];
    for (
      let i = 1;
      i <= pagesNumber && generatedPages.length <= MAX_NEIGHBORS;
      i++
    ) {
      if (currentPage - i > 0) {
        generatedPages = [currentPage - i, ...generatedPages];
      }
      if (currentPage + i < pagesNumber) {
        generatedPages = [...generatedPages, currentPage + i];
      }
    }
    return generatedPages;
  };
  useEffect(() => {}, [currentPage]);

  return pagesNumber ? (
    <div className={container}>
      {visiblePages.previous && (
        <MdArrowLeft size={45} onClick={moveLeft} className={arrow} />
      )}
      {visiblePages.pages.map((pageNumber: number) => (
        <>
          <div
            className={`${pageBox} ${
              pageNumber === currentPage ? activePage : ""
            }`}
            onClick={() => {
              generateNeighboors(pageNumber, pagesNumber);
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </div>
        </>
      ))}
      {visiblePages.next && (
        <MdArrowRight size={45} onClick={moveRight} className={arrow} />
      )}
    </div>
  ) : null;
};

export default Paginator;

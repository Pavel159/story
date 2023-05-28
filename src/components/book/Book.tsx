import HTMLFlipBook from 'react-pageflip';
import BookCover from './book-cover/BookCover';
import BookPage from './book-page/BookPage';
import cl from './Book.module.scss';
import data from './data';
import { FC, useRef, useState } from 'react';

const Book: FC = () => {
  const bookRef = useRef<any>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const nextButtonClick = () => {
    bookRef.current.pageFlip().flipNext();
    setPageIndex((prev) => prev + 1);
  };

  const prevButtonClick = () => {
    bookRef.current.pageFlip().flipPrev();
    setPageIndex((prev) => prev - 1);
  };

  return (
    <>
      {pageIndex === 0 && (
        <div className={cl.topButtons}>
          <div className={cl.circleButton} />
          <div className={cl.startButton} onClick={nextButtonClick} />
        </div>
      )}

      {/* 
// @ts-ignore */}
      <HTMLFlipBook
        className={cl.book}
        width={465}
        height={594}
        showCover={true}
        ref={bookRef}>
        <BookCover />
        {data.map((page) => (
          <BookPage
            key={page.id}
            title={page.title}
            imgSrc={page.imgSrc}
            text={page.text}
            pageNumber={page.pageNumber}
          />
        ))}
        <BookCover />
      </HTMLFlipBook>
      {pageIndex !== 0 && (
        <div className={cl.controlButtons}>
          <div onClick={prevButtonClick} className={cl.buttonLeft} />
          <div onClick={nextButtonClick} className={cl.buttonRight} />
          <div className={cl.volumeMobile} />
        </div>
      )}
      <div className={cl.volume} />
    </>
  );
};

export default Book;

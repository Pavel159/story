import React from 'react';
import cl from './BookPage.module.scss';

interface IBookPageProps {
  title?: string;
  imgSrc?: string;
  text: string;
  pageNumber: number;
}

export type RefType = HTMLDivElement;

const BookPage = React.forwardRef<RefType, IBookPageProps>(
  ({ title, imgSrc, text, pageNumber }, ref) => {
    return (
      <div className={cl.bookPage} ref={ref}>
        <div className={cl.pageContent}>
          <div>
            {title && <h3 className={cl.title}>{title}</h3>}
            <img className={cl.image} src={imgSrc} alt='Image' />
            <p className={cl.text}>{text}</p>
          </div>
          <div className={cl.pageNumber}>
            <span>{pageNumber}</span>
          </div>
        </div>
      </div>
    );
  }
);

export default BookPage;

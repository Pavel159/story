import React from 'react';
import cl from './BookCover.module.scss';

export type RefType = HTMLDivElement;

const BookCover = React.forwardRef<RefType>((_props, ref) => {
  return <div className={cl.bookCover} ref={ref} data-density='hard'></div>;
});

export default BookCover;

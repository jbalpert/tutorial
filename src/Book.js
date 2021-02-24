import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, mouseOver
  const clickHandler = () => {
    alert("hello World");
  };
  const complexclick = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexclick(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;

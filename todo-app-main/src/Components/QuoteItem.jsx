import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./style.css";

const QuoteItem = ({ quoteText, quoteAuthor, quoteGenre, openAuthorList }) => {
  return (
    <div className="card-container">
      <div className="quote-container">
        <p className="quote">{quoteText}</p>
      </div>
      <div className="author-wrapper" onClick={openAuthorList}>
        <div className="author-container">
          <h1 className="author">{quoteAuthor}</h1>
          <p className="genere">{quoteGenre}</p>
        </div>
        <div className="arrow-icon">
          <span>
            <ArrowRightAltIcon sx={{ color: "#ffffff" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;

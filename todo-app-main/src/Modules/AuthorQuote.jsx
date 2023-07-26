import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuoteItem from "../Components/QuoteItem";
import "../App.css";

const AuthorQuote = () => {
  const { authorName } = useParams();
  const [authorQuotesList, setAuthorQuotesList] = useState([]);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorName]);
  async function getData() {
    const authorQuotes = await axios
      .get(
        `https://quote-garden.onrender.com/api/v3/quotes?author=${authorName}`
      )
      .then(function (response) {
        console.log("author response--->", response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    setAuthorQuotesList(authorQuotes);
  }
  return (
    <div className="quoteItem-wrapper">
      <div style={{ fontSize: "36px", fontWeight: 700, marginBottom: "50px" }}>
        {authorName}
      </div>
      <div>
        {authorQuotesList.map((quote) => (
          <QuoteItem
            key={quote._id}
            quoteText={quote.quoteText}
            quoteAuthor={quote.quoteAuthor}
            quoteGenre={quote.quoteGenre}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorQuote;

import React, { useState, useEffect } from "react";
import GenerateButton from "../Components/GenerateButton";
import "../App.css";
import QuoteItem from "../Components/QuoteItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quotes = () => {
  let navigate = useNavigate();
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    if (quote.length === 0) {
      fetchRandomQuote();
    }
  }, [quote]);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(
        "https://quote-garden.onrender.com/api/v3/quotes/random"
      );
      const randomQuote = response.data.data;
      setQuote(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickRandomQuote = async () => {
    fetchRandomQuote();
  };

  const handleClickAuthor = async (authorName) => {
    console.log("----->", authorName);
    // history.push(`/author/${authorName}`);

    navigate(`/author/${authorName}`, { state: { authorName } });
  };

  return (
    <div style={{ textAlign: "end" }}>
      <GenerateButton onClickGenerate={handleClickRandomQuote} />

      <div className="quoteItem-wrapper">
        {quote.map((q) => (
          <QuoteItem
            key={q._id}
            quoteText={q.quoteText}
            quoteAuthor={q.quoteAuthor}
            quoteGenre={q.quoteGenre}
            openAuthorList={() => handleClickAuthor(q.quoteAuthor)}
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;

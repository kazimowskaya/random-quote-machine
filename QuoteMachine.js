import React, { useState, useEffect } from 'react';
import './QuoteMachine.css'; // Stil dosyanızı içe aktarın

const QuoteMachine = () => {
  // State for quote and author
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component mounts
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a id="tweet-quote" onClick={tweetQuote} href="#">
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteMachine;

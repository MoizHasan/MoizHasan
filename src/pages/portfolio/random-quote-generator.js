import React, {useEffect, useState} from 'react'
import Layout from '../../components/layout.js'
import * as styles from './random-quote-generator.module.css'
import { FaTwitter } from 'react-icons/fa'
/*
 * Random Quote Generation with React
 */
const QuoteBox = () => {

    const [quotes, setQuotes] = useState();
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [backgroundColor, setBackGroundColor] = useState();

  const updateBackground = () => {
    // get random number.
    const colors = [0, 0, 0].map(x => x + Math.floor(Math.random() * 200));
    let color = 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')';
    setBackGroundColor(color);
  }

  const genQuote = (quotes) => {
    let x = Math.floor(Math.random() * (quotes.length - 1));
    setQuote(quotes[x].quote.replace(/<(?:.|\n)*?>/gm, ''));
    setAuthor(quotes[x].author);
    updateBackground();
  };

  const loadQuotes = () => {
    const quotes = [];
    fetch("https://en.wikiquote.org/w/api.php?    &origin=*&action=parse&page=Wikiquote:Quote%20of%20the%20Day&format=json",
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(data => {
        var text = data["parse"]["text"];
        var list = JSON.stringify(text).split('<li>');
        var author = '';
        var quote = '';
        for (let i = 1; i < list.length - 1; i++) {
          quote = list[i].substring(0, list[i].indexOf('~') - 1);
          author = list[i].substring(list[i].indexOf('">') + 2, list[i].indexOf('</a'));
          quotes.push({ author: author, quote: quote });
        }
          setQuotes(quotes);
          genQuote(quotes);
      });
  }

  useEffect(() => {
    loadQuotes();
  }, []);

    return (
      <Layout>
        <div id="quote-box" className={styles.quoteBox} style={{ backgroundColor: backgroundColor }}>
          <h2 id="text" className={styles.text}>"{quote}"</h2>
          <p id="author" className={styles.author}>-{author}</p>
          <div>
            <button id="new-quote" className={styles.newQuote} onClick={() => genQuote(quotes)}>
              New Quote
            </button>
            <a style={{ marginLeft: '20px', textDecoration: 'none' }} id="tweet-quote" href={"https://twitter.com/intent/tweet?text="
              + '"' + quote + '"  - ' + author} target="_blank" rel="noopener noreferrer">
              <FaTwitter />Share on Twitter</a>
          </div>
        </div>
      </Layout>
    )
  }

export default QuoteBox;
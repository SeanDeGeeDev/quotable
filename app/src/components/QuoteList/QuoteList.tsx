import { useState } from 'react';

import './QuoteList.scss';

import Quote from '../Quote/Quote';

const QuoteList = () => {
  interface Quote {
    id: number;
    content: string;
    timestamp: number;
    tags: string[];
  }

  const [quotes] = useState<Quote[]>([
    {
      id: 1,
      content: 'To be, or not to be, that is the question.',
      timestamp: 1610368371,
      tags: ['Shakespeare', 'Hamlet', 'Existentialism'],
    },
    {
      id: 2,
      content: "All the world's a stage",
      timestamp: 1610368371,
      tags: ['Shakespeare', 'As You Like It', 'Existentialism'],
    },
  ]);

  return (
    <div className="quote-list">
      <div className="quote-list__list-container">
        {quotes.map(quote => (
          <Quote key={quote.id} content={quote.content} timestamp={quote.timestamp} tags={quote.tags} />
        ))}
      </div>
    </div>
  );
};

export default QuoteList;

import './Quote.scss';

import Tag from '../Tag/Tag';

import quotemarkLeft from '../../assets/quotemark_left.svg';
import quotemarkRight from '../../assets/quotemark_right.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const Quote = ({ content, timestamp, tags }: { content: string; timestamp: number; tags: string[] }) => {
  const timestampToDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="quote">
      <div className="quote__actions">
        <span className="quote__timestamp">{timestampToDate(timestamp)}</span>
        <div className="quote__actions__actions-container">
          <button className="quote__actions__action-button">
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="quote__actions__action-button">
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      </div>
      <div className="quote__content">
        <img src={quotemarkLeft} alt="" className="quote__quotemark quote__quotemark--left" />
        <div>{content}</div>
        <img src={quotemarkRight} alt="" className="quote__quotemark quote__quotemark--right" />
      </div>
      <div className="quote__tags">
        {tags.map(tag => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </div>
  );
};

export default Quote;

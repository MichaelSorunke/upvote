import React, { useContext } from 'react';
import UpvoteButton from './UpvoteButton';
import { UpvoteContext } from './UpvoteContext';

const UpvoteList: React.FC = () => {
  const { upvotes, toggleUpvote } = useContext(UpvoteContext);

  const handleUpvoteClick = (index: number) => {
    toggleUpvote(index);
  };

  return (
    <div>
      {upvotes.map((upvote, index) => (
        <UpvoteButton
          key={index}
          selected={upvote.selected}
          onClick={() => handleUpvoteClick(index)}
        />
      ))}
    </div>
  );
};

export default UpvoteList;

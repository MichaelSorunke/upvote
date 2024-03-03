import React from 'react';
import UpvoteIcon from './UpvoteIcon';

interface UpvoteButtonProps {
  selected: boolean;
  onClick: () => void;
}

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ selected, onClick }) => {
  return (
    <button onClick={onClick} style={{ background: selected ? '#E5E8FD' : '#F4F6F8' }}>
      <UpvoteIcon selected={selected} />
    </button>
  );
};

export default UpvoteButton;

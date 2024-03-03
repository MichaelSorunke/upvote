import React from 'react';
import './App.css';
import { UpvoteProvider } from './UpvoteContext';
import UpvoteList from './UpvoteList';
import AddUpvoteButton from './AddUpvoteButton';

function App() {
  return (
    <UpvoteProvider>
      <div className="App">
        <h1>Upvote App</h1>
        <UpvoteList />
        <AddUpvoteButton />
      </div>
    </UpvoteProvider>
  );
}

export default App;
import React from 'react';
import {
  Link
} from 'react-router-dom';

export const FeedList: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/feeds/xxx">All</Link>
        </li>
        <li>
          <Link to="/feeds/xxx">Google Tech Blog</Link>
        </li>
        <li>
          <Link to="/feeds/xxx">LIfe Hacker</Link>
        </li>
      </ul>
      <button>Add</button>
    </>
  );
}

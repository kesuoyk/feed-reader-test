import React from 'react';
import {
  Link
} from 'react-router-dom';

import {
  useDocumentTitle,
} from '../hooks';

export const FeedList: React.FC = () => {
  useDocumentTitle('Feed List');

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

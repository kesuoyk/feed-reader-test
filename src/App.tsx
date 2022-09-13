import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import {
  FeedList,
  FeedDetail,
} from './pages';

export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <button>戻る</button>
        <button>設定</button>
      </header>

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<FeedList/>} />
            <Route path="/feeds/xxx" element={<FeedDetail/>} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

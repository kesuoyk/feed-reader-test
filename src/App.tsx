import React from 'react';
import {
  Route,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom';

import {
  FeedList,
  FeedDetail,
} from './pages';

export const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <button onClick={() => navigate(-1)}>戻る</button>
        <button>設定</button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<FeedList/>} />
          <Route path="/feeds/xxx" element={<FeedDetail/>} />
        </Routes>
      </main>
    </>
  );
}

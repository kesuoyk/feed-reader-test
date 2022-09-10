import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <button>戻る</button>
        <button>設定</button>
      </header>
      <ul>
        <li>All</li>
        <li>Google Tech Blog</li>
        <li>LIfe Hacker</li>
      </ul>
      <button>Add</button>
    </>
  );
}

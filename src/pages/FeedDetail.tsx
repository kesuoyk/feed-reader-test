import React from 'react';

import {
  useDocumentTitle,
} from '../hooks';

export const FeedDetail: React.FC = () => {
  useDocumentTitle('Feed Detail');

  return (
    <>
      <ul>
        <li>東京都 新型コロナ 31人死亡 9635人感染確認 前週比6000人余減</li>
      </ul>
    </>
  );
}

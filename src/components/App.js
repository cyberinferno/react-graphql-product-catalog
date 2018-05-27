import React from 'react';
import RenderPage from './RenderPage';

const App = ({ match: { params } }) => {
  return (
    <RenderPage filter={params.filter || 'home'} />
  );
};

export default App;

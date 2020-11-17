import React, { useState, useEffect } from 'react';

const isProduction = process.env.NODE_ENV === 'production';

const App = () => {
  const [dataFromServer, setDataFromServer] = useState('');
  const [dataFromServer1, setDataFromServer1] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setDataFromServer);

    fetch('/api/sub')
      .then(res => res.text())
      .then(setDataFromServer1);
  }, []);

  const hmr = isProduction
    ? 'HMR is not available in production.'
    : 'HMR is working!!';

  return (
    <div>
      {hmr}
      <br />
      {dataFromServer}
      <br />
      {dataFromServer1}
    </div>
  );
};

export default App;

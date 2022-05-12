import React from 'react';
import { TailSpin } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div style={{ height: '100vh', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;

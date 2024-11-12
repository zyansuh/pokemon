import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/dex');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>나만의 포켓몬 도감을 시작해보세요!</h2>
      <button onClick={handleStart} style={{ padding: '10px 20px', fontSize: '16px' }}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
}

export default Home;

import React from 'react';
import '../styles/LastPage.css';
import Header from './Header';

const LastPage = () => {
  return (
    <div>
      <Header />
      <div className="centerSort">
        <div className="score">
          점수 출력
        </div>

        <div className="">
          축하 메세지
        </div>

        <button>시작 화면 가기</button>
      </div>
    </div>
  )
}

export default LastPage;
import React from "react"; // 왜 왜
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../styles/MainPage.css";
import Header from './Header';

const MainPage = () => {
  return (
    <div className="layout">
      <Header />
        {/* <input type="submit" value="시작하기" onClick={start}/> */}
        <div className="StartOrMakeQuiz">
          <div className="btn"><Link to="/quiz" style={{textDecoration: 'none', color: '#fff'}}>시작하기</Link></div>
          <div className="btn"><Link to="/quiz/add" style={{textDecoration: 'none', color: '#fff'}}>퀴즈 만들기</Link></div>
        </div>
    </div>
  );
};

export default MainPage;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/AddQuizzes.css";
import "./Header";

import Header from "./Header";

const AddQuizzes = () => {
  const [question, setQuestion] = useState<string>("");
  const [data1, setData1] = useState<string>("");
  const [data2, setData2] = useState<string>("");
  const [data3, setData3] = useState<string>("");
  const [data4, setData4] = useState<string>("");
  let [answer1, setAnswer1] = useState("");
  let [answer2, setAnswer2] = useState("");
  let [answer3, setAnswer3] = useState("");
  let [answer4, setAnswer4] = useState("");

  const questionHandler = (e: any) => {
    e.preventDefault();
    setQuestion(e.target.value);
    console.log(question);
  };

  const data1Handler = (e: any) => {
    e.preventDefault();
    setData1(e.target.value);
  };

  const data2Handler = (e: any) => {
    e.preventDefault();
    setData2(e.target.value);
  };

  const data3Handler = (e: any) => {
    e.preventDefault();
    setData3(e.target.value);
  };

  const data4Handler = (e: any) => {
    e.preventDefault();
    setData4(e.target.value);
  };

  const answer1Handler = (e: any) => {
    setAnswer1(e.target.value);
  };

  const answer2Handler = (e: any) => {
    setAnswer2(e.target.value);
  };

  const answer3Handler = (e: any) => {
    setAnswer3(e.target.value);
  };

  const answer4Handler = (e: any) => {
    setAnswer4(e.target.value);
  };

  const Submit = () => {
    if (answer1 === "") {
      answer1 = "F";
    }
    if (answer2 === "") {
      answer2 = "F";
    }
    if (answer3 === "") {
      answer3 = "F";
    }
    if (answer4 === "") {
      answer4 = "F";
    }
    let body = {
      question,
      data_1: data1,
      data_2: data2,
      data_3: data3,
      data_4: data4,
      answer_1: answer1,
      answer_2: answer2,
      answer_3: answer3,
      answer_4: answer4,
    };

    axios
      .post("http://localhost:3002/create", body)
      .then((data) => console.log(data.data.question));
  };
  return (
    <div>
      <Header />
      <div className="Add-layout">
        <form onSubmit={Submit}>
          <input
            type="text"
            value={question}
            onChange={questionHandler}
            placeholder="문제"
            className="question"
          />
          {/* <label>맞는 답</label>  */}
          <br />
          <input
            type="text"
            value={data1}
            onChange={data1Handler}
            placeholder="1번 답"
            className="checking"
          />
          <input type="radio" value="T" onChange={answer1Handler}/>
          <br />
          <input
            type="text"
            value={data2}
            onChange={data2Handler}
            placeholder="2번 답"
            className="checking"
          />
          <input type="radio" value="T"  onChange={answer2Handler} />
          <br />
          <input
            type="text"
            value={data3}
            onChange={data3Handler}
            placeholder="3번 답"
            className="checking"
          />
          <input type="radio" value="T" onChange={answer3Handler} />
          <br />
          <input
            type="text"
            value={data4}
            onChange={data4Handler}
            placeholder="4번 답"
            className="checking"
          />
          <input type="radio" value="T"onChange={answer4Handler}/>
          <br />
          <input type="submit" value="입력" />
        </form>
      </div>
      <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
        <p className="btn1">돌아가기</p>
      </Link>
    </div>
  );
};

export default AddQuizzes;

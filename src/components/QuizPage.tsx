import React, {useState, useEffect} from 'react';
import '../styles/QuizPage.css';
import axios from 'axios';
import Header from './Header';

const QuizPage = () => {
  const [quizs, setQuizs] = useState<any>([]);
  const [question, setQuestion] = useState<string>("");
  const [data1, setData1] = useState<string>("");
  const [data2, setData2] = useState<string>("");
  const [data3, setData3] = useState<string>("");
  const [data4, setData4] = useState<string>("");


  useEffect(() => {
    axios
      .get("http://localhost:3002/quiz")
      .then((res) => {  
        setQuizs(res.data.quiz);
        console.log(res.data.quiz)
      })
  }, [])



  /* let length:number = quizs.length
  let random:number = Math.floor(Math.random() * length); */
  
  

  const onClick = () => {
    let question:string = quizs[1].question;
    let data1:string = quizs[1].data_1;
    let data2:string = quizs[1].data_2;
    let data3:string = quizs[1].data_3;
    let data4:string = quizs[1].data_4;
    console.log(data1)
    setQuestion(question)
    setData1(data1)
    setData2(data2)
    setData3(data3)
    setData4(data4)
  }
  
  return (
    <div>
      <Header />
      <div className="centerSort">
        <div className="boxSort">
          <div className="box1">
            남은시간
          </div>
          <div className="box2">
            현재 문제 / 총 문제
          </div>
          <div className="box3">
            현재 점수
          </div>
        </div>
        
        <div className="sort" >
          <div id='Q_question'>{question}</div>
          <div id='Q_answer'>{data1}</div>
          <div id='Q_answer'>{data2}</div>
          <div id='Q_answer'>{data3}</div>
          <div id='Q_answer'>{data4}</div>
        </div>
        <button onClick={onClick}>클릭</button>
      </div>
    </div>
  );
}

export default QuizPage;
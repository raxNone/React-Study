import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  

  //state는 변수 대신 쓰는 데이터 저장공간
  //state는 변경되면 HTML이 자동으로 재랜더링됨
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 가디건 추천', '20대 신발 추천']);
  //['남자코트추천', state 수정함수]
  //[a,b] = [1,2] -> ES6 destructuring 문법
  let [날짜, 날짜변경] = useState(['2월 17일 발행', '3월 1일 발행', '4월 9일 발행'])
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'green'}}>React 학습 App</div>
      </div>
      <button onClick={()=>{
        var texts=[...글제목];
        texts.sort();
        글제목변경(texts);
      }}>버튼</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>G {따봉}</span> </h3>
        <p>{날짜[0]}</p>
        <hr/>
        <h3>{글제목[1]} <span onClick={()=>{ 
          var newArray=[...글제목];//deep copy ...은 중괄호 제거된 채로 복사
          newArray[1]='남자 가디건 추천';글제목변경(newArray)}}>s</span></h3>
        <p>{날짜[1]}</p>
        <hr/>
        <h3>{글제목[2]}</h3>
        <p>{날짜[2]}</p>
        <hr/>
      </div>
      
    </div>
  );    
}

export default App;

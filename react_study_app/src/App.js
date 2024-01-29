import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let styles = {
    color: 'blue', background: 'red',
  }
  function 함수(){
    return 'hi'
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={styles}>React 학습 App</div>
      </div>
      <h4>{posts}</h4>
      {함수()}
      <img src = {logo}></img>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [topics,topicChange] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'},
  ]) 
  const [mode,setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  let content=null;

  if (mode==='WELCOME'){
    content= <Article title='Welcome' body='Hello, WEB'/>
  }else if (mode=='READ'){
    topics.forEach(topic=>{
      if (topic.id === id){
    content= <Article title={topic.title} body={topic.body}/>}})
  }

  return( 
    <div>
      <header>
        <h2 onClick={()=>{setMode('WELCOME')}}>TOPIC</h2>
      </header>
      <List topics={topics} onChangeMode={id=>{console.log(id); setId(id); setMode('READ')}}/>

      {content}

    </div>
  );
  
      
}
function Article(props){
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  )
}

function List(props){
  
  let lis=[];

  props.topics.forEach(topic => {
    lis.push(<li key={topic.id}><a id={topic.id} href={'/read/'+topic.id}
      onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));//event.target은 이벤트를 호출한 객체자체
      }}
    >{topic.title}</a></li>)    
  });

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  );
}

export default App;

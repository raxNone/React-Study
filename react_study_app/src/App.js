import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'},
  ]) 
  const [mode,setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  let content=null;

  if (mode==='WELCOME'){
    content= <Article title='Welcome' body='Hello, WEB'/>
  }else if (mode=='READ'){
    topics.forEach(topic=>{
      if (topic.id === id){
    content= <Article title={topic.title} body={topic.body}/>}})
  }else if (mode=='CREATE'){
    content= <Create onCreate={(_title,_body)=>{
      let cpTopics = [...topics];
      cpTopics.push({id:nextId, title:_title, body:_body})
      setTopics(cpTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}/>
  }

  return( 
    <div>
      <header>
        <h2 onClick={()=>{setMode('WELCOME')}}>TOPIC</h2>
      </header>
      <List topics={topics} onChangeMode={id=>{console.log(id); setId(id); setMode('READ')}}/>
      <a onClick={()=>{setMode('CREATE')}}>CREATE</a>
      {content}

    </div>
  );
  
      
}
function Article(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

function Create(props){
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title,body);
      }}>
        <p><input type="text" name='title' placeholder='title'/></p>
        <p><textarea name='body' placeholder='body'/></p>
        <p><input type='submit' value='Create'/></p>
      </form>
    </article>
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

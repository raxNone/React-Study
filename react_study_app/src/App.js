import React, {useState} from 'react';
//import logo from './logo.svg';
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
  let contextControl = null;

  if (mode==='WELCOME'){
    content= <Article title='Welcome' body='Hello, WEB'/>
  }else if (mode==='READ'){
    topics.forEach(topic=>{
      if (topic.id === id){
    content= <Article title={topic.title} body={topic.body}/>}})
    contextControl = <li><a href={"/update/"+id} onClick={(event)=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>UPDATE id:{id}</a></li>
  }else if (mode==='CREATE'){
    content= <Create onCreate={(_title,_body)=>{
      let cpTopics = [...topics];
      cpTopics.push({id:nextId, title:_title, body:_body})
      setTopics(cpTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}/>
  }else if (mode === 'UPDATE'){
    topics.forEach(topic=>{
      if (topic.id === id){
        content = <Update title={topic.title} body={topic.body} 
        onUpdate={(title,body)=>{
          let newTopics = [...topics]
          const updatedTopic = {id:id, title:title, body:body};
          for (let i =0; i<newTopics.length; i++){
            if (newTopics[i].id === id){
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode('READ');
        }}/>    
      }
    })
    
  }

  return( 
    <div>
      <header>
        <h2 onClick={()=>{setMode('WELCOME')}}>TOPIC</h2>
      </header>
      <List topics={topics} onChangeMode={id=>{console.log(id); setId(id); setMode('READ')}}/>
      
      {content}

      <ul>
        <li><a href="/create/" onClick={(event)=>{
          event.preventDefault();
          setMode('CREATE');
        }}>CREATE</a></li>
        {contextControl}
        <li><input type='button' value="DELETE" onClick={()=>{
          const newTopics = [];
          for (let i =0; i<topics.length; i++){
            if (topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('WELCOME');
        }}></input></li>


      </ul>

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

function Update(props){
  return (<article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title,body);
      }}>
        <p><input type="text" name='title' placeholder={props.title}/></p>
        <p><textarea name='body' placeholder={props.body}/></p>
        <p><input type='submit' value='Update'/></p>
      </form>
    </article>)

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
      <ol>
        {lis}
      </ol>
    </div>
  );
}

export default App;

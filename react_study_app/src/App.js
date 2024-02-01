import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [topics,topicChange] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'js', body:'js is...'},
  ]) 

  return( 
    <div>
      <header>
        <h2>TOPICS</h2>
      </header>
      <List topics={topics}/>
    </div>
  );
  
      
}
function List(props){
  
  let lis=[];

  props.topics.forEach(topic => {
    lis.push(<li key={topic.id}><a href={'/read/'+topic.id}>{topic.title}</a></li>)    
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

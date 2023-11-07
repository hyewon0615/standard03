
import { useState } from 'react';
import './App.css';
// 헷갈렸던 점.. 
// input에 value={} onchange={}가 조금 헷갈렸고 
// 전개구문 후에 {}[]중 어느걸로 해야할지.. 실행전에 못 깨달음.. 오류 나면 바꿔봄..
// onclick 을 넣을 때 인자로 받는 것이 조금 헷갈림..=>작성중 이해
function App() {
  const [todo, setTodo] = useState([
    { id: 0, title: '첫번째 할일', content: '밥먹기', isDone: false },
    { id: 1, title: '두번째 할일', content: '잠자기', isDone: false },
    { id: 2, title: '세번째 할일', content: '똥싸기', isDone: false }])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const listAddHandler= function(){
    const newTodo= 
    {
      id: todo.length +1 , 
      title: title, 
      content:content, 
      isDone: false 
    }
    setTodo([...todo, newTodo])
  }
  const removeBtn = function(id){
    const remove = todo.filter((item)=>{
      return item.id !== id
    })
    setTodo(remove)
  }
  const changeBtn = function(id){
    const isDoneChange = todo.map((item)=>{
      if(item.id === id){
        return {...item, isDone : !item.isDone}
      }else{
        return item
      }
    })
    setTodo(isDoneChange)
  }

  return (
    <div>
      <header><h1>todoList</h1></header>
      <div>
        제목 : <input value={title} 
        onChange={(event)=>{setTitle(event.target.value)}}/>
        내용 : <input value={content} 
        onChange={(event)=>{setContent(event.target.value)}}
        />
        <button onClick={listAddHandler}>추가</button>
        
      </div>
      <h3>working</h3>
      <div>
        {todo
        .filter((item)=>{return item.isDone === false})
        .map((item) => {
          return(<div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button onClick={()=>removeBtn(item.id)}>삭제</button>
            <button onClick={()=>changeBtn(item.id)}>완료</button>
          </div>)
        })}
      </div>
      <h3>Done</h3>
      <div>
        {todo
        .filter((item)=>{return item.isDone === true})
        .map((item) => {
          return(<div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button onClick={()=>removeBtn(item.id)}>삭제</button>
            <button onClick={()=>changeBtn(item.id)}>취소</button>
          </div>)
        })}
      </div>



    </div>

  );
}

export default App;

import { useMemo } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  const fact=(n)=>{
    if(n<=1){
      return 1
    }
    return n*fact(n-1)
  }
  const memoiesed=useMemo(()=>{
    return fact(20)
  },[])
  const val=()=>{
    console.time("T");
    console.log(memoiesed);
    console.timeEnd("T");
  }
  

  return (
    
    <div className="App">
      <TodoInput/>
      {/* <button onClick={val}>calculate</button> */}
    </div>
  );
}

export default App;

import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [heros, setHeros]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setHeros(data);
    })
  },[])

  return (
    <div className="App">
<MovieCounter></MovieCounter>

{
  heros.map(data=><Nayok heros={data}></Nayok>)
}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle={
    border:"4px solid gray",
    margin:"10px"

  }
 let {name,id}=props.heros
  return(
    <div style={nayokStyle}>
      <h1>This is {name}</h1>
      <h2>I am a hero</h2>
      <p>I have dune {id} movies</p>
    </div>
  )
}

function MovieCounter(){
  const [count, setCount] = useState(0)
  const handelclick = ()=>setCount(count+1)
  return (
    <div>
      <button onClick={handelclick}>ADD MOVIES</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h3>movie i have acked: {props.movies}</h3>
}

export default App;

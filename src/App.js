import React,{useEffect} from "react";
import "./App.css";

const App = ()=> {
  useEffect(()=>{
    console.log('effect')
  }, [])
  return (
    <div>
    App Run
   </div>
  )
}

export default App;

import { useState, useEffect } from "react";

const User = (props) => {

  const [count, setCount] = useState(0)
  const [count2] = useState(1)

  useEffect(() => {
    //API call
    // const timer = setInterval(() => {
    //   console.log("Interval from User component (via function)")
    // }, 1000);

    // return  () => {
    //   clearInterval(timer);
    //   console.log("useEffect Return")
    // };//this is called while unmounting

  },[]);

  return <div className="user-card">
    <h1>Count = {count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }}>Count Increase</button>
    {/* <h1>Count2 = {count2}</h1> */}
    <h2>Name : {props.name}</h2>
    <h3>Location : Canada</h3>
    <h4>Contact : archanavnair@gmail.com</h4>
  </div>
}

export default User;
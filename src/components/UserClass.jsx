import React from "react"

class UserClass extends React.Component {

    constructor(props){
      super(props);
      // console.log("Child constructor");

      // this.state = {
      //   count:0,
      //   count2 : 1
      // }

      this.state = {
        userInfo:{
          name: "Dummy",
          location: "Default",
          avatar_url:"dummy"
        }
      }
    }

    async componentDidMount() {
      // console.log("Child Did Mount")
      //API calls here like in useEffect()
      const data = await fetch("https://api.github.com/users/archanavnair");
      const json = await data.json();

      this.setState({
        userInfo: json
      });
      console.log(json);
      // this.timer = setInterval(() => {// 'this' iis shared with all methods of this class
      //   console.log("FROM USECLASS")
      // }, 1000);/// this will be called even after going out of the component aand thats the reason we call  componentWillUnmount()
    }

    
    componentDidUpdate(){
      console.log("componentDidUpdate")
    }

    componentWillUnmount(){
      // clearInterval(this.timer);//i can clear it here because its this.timer
      console.log("componentWillUnmount")
    }

  render() {

    // const { count, count2 } = this.state;
    // const { name,location } = this.props;
    // console.log("Child render");

    //destructuring stat variables
    const {name , location, avatar_url} = this.state.userInfo;

    return <div className="user-card">
      {/* <h1>Count = {count}</h1>
      <button onClick={() =>{
        //Never update state variables directly as this.state..count = 2️⃣
        this.setState({
          count:this.state.count + 1
        })
      }}>Count Increase</button> */}
      {/* <h2>Name : {this.props.name}</h2> {/*one way */}
      {/* <h3>Location : {location}</h3> another way */} 
      <img src={avatar_url}  />
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : archanavnair@gmail.com</h4>
  </div>
  }
}

export default UserClass

/*
----MOUNTING LIFE CYCLE ----------
- Constructor(dummy data)
- Render( with dummy data)
 <HTML dummy >

 - Component Did mount
  <API Call>
  <this.setState>


-----------UPDATING LIFE CYCLE_________
- Render( each setState triggers render and render with API data)
  <HTML API data>

-componentDidUpdate



*/
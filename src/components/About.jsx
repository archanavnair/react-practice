import User from "./User";
import UserClasss from "./UserClass";
import {Component} from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About page</h2>
//       <User name = {"Archana( via function)"}/>

//       <UserClasss name = {"Archana (via class)"} location = { "Canada" }/>
//     </div>
//   ) 
// }

class About extends Component {
  constructor(props){
    super(props);

    //console.log("Parent Constructor")

  }

  componentDidMount() {
    //console.log("Parent Did Mount");
  }

  render(){
    console.log("Parent render")
    return <div>
    <h1>About</h1>
    <h2>This is About page</h2>
    {/* <User name = {"Archana( via function)"}/> */}
    <UserClasss name = {"Archana (via class)"} location = { "Canada" }/>
  </div>
  }
}


{
  /** Order of calls
   - Parent Cnstructor ///Render phase of parent
   - parent Render

     - child1 Constructor ///Render phase of Child1
     - Child1 render

     - Child 2 Constructor ///Render phase of Child2
     - Child2 Render

    # DOM Manipulation begins - in Single Batch
     - Child1 Did Mount ///Commit Phase of children
     - Child1 Did Mount

  - parent Mount // Commit Phase of Parents
   */
}
export default About;
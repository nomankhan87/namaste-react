import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";


// class About extends Component {
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page Class Coponent</h1>
        <UserContext.Consumer>
          {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        <User name = {"noman"} />
        <UserClass name = {"noman"} />
        <UserClass name = {"noman2"} />
      </div>
    );
  }
}


export default About;


/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
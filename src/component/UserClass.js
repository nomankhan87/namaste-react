import React from "react";
import "../../index.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count :0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor" + this.props.name);
  }
  componentDidMount() {
    console.log("Child - componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP ");
    // }, 1000);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count !== prevState.count) {
  //     //
  //   }
  //   if (this.state.count2 !== prevState.count2) {
  //     // code
  //   }
  //   console.log("Component Did Update");
  // }
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   //console.log("ComponentWillUnmount");
  // }
  render() {
    const { count } = this.state;
    console.log("Child - render" + this.props.name);
    return (
      <div className="componentBg">
        <h1> User {this.props.name} Class Component </h1>

        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            //NEVER Update state variable directly
            this.setState({
              count: this.state.count + 1
            })
          }}
        >
          Count
        </button>

      </div>
    );
  }
}
/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
export default UserClass;
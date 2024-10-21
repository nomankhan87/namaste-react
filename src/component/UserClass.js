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
  async componentDidMount() {
    console.log("Child - componentDidMount");
    
    const data = await fetch ("https://api.github.com/users/akshaymarch7")
    const json = await data.json();

    this.setState({
      userInfo : json
    })

    console.log(json);

    this.timer = setInterval(() => {
      console.log("NAMASTE REACT Class OP ");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }
  render() {
    const { count } = this.state;
    const { name } = this.state.userInfo; //through multiple way, from desstructure and direct from state in location

    console.log("Child - render" + this.props.name);
    return (
      <div className="componentBg">
        <h1> User {this.props.name} Class Component </h1>

        <img src={this.state.userInfo.avatar_url} style={ {"max-width": "200px"}} />
        <h2>Name: {name}</h2>
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
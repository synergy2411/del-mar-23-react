import React, { Component } from "react";
import axios from "axios";

class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      toggle: false,
      posts: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ posts: response.data }))
      .catch(console.error);
  }
  //   shouldComponentUpdate() {
  //     const rnd = Math.round(Math.random() * 10);
  //     console.log("shouldComponentUpdate", rnd);
  //     return rnd > 5 ? true : false;
  //   }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  toggleChangeHandler = () => this.setState({ toggle: !this.state.toggle });

  render() {
    console.log("render");

    return (
      <div>
        <h4>Life cycle Demo</h4>
        <button className="btn btn-primary" onClick={this.toggleChangeHandler}>
          Toggle
        </button>
        {this.state.toggle && <p>Toggled</p>}
        <ul>
          {this.state.posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LifeCycle;

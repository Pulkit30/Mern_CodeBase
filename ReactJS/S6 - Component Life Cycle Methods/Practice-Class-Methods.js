import React from "react";

// Child Component
class Child extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 }; // local state in child
    console.log("India (constructor)");
  }

  componentDidMount() {
    console.log("Fine (componentDidMount)");
  }

  // Called before re-render when props/state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log("---- shouldComponentUpdate ----");
    console.log("Current props:", this.props.value);
    console.log("Next props:", nextProps.value);
    console.log("Current state:", this.state.clicks);
    console.log("Next state:", nextState.clicks);

    // Only re-render if value changes by more than 1 OR clicks change
    if (
      Math.abs(nextProps.value - this.props.value) > 1 ||
      nextState.clicks !== this.state.clicks
    ) {
      console.log("✅ Allowing re-render");
      return true;
    }
    console.log("❌ Skipping re-render");
    return false;
  }

  // Runs after re-render
  componentDidUpdate(prevProps, prevState) {
    console.log("---- componentDidUpdate ----");
    console.log(`Previous Prop ${prevProps.value}, Current Prop ${this.props.value}`)
    // Detect prop change from parent
    if (prevProps.value !== this.props.value) {
      console.log(
        `Parent's value changed from ${prevProps.value} to ${this.props.value}`
      );
    }
     console.log(`Previous State ${prevState.clicks},Current State ${this.state.clicks}`)
    // Detect local state change in child
    if (prevState.clicks !== this.state.clicks) {
      console.log(
        `Child's clicks changed from ${prevState.clicks} to ${this.state.clicks}`
      );
    }
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    console.log("---- render ----");
    return (
      <div>
        <h2>Child value from parent: {this.props.value}</h2>
        <p onClick={()=>console.log('normal fn')}>Child's own clicks: {this.state.clicks}</p>
        <button onClick={this.handleClick}>Click Child</button>
      </div>
    );
  }
}

// Parent Component
class App extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  incrementByTwo = () => {
    this.setState({ count: this.state.count + 2 });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>React Props & State Update Demo</h1>
        <Child value={this.state.count} />
        <button onClick={this.increment}>Increment by 1</button>
        <button onClick={this.incrementByTwo} style={{ marginLeft: "10px" }}>
          Increment by 2
        </button>
      </div>
    );
  }
}

export default App;

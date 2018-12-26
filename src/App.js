import React, { Component, PureComponent } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>
        <Title text={'I am Title'}/>
        <Title text={'I am the same Title'}/>
        <Counter count={this.state.count} />
        <AddButton onClick={this.add} text="Add"/>
      </>
    );
  }
}

class Counter extends Component {
  render() {
    return <div>{this.props.count}</div>
  }
}

class Title extends PureComponent {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

class AddButton extends PureComponent {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>
  }
}

export default App;

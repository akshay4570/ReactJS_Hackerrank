import './App.css';
import React, { Component } from 'react';
import Block from './components/Block';
import axios from 'axios';

class App extends Component {
  state = {
    elements: [],
    currentpage: 2
  }

  constructor(props) {
    super(props);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        elements : [...this.state.elements,res.data.slice(1,10)],
      })
    })
  }

  next = () => {
    console.log('okefok');
    if (this.state.currentpage < this.state.elements[0].length){
      console.log("Moving to Next Page");
      this.setState({
        currentpage: this.state.currentpage + 1
      });
    }
    else{
      this.setState({
        currentpage: this.state.currentpage
      });
    }
  }

  prev = () => {
    if (this.state.currentpage >  2){
      console.log("Moving to Previous Page");
      this.setState({
        currentpage: this.state.currentpage - 1
      });
    }
    else{
      this.setState({
        currentpage: this.state.currentpage
      });
    }
  }

  reset = () => {
    console.log("Reseting the page");
    this.setState({
      currentpage : 2
    });
  }

  render() {
    if(this.state.elements.length > 0){
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="heading">HackerRank Solution...</h1>
            <Block ListOfObjects={this.state} next={this.next} 
            prev = {this.prev} reset = {this.reset}/>
          </header>
        </div>
      );
    }
    else{
      return (
        <div className="container">
          <p></p>
        </div>
      );
    }
  }
}

export default App;

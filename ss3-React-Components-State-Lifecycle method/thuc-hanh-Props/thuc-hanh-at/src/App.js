import React, { Component } from 'react';
import Home  from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }
  handleLogIn = () =>{
    this.setState({
      login: true
    })
  }
  handleLogOut = () =>{
    this.setState({
      login: false
    })
  }
  

  
  render () {
    const { login } = this.state
    if (login) return (<Home onLogOut={this.handleLogOut} />)
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1 className=''>Please Log in</h1>
            <button onClick={this.handleLogIn}>Log in</button>
        </div>
      </div>
    )
  }
}

export default App;
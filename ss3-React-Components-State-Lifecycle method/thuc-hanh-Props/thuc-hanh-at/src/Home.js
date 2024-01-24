import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
        <div>
            <h1 >Welcome</h1>
            <button className="btn btn-dark" onClick={this.props.onLogOut}>Log out</button>
        </div>
      </div>
        )
    }
}
export default Home
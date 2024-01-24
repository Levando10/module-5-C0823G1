import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import renText from './test.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Car(props) {
//   return <div>
//       <h1>carrrrrr</h1>
    
//        <h1>{props.article.headerProp}</h1>
//       <h2>{props.article.contentProp}</h2>
   

  
//   </div> 
  
// }

// const article = {
//   headerProp: "Header from props...",
//   contentProp: "Content from props..."
// };

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: " blue "});
//     this.setState({model: " bwc "})
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand} </h1>
//         <p>
//           It is a {this.state.color} 
//           {this.state.model}
//           from  {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }
// root.render(<Car />)

// function ActionLink(){
//   function handleEvent(e){
//     e.preventDefault();
//     alert("Không nhảy qua link được")
//     console.log('You had clicked a Link.');  
//   }

//   return (  
//     <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleEvent}>
//           Click_Me  
//     </a>  
// ); 
// }
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   // handleClick() {
//   //   this.setState(prevState => ({
//   //     isToggleOn: !prevState.isToggleOn
//   //   }));
//   // }

//   handleClick(){
//     this.setState(temp =>({
//       isToggleOn: !temp.isToggleOn
//     }) )
//   }

//   render() {
//     return (
//       <button className='btn btn-dark' onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 0
//     };
//     this.setNewNumber = this.setNewNumber.bind(this);
//   }
//   setNewNumber() {
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.setNewNumber}>INCREMENT</button>
//         <Content myNumber={this.state.data}></Content>
//       </div>
//     );
//   }
// }
// class Content extends React.Component {
//   UNSAFE_componentWillMount() {
//     console.log("Component WILL MOUNT!");
//   }
//   componentDidMount() {
//     console.log("Component DID MOUNT!");
//   }
//   UNSAFE_componentWillReceiveProps(newProps) {
//     console.log("Component WILL RECIEVE PROPS!");
//   }
//   shouldComponentUpdate(newProps, newState) {
//     return true;
//   }
//   UNSAFE_componentWillUpdate(nextProps, nextState) {
//     console.log("Component WILL UPDATE!");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component DID UPDATE!");
//   }
//   componentWillUnmount() {
//     console.log("Component WILL UNMOUNT!");
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.props.myNumber}</h3>
//       </div>
//     );
//   }
// }

// root.render(<App />)
// setTimeout(() => {
//   root.unmount();
// }, 10000);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", inputText: "", mode: "view" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleSave() {
    this.setState({ text: this.state.inputText, mode: "view" });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  //Để render ra các phương thức, ta kiểm tra các thuộc tính mode
  render() {
    if (this.state.mode === "view") {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <input onChange={this.handleChange} value={this.state.inputText} />
          <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }
  }
}

root.render(<App />)


reportWebVitals();

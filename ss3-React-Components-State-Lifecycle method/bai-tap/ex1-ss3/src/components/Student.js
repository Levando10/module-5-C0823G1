  import { Component } from "react";
  import 'bootstrap/dist/css/bootstrap.css';
import Add from "./Add";

class Students extends Component{
   constructor(){
    super();
    this.state = {
        id: "",
        name: "",
        age: "",
        adress: "",
        studentList : [ {id: 1,name:"Nguyễn văn A",age:30,adress:"Hà Nội"},
        {id: 2,name:"Nguyễn văn B",age:18,adress:"Hà Nội"},
        {id: 3,name:"Nguyễn văn V",age:20,adress:"Huế"},
        {id: 4,name:"Nguyễn văn D",age:25,adress:"Đà Nẵng"},
        {id: 5,name:"Nguyễn văn F",age:21,adress:"Sài Gòn"}]
    }
   }
  
   handleId(value){
    console.log(value);
   this.setState({
    id: value
   })
   }
   handleName(value){
    console.log(value);
   this.setState({
    name: value
   })
   }
   handleAge(value){
    console.log(value);
   this.setState({
    age: value
   })
   }
   handleAdress(value){
    console.log(value);
   this.setState({
    adress: value
   })
   }

   addStudent(){
    this.setState((prev) => ({
        studentList: [{id:prev.id,name:prev.name,age:prev.age,adress:prev.adress },...prev.studentList],
        id:'',name:'',age:'',adress:''
    }))

   }


    render(){
        return(
            <div>
                <h1 className="text-center mb-3">List Student</h1>
                <div>
                Id:  <input value={this.state.id}   onChange={(event) => this.handleId(event.target.value)}/> <br/>
                Name: <input value={this.state.name} onChange={(event) => this.handleName(event.target.value)} /> <br/>
                Age: <input value={this.state.age} onChange={(event) => this.handleAge(event.target.value)} /><br/>
                Address: <input value={this.state.adress} onChange={(event) => this.handleAdress(event.target.value)}/><br/><br/>
                </div>

                <button className="btn btn-dark" onClick={() => this.addStudent()}>Thêm mới</button>
                <table className="table container">
                    <thead>
                    <tr>
                        <th>Id</th> 
                        <th>Name</th>
                         <th>Age</th> 
                         <th>Adress</th>
                    </tr>
                    </thead>
                    <tbody>
                  {this.state.studentList.map( (item,index) => (
                      <tr key={index}>
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.adress}</td>
                      </tr>
                  ) )}
                   </tbody>

                </table>

            </div>
        )
    }

}
export default Students;
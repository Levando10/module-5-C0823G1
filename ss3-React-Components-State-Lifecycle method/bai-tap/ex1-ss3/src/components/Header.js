import {Component} from "react";
class Header extends Component {
    render(){
        return(
            <div>
                <h1>Đây là H1 {this.props.id || 'chua hello thanh cong'}</h1>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}
export default Header
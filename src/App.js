import React , { Component , setState } from 'react'
export default class App extends Component {

    constructor(){
        super()
        this.state = {
            isvalid : true
        }
    }
    clickme = () => {
        this.setState({isvalid : !this.state.isvalid}) 
    }
    render(){

        return(
            <div>
                isvalid{this.state.isvalid ? 'yes' : "no"}
                {this.state.isvalid && <Home />}
                <button onClick={this.clickme}>submit</button>
            </div>
        )
    }
}

class Home extends Component{

    componentWillUnmount(){
        alert("are you sure exit this page ?")
    }
    render(){
        return(
            <div>Home</div>
        )
    }
}
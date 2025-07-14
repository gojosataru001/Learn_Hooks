import React from 'react'
class UseStateClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
    }

Increment = () =>{
        this.setState({
           counter: this.state.counter + 1, 
        })
    }
Decrement =() =>{
   if (this.state.counter>0) { this.setState({
        
        counter: this.state.counter - 1
        
    })}
}
    render(){
        return(
            <div>
                    <h1>{this.state.counter}</h1>
                    <button onClick={this.Increment}>Increment</button>
                    <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }

}

export default UseStateClass;
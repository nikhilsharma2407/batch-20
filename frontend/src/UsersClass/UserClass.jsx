import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(){
        // initialization
        console.log("initialisation");
        super();

        this.state = {
            name:"Nikhil",
            email:"nikhil@gmail.com",
            id:1,
            userData:null

        };
    }

    changeName = (e)=>{
        console.log("button clicked");
        this.setState({name:"Test"});
        console.log(this.props.name);
    };

    updateInput=(e)=>{
        this.setState({name:e.target.value});
        console.log(e.target.value);
    }

    componentWillMount(){
        console.log("componentWillMount")
    };
    render() {
        console.log("render");
        // props are read-only 
        // cannot modify props
        const {id} = this.props;
        const {name} = this.state;
        return (
            <>
                <input  onChange={this.updateInput} placeholder='enter your name' type="text" />
                <input  onChange={(e)=>this.setState({id:e.target.value})} placeholder='enter your id' type="number" min="1" max = "10" />
                <button onClick={this.changeName}>Click me</button>
                <h1>Hi {name}-{id}</h1>
            </>
        )
    }
    componentDidMount(){
        console.log("Component did mount");
        document.title = "User Class"
    };

    shouldComponentUpdate(){console.log("shouldComponentUpdate"); return true};
    componentWillUpdate(){console.log("componentWillUpdate")};
    async componentDidUpdate(){
        console.log("componentDidUpdate");
        const {id} = this.state
        const url = "https://jsonplaceholder.typicode.com/users/"+id;

        const userData = await (await fetch(url)).json();
        console.log(userData);

};

componentWillUnmount(){
    console.log("unmounting phase");
    // houseKeeping stuff
    // unsubscribe to event listeners
    // save some data 
}
    
}   


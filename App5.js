import axios from "axios";
import React from "react";

class App5 extends React.Component{

    state={
        isLoading:true,
    }

    getMembers=()=>{
        axios.post('url');
    }
    
    componentDidMount
    
    render(){
        return(
            <div>
                {this.state.isLoading? 'a':'b'}
            </div>
        )
    }


}
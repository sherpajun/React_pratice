import React from "react";

class App2 extends React.Component{
    constructor(props){
        super(props);
        console.log("생성자 호출");
    }   

componentDidMount(){
    console.log('componet rendered');
}

componentDidUpdate(){
    console.log('componet Updated');
}

    state={
        name:'choi',
        age:28,
        count:0};
    
//add=()=>{}; 밑에랑 같다.
//add=function(){
    //console.log(this.a.count);
//};
add=()=>{
    this.setState((current)=>({count:current.count +1,name:'어쩌다'} ));
    
};
//minus=()=>{}; 밑에랑 같다.
//minus=function(){
    //console.log('minus');
    
//};

minus=()=>{
    this.setState((current)=>({count:current.count-1}));
    
    
};
//=>를 쓰는 이유는 자기가 정의된 코드 블락안의 바인딩된 소속객체를 읽어들인다.(this를 마음대로 쓸수있다.)






    render(){
        return(
            <div>
            <h1>I am a class: {this.state.name} </h1>
            <h1>I am a class: {this.state.age} </h1>
            <h1>I am a class: {this.state.count} </h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            </div>
        ); 
        
    }
}


export default App2;
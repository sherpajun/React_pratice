import axios from "axios";
import React from "react";
import Movie2 from "./Movie2";

class App4 extends React.Component{

    state={
        movies:[],
        isLoading: true,//""<--유무에 따라 boolean값 혹은 문자값
    }

    
    
    getMovie=async()=>{
        const resultData= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(resultData.data.data.movies);
        this.setState({isLoading:false,movies:resultData.data.data.movies})

    };
    
    componentDidMount(){
        this.getMovie();
        
        //setTimeout(callback,time);
        //setTimeout(()=>{
            //this.setState({isLoading:false});
        //},3000);
    }

    render(){
        return (
            
            <div>
                {this.state.isLoading? 'loading...' : (   
                    <table border="1">
                        <tbody>
                            {this.state.movies.map((item,index)=>{
                            return <Movie2  key={index} title={item.title} 
                            medium_cover_image={item.medium_cover_image} /> })}
                        </tbody>
                    </table>
                )  }
            </div>
        );
    }
}

export default App4;
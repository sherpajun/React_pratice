
import React from "react";
import axios from "axios";
import './Home.css';
import Movie from "../Componets/Movie";
import '../Componets/Movie.css';

class Home extends React.Component{
    state={
        stillLoading:true,
        movies:[],
    }



    gotMovie=async()=>{
        const ResultData= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(ResultData.data.data.movies);
        this.setState({movies:ResultData.data.data.movies,stillLoading:false});
    }


    componentDidMount(){
        this.gotMovie();

    }


    render(){
        return(
            <div className="container">

                 {this.state.stillLoading? 'Movie 목록을 Loading 중':(<div className="movies">{
                     this.state.movies.map((item,index)=>{return <Movie key={index} title={item.title} year={item.year} summary={item.summary} medium_cover_image={item.medium_cover_image} genres={item.genres} id={item.id} />})
                     }</div>)}
            </div>
        )
    }
}
export default Home;

import axios from "axios";
import React from "react";
import './Detail.css'

class Detail extends React.Component{
    
    state={
        rating:0,
        runtime:0,

    }
    
    
    gotMovieDetail=async(id)=>{
        const movieDetail=await axios.get('https://yts-proxy.now.sh/movie_details.json?movie_id='+id);
        this.setState({rating:movieDetail.data.data.movie.rating, runtime:movieDetail.data.data.movie.runtime});
        
    };
    
    
    componentDidMount(){
        const {location,history}=this.props;
        if(location.state===undefined){
            history.push('/');
        }else{
            this.gotMovieDetail(location.state.id);
        }


        
    }
    
    
    render(){
        console.log(this.props);
        const {location} =this.props;
        if(location.state){
            return(
                <div className="detail__container">
                    <img src={location.state.medium_cover_image} alt={location.state.title} title={location.state.title}/>
                    <h2 className="movie__tit_detail"><span > { location.state.title } </span> </h2>
                    <h3 className="movie__rating_detail"> rating : {this.state.rating}/10.0</h3>
                    <h3 className="movie__runtime_detail"> runtime : {this.state.runtime}min</h3>
                    <br></br>
                    <h3 className="movie__year_detail">Year : {location.state.year}</h3>
                    <ul className="movie__gen_detail">Genres : &nbsp; {location.state.genres.map((item,index) => { return <li key={index} 
                    className="movie__gen_detail">{item}</li>})}</ul>
                    <p className="movie__sum_detail">{location.state.summary}</p>
                    
                </div>
            );
        }else{
            return null;
        }
        
    }
}

export default Detail;

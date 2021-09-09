import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import About from './Routes/About';
import Home from "./Routes/Home";
import Navigation from "./Componets/Navigation";
import Detail from "./Routes/Detail";

class RouterApp extends React.Component{
    render(){

        return(
            <HashRouter>
                <Navigation/>
                <Route path="/" exact={true}  component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie-detail" component={Detail} />
            </HashRouter>
        )
    }
}
export default RouterApp;
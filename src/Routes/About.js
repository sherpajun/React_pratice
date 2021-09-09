import React from "react";
import './About.css';
function About(props){
    console.log(props)
    return (
    <div className="about__container">
    <span>다시 만들어도 어렵네 무슨 신택스 에러 보다 import 에러가 더 많아</span>
    <span> - 나는 어디 여긴 누구?</span>
    </div>);
}
export default About;
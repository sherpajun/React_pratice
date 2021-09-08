import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


function Food({name, picture, rating}){
  return (
  <div>
  <h2> I like {name} </h2>
  <h4> {rating}/5.0</h4>
  <img src={picture} alt={name} width="100"/>
  </div>
  );
}
const foodLike=[
  {
    id:1,
    name:'kimchi',
    image:'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating:5
  },
  {
    id:2,
    name:'sanjeok',
    image:'https://aeriskitchen.com/wp-content/uploads/2008/09/Beef_SanJeok--55x55.jpg',
    rating: 4.9
  },
  {
    id:3,
    name:'curry',
    image:'https://aeriskitchen.com/wp-content/uploads/2008/09/Curry_and_Rice_01--55x55.jpg',
    rating:2

  },
  {
    id:4,
    name:'black_bean_paste_noodles',
    image:'https://aeriskitchen.com/wp-content/uploads/2008/09/black_bean_paste_noodles_04-1-1.jpg://aeriskitchen.com/wp-content/uploads/2008/09/Curry_and_Rice_01--55x55.jpg',
    
  }
];//const는 상수
//let foodLike=[];//let은 변수

const renderFood=  dish=> <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>; 


function App() {
  console.log(foodLike.map(renderFood))
  return (
    <div>
      <h1>Favorites Foods</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.prototype={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number,
};


export default App;

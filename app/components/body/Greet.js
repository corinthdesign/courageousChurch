import React, { Component } from 'react';

class Greet extends React.Component {
  render() {
    return (
        <div>
        <h1>Hello, {profile.name}</h1>
        <h1>Is it {todaysWeather()} in {profile.city} this {timeOfDay()}?</h1>
        </div>
    );
  }
};

let profile = {
  name: "Tim",
  city: "Sioux Falls"
}

const weather = ['Sunny', 'Rainy', 'Cloudy', 'Partly Cloudy', 'Snowy', 'Muggy'];

function todaysWeather() {
  const randomWeather = Math.floor(Math.random() * weather.length);
  return weather[randomWeather];
};

const d = new Date();

function timeOfDay() {
   if (d.getHours() < 12) {
    return 'morning';
  }else if (d.getHours() >= 12 && d.getHours() < 16) {
    return 'afternoon';
  }else{
    return 'evening';
  }
}

export default Greet;

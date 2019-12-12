import React, { Component } from 'react';

export let foods = [
  {
    name: "cheeseburger",
    description: "juicy",
    image: "cheeseburger.jpg"
  },
  {
    name: "french fries",
    description: "salty",
    image: "fries.jpg"
  },
  {
    name: "hotbuns",
    description: "sticky",
    image: "hotbuns.jpg"
  }
];

export default function random(arrayName){
	let num = arrayName.length;
  return Math.floor(Math.random() * num);
};

export function image(path){ return "../images/" + path;};

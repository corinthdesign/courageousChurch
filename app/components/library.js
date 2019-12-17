import React, { Component } from 'react';
import Profile from './body/Profile.js';

export let profiles = {
  "Lead Pastor": {
    name: "Hannah Klopfenstein",
    title: "Lead Pastor",
    image: "hannah.jpg",
    bio: "Hannah loves going to new places! She also loves the Gospel of Jesus and caring for her children!"
  },
  "Development Pastor": {
    name: "Tim Klopfenstein",
    title: "Development Pastor",
    image: "tim.jpg",
    bio: "Tim loves Rock Climbing! He is deeply passionate about people knowing Jesus and loves his kids!"
  },
  "Care Pastor": {
    name: "TBD",
    title: "Care Pastor",
    image: "default.jpg",
    bio: "We are still looking for the best person to join our team in this position!"
  },
  "Worship Leader": {
    name: "TBD",
    title: "Worship Leader",
    image: "default.jpg",
    bio: "We are still looking for the best person to join our team in this position!"
  },
  "Pastoral Resident": {
    name: "TBD",
    title: "Pastoral Resident",
    image: "default.jpg",
    bio: "We are still looking for the best person to join our team in this position!"
  }
};
console.log({profiles});
console.log(Object.entries(profiles));





export default function random(arrayName){
	let num = arrayName.length;
  return Math.floor(Math.random() * num);
};

export function image(path){ return "../images/" + path;};

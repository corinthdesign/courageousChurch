import React, { Component } from 'react';
import Profile from './body/Profile.js';
export let prof = [
{
    name: "Hannah Klopfenstein",
    title: "Lead Pastor",
    image: "hannah.jpg",
    nameImage: "hannahType.png",
    bio: "Hannah loves going to new places! She also loves the Gospel of Jesus and caring for her children!"
  },
{
    name: "Tim Klopfenstein",
    title: "Development Pastor",
    image: "tim.jpg",
    nameImage: "timType.png",
    bio: "Tim loves Rock Climbing! He is deeply passionate about people knowing Jesus and loves his kids!"
  },
{
    name: "TBD",
    title: "Care Pastor",
    image: "default.jpg",
    nameImage: "TBDType.png",
    bio: "We are still looking for the best person to join our team in this position!"
  },
{
    name: "TBD",
    title: "Worship Leader",
    image: "default.jpg",
    nameImage: "TBDType.png",
    bio: "We are still looking for the best person to join our team in this position!"
  },
{
    name: "TBD",
    title: "Pastoral Resident",
    image: "default.jpg",
    nameImage: "TBDType.png",
    bio: "We are still looking for the best person to join our team in this position!"
  }
];

export let about = "Courageous Church is a new church plant forming in Seattle, WA. We are founded on the principles of bold love, bold truth, and bold life.";

export class Card {
  constructor(name, title, bio, image, nameImage) {
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.image = image;
    this.nameImage = nameImage;
  }
};

export const hannah = new Card(prof[0].name, prof[0].title, prof[0].bio, prof[0].image, prof[0].nameImage);
export const tim = new Card(prof[1].name, prof[1].title, prof[1].bio, prof[1].image, prof[1].nameImage);
export const careP = new Card(prof[2].name, prof[2].title, prof[2].bio, prof[2].image, prof[2].nameImage);
export const worshipP = new Card(prof[3].name, prof[3].title, prof[3].bio, prof[3].image, prof[3].nameImage);
export const pastorRes = new Card(prof[4].name, prof[4].title, prof[4].bio, prof[4].image, prof[4].nameImage);

export function makeProfile(profileName){
  return (<Profile src={image(profileName.nameImage)} name={profileName.name} image={image(profileName.image)} bio={profileName.bio} title={profileName.title} />);
};

export default function random(arrayName){
	let num = arrayName.length;
  return Math.floor(Math.random() * num);
};

export function image(path){ return "../images/" + path;};

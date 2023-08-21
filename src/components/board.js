import React from 'react';
import './board.css';
import List from './list'


const Info = [
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqh65J0nI0uJg3orMOb6-Ra8z4WGjlRtkUM8hWddT&s",
        name : "Shri Harsha HR", birthday : "1998-08-19"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Arpitha", birthday : "1998-08-23"
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8MoXSclsfspGyoCsD-ruxm285DuNeAq4Y8L2D-9d&s",
        name : "Shushrutha", birthday : "1998-09-07"
    },
    {
      img : "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
        name : "Abhishek", birthday : "1997-10-21"
    },
   
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Birthday Remainder</h1>

          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 2)} upcoming={true}></List>
          </div>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay === day) ;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter;

}
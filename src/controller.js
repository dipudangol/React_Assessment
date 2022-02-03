import { filter } from 'dom-helpers';
import React, { useState, useEffect } from 'react';


const Controller = ({ filterData, items, isChecked }) => {

  useEffect(() => {
    console.log("")
  }, []);




  if (isChecked) {
    return (
      <div>
        {
          items.map(item => ((isChecked && item.gender == filterData) ?
            <div className="card" key={item.cell}>
              <img className="image" src={item.picture.large} alt={item.name.first} />
              <p className="title">{item.name.title} {item.name.first} {item.name.last}</p>
              <p >Email: {item.email}</p>
            </div> :
            <br />
          )
          )}

      </div>

    );
  }
  else {
    return (
      <div>
        {
          items.map(item =>
            <div className="card" key={item.cell}>
              <img className="image" src={item.picture.large} alt={item.name.first} />
              <p className="title">{item.name.title} {item.name.first} {item.name.last}</p>
              <p >{item.email}</p>
            </div>
          )}

      </div>

    )
  }
};

export default Controller;

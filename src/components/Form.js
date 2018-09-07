import React, { Component } from "react";
//stateless componment   remove "this"  put "propos"
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="country" />
    <button className="btn btn-primary">Get Weather</button>
  </form>
);

export default Form;

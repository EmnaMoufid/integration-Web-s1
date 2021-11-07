import React from "react"
import Star from "./star";

export default class Stars extends React.Component {
    constructor(props){
        super(props);
    this.state={on:false} ;
  }


  
  render(){
      return(
          <div id="stars">
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
          </div>
           );

  }
}
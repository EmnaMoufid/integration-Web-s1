import React from "react"

export default class Star extends React.Component {
    constructor(props){
        super(props);
    this.state={on:false} ;
this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
      if (this.state.on){
          this.setState({on:false})

      }
      else {
      this.setState({on:true});
      }

  }
  render(){
      return(
          <img style={{width:"200px"}} src={this.state.on ? process.env.PUBLIC_URL+'/stars/star_on.png' :
        process.env.PUBLIC_URL+'/stars/star_off.png'}
     onClick={this.handleClick} 
     />
     );

  }
}
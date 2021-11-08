import React from "react"
export default class Act2 extends React.Component {
    constructor(props) {
        super(props)
        this.array = [{ id: 1, name: "fausse note" }, { id: 2, name: "l'enfant de soleil" }]
    }
    list=(n)=> {
        return(
            <>
            {this.array.map((film)=>{
                return(<li>{film.id+" : "+film.name+" :" }</li>);
            })}
            </>
        )
      
         
      }  
      render(){
          return(
            <>
            {this.array.map((film)=>{
                return(<li>{film.id+" : "+film.name }</li>);
            })}
            </>
          )
      }

    
        
                
}


import React from "react";
export default class Act3 extends React.Component {
    constructor(props) {
        super(props)
        this.array = [{ id: 1, name: "Mouhamed Tounsi",mail:"mohamedtouni@gmai.com", tel:555555  },
         { id: 2, name: "Emna Moufid",mail:"emna.moufida.99@gmail.com",tel:55060339 }]
    }
    list=(n)=> {
        return(
            <>
            <h1> Liste {n}</h1>
            {this.array.map((personne)=>{
                return(<li>{personne.id}<br></br>{personne.name } <br></br>{personne.mail} <br></br>{personne.tel} 
                </li>);
            })}
            </>
        )
      
         
      }  
      render(){
        return(
            <>
            <h1> Liste</h1>
            {this.array.map((personne)=>{
                return(<li>{personne.id}<br></br>{personne.name }<br></br> {personne.mail} <br></br> {personne.tel} 
                </li>);
            })}
            </>
        )
      }

    
        
                
}
import React from "react"; 
import styled from "styled-components"

const Borda = styled.div`
   
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    gap: 0.4rem; 
    border: 1px solid white; 
    padding-left: 0.4rem;
    margin: 0.4rem 0 0.4rem;
    background-color: blueviolet;
`
const P = styled.p`
border: 1px solid white; 
margin: 0.4rem 0 0.4rem;
text-align: center;
justify-content: center;
border-radius:5px;
background-color: white;
color: black;
`

class ItemCar extends React.Component{
    render(){
        
        return(
       <Borda>
       <P>{this.props.itemCar.quantidade}X</P>
       <P>{this.props.itemCar.name}</P>
       <button onClick={() => this.props.remove(this.props.itemCar.id)}>Remover</button>
       </Borda>
        
            
        )
    }
}

export default ItemCar
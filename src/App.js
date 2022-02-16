import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filter from './Components/Filter'


const ConteinerPrincipal = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
background-color: blueviolet;
color: white;
height: 100vh;
`

const Div = styled.div`
border: 1px solid white;
margin: 3px;
`

class App extends React.Component {

  render() {
    return (
      <ConteinerPrincipal>
     
     
    <Div><p>Olá filtro</p> 
    <Filter/>
    
    </Div>  

    <Div><p>Olá post</p> 
    {/* {Posts}   */}</Div>  

   <Div> <p>Olá carrinho</p>  
    {/* {Carrinho} */}</Div>
     
      </ConteinerPrincipal>
       );
     }

  }

export default App;

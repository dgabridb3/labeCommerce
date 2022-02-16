import React from 'react';
import styled from 'styled-components';
import './App.css';


const ConteinerPrincipal = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
background-color: blueviolet;
color: white;
padding-bottom: 20px
`

const Div = styled.div`
border: 1px solid white;
margin: 3px;
`

/* inicio estilização card */
const Div1 = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`
const CardSection = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    
`
const Card = styled.div `
border: 1px solid white;
width: 100%;
height: 100%;
`
const CardFilho = styled.div `

display: flex;
flex-direction: column;
margin: 0 5px
`
const IMG = styled.img `
width: 100%;
height: 200px
`
const H4 = styled.h4 `
margin: 10px 0;
`
const P = styled.p `
margin: 5px 0;
`
/* fim estilização card */
class App extends React.Component {
   state = {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  }
  render() {
    return (
      <ConteinerPrincipal>
     
     
    <Div><p>Olá filtro</p> 
    {/* {Filtro}  */}</Div>  

    <Div> 
    <Div1>
      <p>Quantidade de produtos: {}</p>
      <div> 
         <label>Ordenção:</label>
         <select>
             <option value="crescente">Crescente</option>
             <option value="decrescente">Decrescente</option>
         </select>
      </div>  
    </Div1>
      
    <CardSection>
      <Card>
         <IMG src={this.state.imageUrl} alt="" />
         <CardFilho>
             <H4>{this.state.name}</H4>
             <P>R${this.state.value}</P>
             <button>Adicionar ao Carrinho</button>
         </CardFilho>
      </Card>
    
      <Card>
      <IMG src={this.state.imageUrl} alt="" />
      <CardFilho>
             <H4>{this.state.name}</H4>
             <P>R${this.state.value}</P>
             <button>Adicionar ao Carrinho</button>
         </CardFilho>
      </Card>
      <Card>
      <IMG src={this.state.imageUrl} alt="" />
      <CardFilho>
             <H4>{this.state.name}</H4>
             <P>R${this.state.value}</P>
             <button>Adicionar ao Carrinho</button>
         </CardFilho>
      </Card>
      <Card>
      <IMG src={this.state.imageUrl} alt="" />
      <CardFilho>
             <H4>{this.state.name}</H4>
             <P>R${this.state.value}</P>
             <button>Adicionar ao Carrinho</button>
         </CardFilho>
      </Card>
      <Card>
      <IMG src={this.state.imageUrl} alt="" />
      <CardFilho>
             <H4>{this.state.name}</H4>
             <P>R${this.state.value}</P>
             <button>Adicionar ao Carrinho</button>
         </CardFilho>
      </Card>
    </CardSection>
     
    </Div>  

   <Div> <p>Olá carrinho</p>  
    {/* {Carrinho} */}</Div>
     
      </ConteinerPrincipal>
       );
     }

  }

export default App;

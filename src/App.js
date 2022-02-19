import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filter from './Components/Filter'



const ConteinerPrincipal = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
background-color: blueviolet;
color: white;
padding-bottom: 8vh;
padding-top: 8vh;
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
/* height: 30%; */
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
margin: 0 5px;
`
const IMG = styled.img `
width: 100%;
height: 200px;
`
const H4 = styled.h4 `
margin: 10px 0;
`
const P = styled.p `
margin: 5px 0;
`
/* fim estilização card */

const produtos = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/280",
  },
  {
    id: 2,
    name: "Avião da Missão Apollo 11",
    value: 500.0,
    imageUrl: "https://picsum.photos/200/250",
  },
  {
    id: 3,
    name: "Foguete da Missão Apollo 11",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/201",
  },
  {
    id: 4,
    name: "Foguete da Missão Apollo 11",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/220",
  },

];

 

class App extends React.Component {
   state = {
     products: produtos,
     valorMin:"",
     valorMax:"",
     PesquisaNome:"",
     ordem: "crescente"
  }

  inputMin = (ev) =>{
    this.setState({
        valorMin: ev.target.value
    })
}

inputMax = (ev) =>{
    this.setState({
        valorMax: ev.target.value
    })
}

inputPesquisaNome = (ev) =>{
    this.setState({
        PesquisaNome: ev.target.value
    })
}

order= (ev) =>{
    this.setState({
        ordem: ev.target.value
    })
}

  render() {
    return (
      <ConteinerPrincipal>
    <Div><p>Olá filtro</p> 
    {this.state.valorMax}
    <Filter
    valorMin={this.state.valorMin}
    valorMax={this.state.valorMax}
    PesquisaNome={this.state.PesquisaNome}
    inputMin={this.inputMin}
    inputMax={this.inputMax}
    inputPesquisaNome={this.inputPesquisaNome}
    />
 
    </Div>  

    <Div> 
    <Div1>
      <p>Quantidade de produtos: {}</p>
         <div> 
           <label>Ordenção:</label>
              <select>
                <option value="crescente"
                     onChange={this.order}>Crescente</option>
                <option value="decrescente"
                     onChange={this.order}>Decrescente</option>
             </select>
        </div>  
    </Div1>
      
    <CardSection>
    
        {this.state.products
        .filter( (product) =>{
          return this.state.valorMin === "" || product.value >= this.state.valorMin
        })
        .filter( (product) =>{
          return this.state.valorMax === "" || product.value <= this.state.valorMax
        })
       .filter( (product) =>{
         return product.name.toLowerCase().includes(this.state.PesquisaNome.toLowerCase());
       })
       .sort ((a, b) =>{
         switch (this.state.ordem){
           case "crescente":
                return a.name.localeCompare(b.name)
          
            case "decrescente":
              return b.name.localeCompare(a.name)
         }
       })
        .map((product)=>{
          return(
       
            <Card>
               <IMG src={product.imageUrl} alt="" />
                 <CardFilho>
                   <H4>{product.name}</H4>
                   <P>R${product.value}</P>
                   <button>Adicionar ao Carrinho</button>
                </CardFilho>
           </Card >
     
          )
        })}
    
  
      
    </CardSection>
    
    </Div>  

   <Div> <p>Olá carrinho</p>  
    {/* {Carrinho} */}</Div>
  
      </ConteinerPrincipal>
       );
     }

  }

export default App;

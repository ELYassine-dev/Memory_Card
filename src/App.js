import React,{useEffect, useState} from "react";
import './App.css';
import './component/card.css';
import Card from'./component/card.js';

const cardimages=[
  {"src":"/img/cat.jpeg", matched:false},
  {"src":"/img/cwala.jpeg", matched:false},
  {"src":"/img/dby.jpeg", matched:false},
  {"src":"/img/elephent.jpeg", matched:false},
  {"src":"/img/fox.jpeg", matched:false},
  {"src":"/img/lion3.jpeg", matched:false},
  // {"src":"/img/loud.jpeg", matched:false},
  // {"src":"/img/monkey.jpeg", matched:false},
  // {"src":"/img/penguin.jpeg", matched:false},
  // {"src":"/img/tt.jpeg", matched:false},
  // {"src":"/img/turtule.jpeg", matched:false},

]
function App() {
const [cards,setCards]=useState([])
const [moves,setMoves]=useState(0)
const [choice1,setChoice1]=useState(null);
const [choice2,setChoice2]=useState(null);
const [disabled,setDisabled]=useState(false);
const [time,setTime]=useState(0);


const shelcrds= ()=>{
  const shulcard=[...cardimages, ...cardimages]
.sort(()=>Math.random() -0.5)
.map((card)=>({...card, id:Math.random()}))
setChoice1(null)
setChoice2(null)
setCards(shulcard)
setMoves(0)
}
const handlechoice=(card)=>{
choice1 ? setChoice2(card):setChoice1(card);

}
useEffect(() =>{
  if(choice1 && choice2){
    setDisabled(true)
    if(choice1.src === choice2.src){
setCards(prevcards=>{
  return prevcards.map(card=>{
    if(card.src === choice1.src){
      return{...card, matched:true}
    }else{
      return card
    }
  })
})
      resetmoves()
    }else {
     setTimeout(()=>resetmoves(),1000) 

    }
  }
},[choice1,choice2])

console.log(cards)


const resetmoves=()=>{
  setChoice1(null);
  setChoice2(null);
setMoves(prevMov=>prevMov+1);
setDisabled(false)
}

useEffect(()=>{
  shelcrds()
},[])


return (
    <div className="App">
      <h1>Memory card</h1>
      <button onClick={shelcrds} >New Game</button>


<div className="card-grid">
{cards.map(card=>(
 <Card key={card.id}
  card={card} 
  handleChoice={handlechoice}
  flipped={card === choice1 || card === choice2 || card.matched }
  disabled={disabled}
  />
))}
 <p>Moves:{moves} Time:{time}</p>

</div>

 </div> 
 );


}

export default App;

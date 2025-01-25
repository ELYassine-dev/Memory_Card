import './card.css';
export default function Card({card, handleChoice, flipped,disabled}){
    
    const handleclick=()=>{
        if(!disabled){
        handleChoice(card)
    }
    }
    
    return(
        <>
                
     <div className="card">
     <div className={flipped?"flipped":""}>    
    
    <img className="front"  alt ="card front" src={card.src}/>
    <img className="back" 
    onClick={handleclick} 
    alt ="card back" 
    src="/img/cover3.jpg"/>
   
    </div>
    </div>
        
        </>
    )
}
import React, {useState, useEffect} from 'react';
import '../Containers/ItemCount.css';

// revisar por que no funciona  
const ItemCount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    
    useEffect(() => {
        setCount(parseInt(initial));
       
    }, [initial]);

    return (
        <div className="counter">
            <button disabled={count <=1 } className="counter__button" onClick={subtract}>-</button> 
            <span className="counter__number">{count}</span>
            <button disabled={count >= stock} className="counter__button" onClick={add}>+</button>

            <div>
                <button disabled={stock<=30} onClick={(()=> onAdd(count))} className='add' >Agregar al carrito</button>
            </div>
        </div>
    );
    }


    export default ItemCount;

import { useState } from "react";

const Card = ({card, initImg, clickHandler}) => {
    const [src, setSrc] = useState(initImg)
    return (
            <img src={src} alt="" 
                onClick={() => setSrc(card.cardImage)}
            />
    );
};

export default Card;
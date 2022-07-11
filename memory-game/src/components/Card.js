import { useState } from "react";

const Card = ({card, initImg, cardFlipHandler}) => {
    const [src, setSrc] = useState(initImg)
    return (
            <img src={src} alt="" 
                onClick={() => setSrc(cardFlipHandler(card))}
            />
    );
};

export default Card;
const ColorListItem = ({color, clickHandler}) => {
    return (
        <li className={color} style={{background: color}} onClick={clickHandler}></li>
    );
};

export default ColorListItem;
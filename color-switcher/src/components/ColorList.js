import ColorListItem from "./ColorListItem";

const ColorList = ({colorArray, clickHandler}) => {
    return (
        <ul id="switcher">
            {colorArray.map((color, index) => {
                return <ColorListItem
                            color={color}
                            clickHandler={clickHandler}
                            key={index}
                        />
            })}
        </ul>
    );
};

export default ColorList;
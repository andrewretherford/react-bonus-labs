import { useState } from "react";

const Form = ({submitHandler}) => {
const [input, setInput] = useState('')

    return (
        <form onSubmit={(e) => {
            submitHandler(e)
            setInput('')
            }}>

            <input type="text" placeholder="add a color" 
                onChange={(e) => setInput(e.target.value)}
                value={input}      
            />
            <button type="submit">Submit</button>
            
        </form>
    );
};

export default Form;
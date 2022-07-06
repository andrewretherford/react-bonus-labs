import { useState } from "react";

const Form = ({handleSubmit}) => {
    const [input, setInput] = useState('')

    return (
        <form onSubmit={(e) => {
            handleSubmit(e, input)
            setInput('')
        }}>
            <label htmlFor="form-input"></label>
            <input onChange={(e) => setInput(e.target.value)} id="form-input" type="text" value={input} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
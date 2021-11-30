import React, {useContext, useState} from 'react';
import {Context} from "../store/store";
import {ActionType} from "../store/actions";

const UserInput = () => {
    const context = useContext(Context);
    const { state, dispatch } = context;

    const [inputValue, setInputValue] = useState(state.city);

    const handleSubmit = () => {
        dispatch({ type: ActionType.SetCity, payload: inputValue });
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }

        if (event.key === 'Escape') {
            setInputValue('');
        }
    }

    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
                placeholder='Enter a city'
            />
            <button onClick={handleSubmit}>
                Go!
            </button>
        </div>
    )
}

export default UserInput;

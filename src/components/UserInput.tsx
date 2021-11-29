import React, {useContext, useState} from 'react';
import {Context} from "../store/store";
import {ActionType} from "../store/actions";

const UserInput = () => {
    const context = useContext(Context);
    const { state, dispatch } = context;

    const [inputValue, setInputValue] = useState(state.city);

    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <button onClick={() => dispatch({type: ActionType.SetCity, payload: inputValue})}>
                Go!
            </button>
        </div>
    )
}

export default UserInput;

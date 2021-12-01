import React, {useContext, useState} from 'react';
import {Context} from "../store/store";
import {ActionType} from "../store/actions";
import {FiSearch} from "react-icons/fi";
import {TiDelete} from "react-icons/ti";

import '../styles/components/UserInput.scss';

const UserInput = () => {
    const context = useContext(Context);
    const { state, dispatch } = context;

    const [inputValue, setInputValue] = useState(state.city);

    const handleSubmit = () => {
        if (inputValue === '') return;

        dispatch({ type: ActionType.SetCity, payload: inputValue });
    }

    const handleClear = () => {
        setInputValue('');
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }

        if (event.key === 'Escape') {
            handleClear();
        }
    }

    return (
        <div className='user-input'>
            <div className='user-input_search'>
                <input
                    type='text'
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    onKeyDown={handleKeyPress}
                    autoFocus
                    placeholder='Enter a city'
                    data-testid='city-input'
                    className='user-input_text'
                />
                <button
                    onClick={handleClear}
                    data-testid='city-clear'
                    className='user-input_clear user-input_button'
                >
                    <TiDelete />
                </button>
                <button
                    onClick={handleSubmit}
                    data-testid='city-submit'
                    className='user-input_submit user-input_button'
                >
                    <FiSearch />
                </button>
            </div>
        </div>
    )
}

export default UserInput;

import React from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/ai";

import '../styles/components/LoadingIndicator.scss';

const LoadingIndicator = () => {
    return (
        <div data-testid='loading-indicator' className='loading-indicator'>
            <AiOutlineLoading3Quarters />
        </div>
    )
}

export default LoadingIndicator;

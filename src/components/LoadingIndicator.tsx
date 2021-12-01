import React from 'react';
import {AiOutlineLoading3Quarters} from "react-icons/all";

import '../styles/components/LoadingIndicator.scss';

const LoadingIndicator = () => {
    return (
        <div className='loading-indicator'>
            <AiOutlineLoading3Quarters />
        </div>
    )
}

export default LoadingIndicator;

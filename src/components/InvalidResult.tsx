import React from 'react';

const InvalidResult = () => {
    return (
        <div className='result-invalid'>
            <p>
                Oops... It seems like the city you requested could not be found.
            </p>
            <p>Please try again</p>
        </div>
    )
}

export default InvalidResult;

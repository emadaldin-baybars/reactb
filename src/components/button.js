import React from 'react';

const Button = ({render}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <button type="button" className="btn btn-primary btn-sm">click</button>
            <span style={{color: 'darkgray', fontSize: 12}}>{render}</span>
        </div>
    );
}

export default Button;
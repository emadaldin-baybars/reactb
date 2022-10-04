import React from 'react';
import Button from '../components/button';

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h3>Home</h3>
            <div>
                <Button render={<p>Click me</p>} />
            </div>
        </div>
    );
}
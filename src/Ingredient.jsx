import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Ingredient({ name, type, onClick }) {
    const [selected, setSelected] = useState(false);

    let buttonStyle;
    if (type === 'meat') {
        buttonStyle = selected ? 'btn btn-danger' : 'btn btn-outline-danger';
    } else if (type === 'veg') {
        buttonStyle = selected ? 'btn btn-success' : 'btn btn-outline-success';
    } else if (type === 'fruit') {
        buttonStyle = selected ? 'btn btn-warning' : 'btn btn-outline-warning';
    } else {
        buttonStyle = selected ? 'btn btn-secondary' : 'btn btn-outline-secondary';
    }

    const handleClick = () => {
        setSelected(!selected);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type="button" className={buttonStyle} onClick={handleClick}>
            {name}
        </button>
    );
}

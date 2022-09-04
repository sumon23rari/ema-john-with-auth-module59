import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const navigate=useNavigate();
    console.log(navigate)
    return (
        <div>
            <h2>This is Inventory</h2>
        </div>
    );
};

export default Inventory;
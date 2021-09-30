import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const addItem = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            return;
        }
        console.log(`No hay stock`);
    }

    const reduceItem = () => {
        if (counter === 0) {
            console.log(`No hay mas items para devolver`);
            return;
        }
        setCounter(counter - 1);
    }

    const addToCart = () => {
        onAdd(counter);
    }

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={reduceItem}>-</Button>
                <Box>
                    <Paper sx={{ display: 'flex', flexWrap: 'wrap' }}>{counter}</Paper>
                </Box>
                <Button variant="outlined" onClick={addItem}>+</Button>
                <Button variant="outlined" onClick={addToCart}>Añadir al Carrito</Button>
            </Stack>

        </>
    )
}

export default ItemCount

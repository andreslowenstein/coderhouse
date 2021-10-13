import React, { useEffect, useState } from 'react';
import Item from './Item';


const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchJSON = async () => {
            const response = await fetch("./items.json");
            let json = await response.json();
            setItems(json);
        };

        fetchJSON();
    }, []);
    return (
        <>
            {items.map((item) => {
                return (
                    <>
                        <Item />
                    </>
                )
            })}
        </>
    )
}

export default ItemList;

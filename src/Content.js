import React from 'react';
import ItemList from './ItemList';


const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
        {items.length ? (
        <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        ) : (
            <p style={{marginTop:'12rem', fontSize:'27px', color:'#7a395945'}}>
            Your list is empty. 
            </p>
        )}
    </main>
  )
};

export default Content;
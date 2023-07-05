// import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";



export const GitExpertApp = () => {
  const [ categories, setCategories] = useState(["one punch"]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;
    
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'valorant' ]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory 
      // setCategories={ setCategories } 
       onNewCategory={ (value) => onAddCategory(value)}
     
      />
        {
        categories.map( ( category ) => ( 
        <GifGrid key={ category } category={ category }/>
        )
        )
        }
      
    </>
  );
};



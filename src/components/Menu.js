import React, { useState } from 'react'
import Items from './Items'

const Menu = () => {
   
   const[selectedCategory,setSelectedCategory]=useState('all');

   const handleCategoryChange=(category)=>{
      setSelectedCategory(category);
   };
  return (
<div>
        <div>
        <h1>Our Menu</h1>
        </div>
     <div className='menu-guide'>
        <div className='menu-items'>
        <p onClick={()=>handleCategoryChange('all')}>All</p>
        <p onClick={()=>handleCategoryChange('breakfast')}>Breakfast</p>
        <p onClick={()=>handleCategoryChange('lunch')}>Lunch</p>
        <p onClick={()=>handleCategoryChange('shakes')}>Shakes</p>
        </div>
     </div>
     <div className='food'>
        <Items selectedCategory={selectedCategory}/>
     </div>
</div>
    
  )
}

export default Menu
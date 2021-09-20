import React, { useState } from 'react';
import { GitGrid } from './components/GitGrid';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    return(
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories = {setCategories} />
        <hr/>
        <ol>
            {
                categories.map( category => (
                    <GitGrid 
                        key={category}
                        category={category}
                    />
                    ))
            }
        </ol>
        </>
    )
}
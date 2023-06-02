import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["karely ruiz"]);
    
    const onAddCategory = (newCategory)=> {
        const foundCategory = categories.find(category => category.toLowerCase() === newCategory.toLowerCase()) && true;
        if(foundCategory) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

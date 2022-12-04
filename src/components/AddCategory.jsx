import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newItemCategory = inputValue.trim();
        if(newItemCategory.length <= 1) return;
        onNewCategory(newItemCategory);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} 
            />
        </form>
    )
}

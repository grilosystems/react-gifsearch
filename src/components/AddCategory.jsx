import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log('Hola mundo desde onSubmit');
        event.preventDefault();
        const newItemCategory = inputValue.trim();
        if(newItemCategory.length <= 1) return;
        onNewCategory(newItemCategory);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} 
            />
        </form>
    )
}

AddCategory.protoTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
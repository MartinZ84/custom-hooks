
import { useState } from 'react';

export const useForm = ( initialForm  = {} ) => {
    const [formState, setFormState] = useState( initialForm );
    
    // const { username, email } = formState;
    
    // This function will handle the input changes
 const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
        ...formState,
        [name]: value
    })
   }

   const onResetForm = () => {
    setFormState( initialForm );
   }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}

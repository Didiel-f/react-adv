import {  FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    
    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={ onChange }
                    className={`${ name.trim().length <= 0 && 'has-error'}`}
                />

                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                
                <input 
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={ onChange }
                    className={`${ !isValidEmail(email) && 'has-error' }`}
                />

                { !isValidEmail(email) && <span>Email no es válido</span> }
                
                <input 
                    type="password"
                    placeholder="Password"
                    name='password1'
                    value={password1}
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    type="password"
                    placeholder="Password2"
                    name='password2'
                    value={password2}
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }

                <button type="submit">Create</button>
                <button onClick={resetForm} type="button">Reset Form</button>
                
            </form>
        </div>
    )
}

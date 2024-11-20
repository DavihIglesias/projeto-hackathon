import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5; 
`;

const Login = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 94%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;

        &::placeholder {
            color: #999;
            font-style: italic;
        }
    }

    .forgot-password {
        font-size: 12px;
        color: #007bff;
        text-decoration: none;
        margin-top: 0px;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .button-enter {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .button-enter:hover {
        background-color: #45a049;
    }

    .button-create {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .button-create:hover {
        background-color: #0056b3;
    }
`;

const TelaDeLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const verificaUsuario = (event) => {
        event.preventDefault(); 

        
        if (email.trim() === '' || senha.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        
        alert('Login realizado com sucesso! Redirecionando para o Quiz...');
        navigate('/quiz');
    };

    return (
        <Container>
            <Login onSubmit={verificaUsuario}>
                <label htmlFor='username'></label>
                <input
                    required
                    placeholder='Email'
                    type='email'
                    id='username'
                    name='username'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'></label>
                <input
                    required
                    placeholder='Senha'
                    type='password'
                    id='password'
                    name='password'
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit' className="button-enter">Jogar o Quiz</button>
                <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
                <button
                    type="button"
                    className="button-create"
                    onClick={() => navigate('/cadastro')}
                >
                    Criar nova conta
                </button>
            </Login>
        </Container>
    );
};

export default TelaDeLogin;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
`;

const FormWrapper = styled.div`
  width: 400px;
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: 2px solid #333;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #333;
    color: #fff;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const validationSchema = yup.object({
  nome: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter pelo menos 3 caracteres'),
  sobrenome: yup.string().required('Sobrenome é obrigatório').min(3, 'Sobrenome deve ter pelo menos 3 caracteres'),
  dataNascimento: yup.date().required('Data de nascimento é obrigatória').max(new Date(), 'Data inválida'),
  cpf: yup.string().required('CPF é obrigatório').matches(/^\d{11}$/, 'CPF deve ter 11 números'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmarSenha: yup.string()
    .oneOf([yup.ref('senha'), null], 'Senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
});

const PaginaCadastro = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      cpf: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        navigate('/login');
      }, 2000);
    },
  });

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
      <FormWrapper>
        <Title>Cadastro</Title>
        <form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Label>Nome</Label>
            <Input
              type="text"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nome && formik.errors.nome && <small>{formik.errors.nome}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>Sobrenome</Label>
            <Input
              type="text"
              name="sobrenome"
              value={formik.values.sobrenome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.sobrenome && formik.errors.sobrenome && <small>{formik.errors.sobrenome}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>Data de Nascimento</Label>
            <Input
              type="date"
              name="dataNascimento"
              value={formik.values.dataNascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dataNascimento && formik.errors.dataNascimento && <small>{formik.errors.dataNascimento}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>CPF</Label>
            <Input
              type="text"
              name="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cpf && formik.errors.cpf && <small>{formik.errors.cpf}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && <small>{formik.errors.email}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>Senha</Label>
            <Input
              type="password"
              name="senha"
              value={formik.values.senha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.senha && formik.errors.senha && <small>{formik.errors.senha}</small>}
          </InputWrapper>

          <InputWrapper>
            <Label>Confirmar Senha</Label>
            <Input
              type="password"
              name="confirmarSenha"
              value={formik.values.confirmarSenha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmarSenha && formik.errors.confirmarSenha && <small>{formik.errors.confirmarSenha}</small>}
          </InputWrapper>

          <Button type="submit">Cadastrar</Button>
        </form>
      </FormWrapper>
      {modalOpen && <Modal>Cadastro realizado com sucesso!</Modal>}
    </Container>
  );
};

export default PaginaCadastro;
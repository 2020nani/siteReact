import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Conteudo } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-amil válido')
    .required('O e-mail é obrigatório'),
  nascimento: Yup.string()
    .required('O campo nascimento é obrigatório')
    .min(10)
    .max(10),
  cpf: Yup.string()
    .notRequired()
    .min(11)
    .max(11),
    cep: Yup.string()
    .notRequired()
    .min(8)
    .max(8),
  endereco: Yup.string()
  .notRequired(),
  numero: Yup.string()
  .notRequired(),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});



export default function SignUp() {
  const emailCadastro = useSelector(state => state.auth.emailCadastro);
  const dispatch = useDispatch();
  function buscaCep(ev, setFieldValue) {
    const { value } = ev.target 
    fetch(`https://viacep.com.br/ws/${value}/json/`)
         .then((res) => res.json())
         .then((data) => {
           setFieldValue('endereco', data.logradouro + ', Bairro' + data.bairro + ', Cidade ' + data.localidade + ' - ' + data.uf)
         })  
  
    }
 
  return (
    <Container>
      <Conteudo>
        <img src={logo} width="300px" alt="Code7" />

        <Formik
            initialValues={{
              email: emailCadastro,
             
            
            }}
            validationSchema={schema}
            
            onSubmit={async (values) => {
              const {name, email, nascimento, cpf, cep, endereco, numero, password } = values;
             
              dispatch(signUpRequest(name, email, nascimento, cpf, cep, endereco, numero, password));
            
            }
          }
          >
            {({
              touched,
              errors,
              setFieldValue,
            }) => (
              <Form >

                <Field name="name" placeholder="Digite seu nome" />
                {errors.name && touched.name ? (<div>{errors.name}</div>) : null}

                <Field name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}

                <Field name="nascimento" placeholder="ex: 11/10/1984" />
                {errors.nascimento && touched.nascimento ? (<div>{errors.nascimento}</div>) : null}

                <Field name="cpf" placeholder="Digite seu cpf (somente numeros)" />
                {errors.cpf && touched.cpf ? (<div>{errors.cpf}</div>) : null}

                <Field name="cep" placeholder="Digite seu cep" onBlur={(ev) => ( buscaCep(ev, setFieldValue))} /> 
                {errors.cep && touched.cep ? (<div>{errors.cep}</div>) : null}
                 
                <Field name="endereco" placeholder="Digite seu endereco" />
                {errors.endereco && touched.endereco ? (<div>{errors.endereco}</div>) : null}

                <Field name="numero" placeholder="Digite numero de seu imovel" />
                {errors.numero && touched.numero ? (<div>{errors.numero }</div>) : null}

                <Field name="password" placeholder="Digite sua senha" />
                {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
              
                <button type="submit">{'Cadastrar'}</button>
                
              </Form>
            )}
          </Formik>
      </Conteudo>
    </Container>
  );
}
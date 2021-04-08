import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Conteudo, Texto } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { getEmailSigUp } from '~/store/modules/auth/actions';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-amil válido')

});

export default function Home() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Conteudo>
      <Texto>
        <h1>Transformamos sua ideia em realidade</h1>
        <h2>Milhoes de pessoas utilizam a tecnologia<br/>
        traga sua ideia e a transformaremos em realidade<br/>
        Atraves da construcao de sites e softwares
        </h2>
      </Texto >
      <Formik
            initialValues={{
              email: '',
            
            }}
            validationSchema={schema}

            onSubmit={async (values) => {
              const { email } = values;
                dispatch(getEmailSigUp(email));
            
            }
          }
          >
            {({
              touched,
              errors,
           
            }) => (
              <Form >

                <Field name="email" placeholder="Digite seu email" />
                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
              
                <button type="submit">{'Cadastrar'}</button>
                
              </Form>
            )}
          </Formik>
      </Conteudo>
    </Container>
  );
}


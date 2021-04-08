import React  from 'react';
import { Container, ButtonForm } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { cadastraTarefa } from '../../store/modules/tarefas/actions'

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('nome é obrigatório'),
  dataEntrega: Yup.string().required('Campo obrigatório')
  .min(10, 'Preencha conforme exemplo (11/10/1984)')
  .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  dataConclusao: Yup.string()
  .min(10, 'Preencha conforme exemplo (11/10/1984)')
  .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  
});

export default function CadastrarTarefa() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  return (console.log(user),

    <Container>
       <h1>Cadastrar Tarefa</h1>
          <Formik
            initialValues={{
              nome: '',
              dataEntrega: '',
              dataConclusao:'',
              userId: user.id
            }}
            validationSchema={schema}

            onSubmit={async (values) => {
                dispatch(cadastraTarefa(values))
            
            }}
          >
            {({
              touched,
              errors,
             
           
            }) => (
              <Form className="formulario">

                <label>Nome Tarefa</label>
                <Field name="nome" placeholder="Digite novo nome" />
                {errors.nome && touched.nome ? (<div>{errors.nome}</div>) : null}
 
                <label>Data Entrega da Tarefa</label>
                <Field  name="dataEntrega" placeholder="Digite nova data" />
                {errors.dataEntrega && touched.dataEntrega ? (<div>{errors.dataEntrega}</div>) : null}

                <label>Data Conclusao da Tarefa</label>
                <Field name="dataConclusao" placeholder="Digite nova data" />
                {errors.dataConclusao && touched.dataConclusao ? (<div>{errors.dataConclusao}</div>) : null}
               
                <ButtonForm>
                <button type="submit">Salvar</button>
                </ButtonForm>
             
              </Form>
            )}
          </Formik>


    </Container>

  );

}


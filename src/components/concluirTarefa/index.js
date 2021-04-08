import React  from 'react';
import { Container, ButtonForm } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateTarefaRequest } from '../../store/modules/tarefas/actions'

const schema = Yup.object().shape({
  dataConclusao: Yup.string()
  .min(10, 'Preencha conforme exemplo (11/10/1984)')
  .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  
});

export default function ConcluirTarefa(props) {
  const tarefas = props.children
  const dispatch = useDispatch()
  return (

    <Container>
       <h1>Atualizar e Concluir Tarefa</h1>
          <Formik
            initialValues={{
              nome: tarefas.nome,
              dataEntrega: tarefas.dataEntrega,
              dataConclusao: '',
              userId: tarefas.userId[0]
            }}
            validationSchema={schema}

            onSubmit={async (values) => {
           
                dispatch(updateTarefaRequest([values, tarefas._id]))
            
            }}
          >
            {({
              touched,
              errors,
             
           
            }) => (
              <Form className="formulario">

                <label>Data Conclusao Tarefa</label>
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


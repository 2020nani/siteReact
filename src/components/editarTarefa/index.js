import React  from 'react';
import { Container, ButtonForm } from './styles'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateTarefaRequest } from '../../store/modules/tarefas/actions'

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('nome é obrigatório'),
  dataEntrega: Yup.string().required('Campo obrigatório')
  .min(10, 'Preencha conforme exemplo (11/10/1984)')
  .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  dataDivida: Yup.string()
  .min(10, 'Preencha conforme exemplo (11/10/1984)')
  .max(10, 'Preencha conforme exemplo (11/10/1984)'),
  
});

export default function EditarTarefa(props) {
  const tarefas = props.children
  const dispatch = useDispatch()
  return (

    <Container>
       <h1>Editar Tarefa</h1>
          <Formik
            initialValues={{
              nome: tarefas.nome,
              dataEntrega: tarefas.dataEntrega,
              dataConclusao: tarefas.dataConclusao,
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


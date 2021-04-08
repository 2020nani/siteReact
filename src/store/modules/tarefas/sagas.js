import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateTarefaSuccess, cadastraTarefa , deleteProfile } from './actions';
import history from '../../../services/history';


export function* cadastroTarefa({payload} ) {
  console.log(payload)
try{
 const { nome, dataEntrega, dataConclusao, userId } = payload.data
 const response = yield call(api.post, 'tarefas', {
    nome,
    dataEntrega,
    dataConclusao,
    userId
 });
  
    toast.success('Tarefa cadastrada com sucesso!');
    history.push('/');
} catch (error) {
    
  toast.error('Erro ao cadastrar Tarefa');
  
}
}
/* funcao que requisita update do admin para o servidor */
export function* updateProfile({ payload }) {
  try {
    
    const { nome, dataEntrega, dataConclusao, userId } = payload.data[0]
    const _id = payload.data[1]
    

    const response = yield call(api.put, `tarefas/${_id}`, {
    nome: nome,
    dataEntrega: dataEntrega,
    dataConclusao: dataConclusao,
    userId: userId

    });
    
    toast.success('Tarefa atualizada com sucesso!');

    yield put(updateTarefaSuccess(response.data));
    history.push('/');
  } catch (error) {
    
    toast.error('Erro ao atualizar Tarefa');
    
  }
}

/* funcao que faz requisicao de deletar admin */
export function* tarefaDelete({ payload }) {
  try {
   
    const  id  = payload.id;
   
    yield call(api.delete, `tarefas/${id}`);
  
    toast.success('Tarefa deletada com sucesso!');
    history.push('/');
    
  } catch (error) { 
    toast.error('Erro ao deletar Tarefa');
    
  }
}

/* exporta as funcoes update e delete profile */
export default all([
  takeLatest('@tarefa/CADASTRA_TAREFA', cadastroTarefa ),
  takeLatest('@tarefa/UPDATE_TAREFA_REQUEST', updateProfile),
  takeLatest('@tarefa/DELETE_TAREFA', tarefaDelete)
  ]);
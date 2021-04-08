export function cadastraTarefa(data) {
  
  return {
    type: '@tarefa/CADASTRA_TAREFA',
    payload: { data },
    
  };
}

export function updateTarefaRequest(data) {
  
    return {
      type: '@tarefa/UPDATE_TAREFA_REQUEST',
      payload: { data },
      
    };
  }
  
  export function updateTarefaSuccess(tarefas) {
    return {
      type: '@tarefa/UPDATE_TAREFA_SUCCESS',
      payload: { tarefas },
    };
  }
  
  export function deleteTarefa(id) {
    return {
      type: '@tarefa/DELETE_TAREFA',
      payload: { id },
      
    };
  }
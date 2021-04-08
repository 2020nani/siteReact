import produce from 'immer';

const INITIAL_STATE = {
  tarefas: null,
};

export default function tarefa(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tarefa/CADASTRO_SUCCESS': {
        draft.tarefas = action.payload.tarefas;
        break;
      }
      case '@tarefa/UPDATE_TAREFA_SUCCESS': {
        draft.tarefas = action.payload.tarefas;
        break;
      }
      case '@tarefa/DELETE_TAREFA': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}
import { combineReducers } from 'redux'

import auth from './auth/reducer'
import admin from './admin/reducer'
import tarefa from './tarefas/reducer'

export default combineReducers({
    auth,
    admin,
    tarefa
})
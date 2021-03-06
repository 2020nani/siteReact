import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import admin from './admin/sagas'
import tarefa from './tarefas/sagas'

export default function* rootSaga() {
    return yield all ([auth, admin, tarefa])
}
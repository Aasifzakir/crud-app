import {all} from 'redux-saga/effects'
import userWatcherSaga from './sagas/userSaga'

export default function* rootSaga() {
    yield all([
        userWatcherSaga()
    ])
}
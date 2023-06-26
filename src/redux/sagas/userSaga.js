import { call, put, takeLatest } from "redux-saga/effects";
import * as types from '../constants'
import * as actions from '../actions/userAction'
import * as apis from '../apis'

//GET USER SAGA
function* onLoadUserStart() {
    try {
        const response = yield call(apis.loadUserAPI)
        if(response.statusText === 'OK'){
        yield put(actions.loadUserSuccess(response.data))
        }
    } catch (error) {
        yield put(actions.loadUserError(error.response.data))
    }
}

//ADD USER SAGA
function* onAddUserStart({payload}) {
    try {
        const response = yield call(apis.addUserAPI, payload)
        if(response.statusText === 'Created'){
        yield put(actions.addUserSuccess(response.data))
        }
    } catch (error) {
        yield put(actions.addUserError(error.response.data))
    }
}

//DELETE USER SAGA
function* onDeleteUserStart({payload}) {
    try {
        const response = yield call(apis.deleteUserAPI, payload)
        if(response.statusText === 'OK') {
            yield put(actions.deleteUserSuccess(response.data.id))
        }
    } catch (error) {
        yield put(actions.deleteUserError(error.response.data))
    }
}

//EDIT USER SAGA
function* onEditUserStart({payload}) {
    try {
        const response = yield call(apis.editUserAPI, payload.userId, payload.user)
        if(response.statusText === 'OK'){
            yield put(actions.editUserSuccess(response.data))
        }
    } catch (error) {
        yield put(actions.editUserError(error.response.data))
    }
}

//SHOW USER SAGA
function* onShowUserStart({payload}) {
    try {
        const response = yield call(apis.showUserAPI, payload)
        if(response.statusText === 'OK'){
        yield put(actions.showUserSuccess(response.data))
        }
    } catch (error) {
        yield put(actions.showUserError(error.response.data))
    }
}

function* userWatcherSaga() {
    yield takeLatest(types.LOAD_USER_START, onLoadUserStart);
    yield takeLatest(types.ADD_USER_START, onAddUserStart);
    yield takeLatest(types.DELETE_USER_START, onDeleteUserStart);
    yield takeLatest(types.EDIT_USER_START, onEditUserStart);
    yield takeLatest(types.SHOW_USER_START, onShowUserStart);
  }
  
  export default userWatcherSaga;
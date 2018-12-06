import { takeLatest, call, put } from 'redux-saga/effects';
import axios from "axios";

//watcher

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}




//function 

function fetchDog() {
    return axios({
        method: "get",
        url :"https://dog.ceo/api/breeds/image/random"

    });
}


function* workerSaga() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;


        //dispatch a succes action to the  store with the new dog
        yield put({ type: "API_CALL_SUCCESS", dog });

    }
    catch (error) {
        //dispatch a failure 
        yield put({ type: "API_CALL_FAILURE", error });

    }


}
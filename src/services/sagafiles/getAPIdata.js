import { takeEvery, put } from "redux-saga/effects";
import { FETCH_DATA, RESCIVE_DATA } from "../constant/constant";

function* fetchdata() {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield response.json();
    console.log(data)
    yield put({ type: RESCIVE_DATA, data: data });
}

function* getdataApi() {
    yield takeEvery(FETCH_DATA, fetchdata)
}

export default getdataApi
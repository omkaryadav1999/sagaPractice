import { all } from "redux-saga/effects";
import getdataApi from "./getAPIdata";

function* combinesaga() {
    yield all([getdataApi()])
}

export default combinesaga


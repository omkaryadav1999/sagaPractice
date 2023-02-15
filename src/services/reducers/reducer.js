import { RESCIVE_DATA } from "../constant/constant";

const intialState = [];

const dataProcessor = (state = intialState, action) => {
    switch (action.type) {
        case RESCIVE_DATA:
            return [...action.data];
        default:
            return state
    }
}

export default dataProcessor
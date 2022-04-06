import { actionChannel, all, call, delay, put, select, take, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from '../actions/actions';
// import { searchJob } from '../pages/api/api';

// function* loadPageIncrementSaga(action) {
//     try {
//         const res = yield fetch(`https://api.bossjob.com/jobs/filter?page=${action.page}`);
//         const data = yield res.json();
//         yield put(loadDataSuccess(data));
//     } catch (err) {
//         yield put(failure(err));
//     }
// }

// function* loadPageDecrementSaga({ page }) {
//     try {
//         console.log(page);
//     } catch (err) {
//         yield put(failure(err));
//     }
// }

function* loadDataSaga() {
    try {
        const res = yield fetch('https://api.bossjob.com/jobs/filter');
        const data = yield res.json();
        yield put(loadDataSuccess(data));
    } catch (err) {
        yield put(failure(err));
    }
}

function* rootSaga() {
    yield all([
        // takeLatest(actionTypes.PAGE_DECREMENT, loadPageDecrementSaga),
        // takeLatest(actionTypes.PAGE_INCREMENT, loadPageIncrementSaga(page)),
        takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
    ])
}

export default rootSaga;
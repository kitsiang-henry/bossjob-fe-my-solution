export const actionTypes = {
    FAILURE: 'FAILURE',
    PAGE_INCREMENT: 'PAGE_INCREMENT',
    PAGE_DECREMENT: 'PAGE_DECREMENT',
    RESET: 'RESET',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    HYDRATE: 'HYDRATE',
    QUERY: 'QUERY'
}

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error
    }
}

export function pageIncrement() {
    return {
        type: actionTypes.PAGE_INCREMENT
    }
}

// export function pageIncrement(page=1) {
//     async (dispatch) => {
//         const res = await fetch(`https://api.bossjob.com/jobs/filter?page=${page}`);
//         dispatch({
//             type: actionTypes.PAGE_INCREMENT,
//             data: res.json()
//         })
//     }

    // return {
    //     type: actionTypes.PAGE_INCREMENT,
    //     data
    // }
// }

// export function pageDecrement(page=1) {
//     if (page < 1) {
//         let page = 1;
//     }

//     async (dispatch) => {
//         const res = await fetch(`https://api.bossjob.com/jobs/filter?page=${page}`);
//         dispatch({
//             type: actionTypes.PAGE_DECREMENT,
//             data: res.json()
//         })
//     }
    
    // return {
    //     type: actionTypes.PAGE_DECREMENT,
    //     data
    // }
// }

export function reset() {
    return {
        type: actionTypes.RESET
    }
}

export function loadData() {
    return {
        type: actionTypes.LOAD_DATA
    }
}

export function loadDataSuccess(data) {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        data
    }
}

// export function query(jobTitle, companyName) {
//     return {
//         type: actionTypes.QUERY,
//         jobTitle: jobTitle,
//         companyName: companyName
//     }
// }
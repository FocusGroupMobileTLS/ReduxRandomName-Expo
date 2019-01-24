export function fetchUser() {
    return dispatch => {
      dispatch(requestUserDetails())
      return fetch(`https://randomuser.me/api/`)
        .then(response => response.json())
        .then(json => dispatch(receiveUserDetails(json)))
    }
}

export function requestUserDetails() {
    return {
        type: 'REQUEST_USER_DETAILS'
    }
}

export function receiveUserDetails(json) {
    return {
        type: 'RECEIVE_USER_DETAILS',
        json: json.results[0]
    }
}
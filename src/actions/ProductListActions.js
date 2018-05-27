import {
  START_LIST_FETCH,
  FINISH_LIST_FETCH,
} from './types';

export const listFetch = () => {
  return (dispatch) => {
    dispatch({ type: START_LIST_FETCH });
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('POST', '/graphql', true);
      request.setRequestHeader(
        'Content-Type',
        'application/graphql',
      );
      request.send('{ products { id title price quantity description url } }');
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText);
        }
      };
    }).then(response => dispatch({ type: FINISH_LIST_FETCH, payload: JSON.parse(response) }));
  };
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('POST', '/graphql', true);
    request.setRequestHeader(
      'Content-Type',
      'application/graphql',
    );
    request.send(`mutation{ removeProduct(id: "${id}") { id } }`);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        resolve(request.responseText);
      }
    };
  }).then((response) => {
    try {
      const data = JSON.parse(response);
      if (data.errors) {
        window.alert(data.errors[0].message);
      } else {
        window.location.reload(true);
      }
    } catch (e) {
      window.location.reload(true);
    }
  });
};

import {
  TITLE_CHANGE,
  TITLE_ERROR,
  QUANTITY_CHANGE,
  DESCRIPTION_CHANGE,
  URL_CHANGE,
  PRICE_CHANGE,
  SAVE_ERROR,
  ID_CHANGE,
  RESET_FORM,
} from './types';

export const idChanged = (id) => {
  return {
    type: ID_CHANGE,
    payload: id,
  };
};

export const titleChanged = (title) => {
  return {
    type: TITLE_CHANGE,
    payload: title,
  };
};

export const quantityChanged = (quantity) => {
  return {
    type: QUANTITY_CHANGE,
    payload: quantity,
  };
};

export const descriptionChanged = (description) => {
  return {
    type: DESCRIPTION_CHANGE,
    payload: description,
  };
};

export const urlChanged = (url) => {
  return {
    type: URL_CHANGE,
    payload: url,
  };
};

export const priceChanged = (price) => {
  return {
    type: PRICE_CHANGE,
    payload: price,
  };
};

export const resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

export const saveProduct = (title, quantity, price, description, url, id = '') => {
  return (dispatch) => {
    let validated = true;
    if (title === '') {
      validated = false;
      dispatch({ type: TITLE_ERROR, payload: 'Title cannot be blank' });
    }
    if (quantity === '') {
      quantity = 0;
    }
    if (price === '') {
      price = 1;
    }
    if (description === '') {
      description = `Description for ${title}`;
    }
    if (url === '') {
      url = '/img/processing.png';
    }
    if (validated) {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('POST', '/graphql', true);
        request.setRequestHeader(
          'Content-Type',
          'application/graphql',
        );
        if (id === '') {
          request.send(`mutation{addProduct(title: "${title}", quantity: ${quantity}, price: ${price}, description: "${description}", url: "${url}") { id } }`);
        } else {
          console.log('Updating');
          request.send(`mutation{updateProduct(id: "${id}", title: "${title}", quantity: ${quantity}, price: ${price}, description: "${description}", url: "${url}") { id } }`);
        }
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            resolve(request.responseText);
          }
        };
      }).then((response) => {
        let data = JSON.parse(response);
        if (data.errors) {
          dispatch({ type: SAVE_ERROR, payload: data.errors[0].message });
        } else {
          window.location = '/';
        }
      });
    }
  };
};

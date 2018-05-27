import {
  TITLE_CHANGE,
  TITLE_ERROR,
  QUANTITY_CHANGE,
  QUANTITY_ERROR,
  DESCRIPTION_CHANGE,
  DESCRIPTION_ERROR,
  URL_CHANGE,
  URL_ERROR,
  PRICE_CHANGE,
  PRICE_ERROR,
  SAVE_ERROR,
  ID_CHANGE,
  RESET_FORM,
} from '../actions/types';

const INITIAL_STATE = {
  id: '',
  title: '',
  titleError: '',
  quantity: 0,
  quantityError: '',
  description: '',
  descriptionError: '',
  url: '',
  urlError: '',
  price: '',
  priceError: '',
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ID_CHANGE:
      return { ...state, id: action.payload };
    case TITLE_CHANGE:
      return { ...state, title: action.payload, titleError: '' };
    case TITLE_ERROR:
      return { ...state, titleError: action.payload };
    case QUANTITY_CHANGE:
      return { ...state, quantity: action.payload, quantityError: '' };
    case QUANTITY_ERROR:
      return { ...state, quantityError: action.payload };
    case DESCRIPTION_CHANGE:
      return { ...state, description: action.payload, descriptionError: '' };
    case DESCRIPTION_ERROR:
      return { ...state, descriptionError: action.payload };
    case URL_CHANGE:
      return { ...state, url: action.payload, urlError: '' };
    case URL_ERROR:
      return { ...state, urlError: action.payload };
    case PRICE_CHANGE:
      return { ...state, price: action.payload, priceError: '' };
    case PRICE_ERROR:
      return { ...state, priceError: action.payload };
    case SAVE_ERROR:
      return { ...state, error: action.payload };
    case RESET_FORM:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

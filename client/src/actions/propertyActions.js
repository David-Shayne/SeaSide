import {
    GET_PROPERTIES,
    REMOVE_PROPERTY,
    CLEAR_CATEGORIES,
    GET_CATEGORY,
    CLEAR_LOADING,
    CLEAR_SEARCH_CATEGORIES,
    GET_SEARCH_NAME
} from './types';
import Axios from 'axios';

export const removeProperty = category => dispatch => {
    dispatch({
        type: REMOVE_PROPERTY,
        payload: category
    });
};

export const getProperties = () => dispatch => {
    Axios.get('/api/property').then(res => {
        dispatch({
            type: GET_PROPERTIES,
            payload: res.data
        });
    });
};

export const clearAllCategories = () => dispatch => {
    dispatch({
        type: CLEAR_CATEGORIES,
        payload: null
    });
};

export const clearSearchCategories = () => dispatch => {
    dispatch({
        type: CLEAR_SEARCH_CATEGORIES,
        payload: null
    });
};

export const getCategory = category => dispatch => {
    Axios.get(`/api/property/${category}`).then(res => {
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });
    });
};
export const getSearchNames = name => dispatch => {
    Axios.get(`/api/property/name/${name}`).then(res => {
        dispatch({
            type: GET_SEARCH_NAME,
            payload: res.data
        });
    });
};

export const clearLoading = () => dispatch => {
    dispatch({
        type: CLEAR_LOADING,
        payload: null
    });
};

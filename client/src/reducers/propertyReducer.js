import {
    REMOVE_PROPERTY,
    GET_PROPERTIES,
    CLEAR_CATEGORIES,
    GET_CATEGORY,
    CLEAR_LOADING,
    CLEAR_SEARCH_CATEGORIES,
    GET_SEARCH_NAME
} from '../actions/types';

const initialState = {
    properties: [],
    loading: true,
    searchProperties: []
};

const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CATEGORIES:
            return { ...state, properties: [], loading: true };
        case CLEAR_SEARCH_CATEGORIES:
            return { ...state, searchProperties: [], loading: true };
        case GET_CATEGORY:
            return {
                ...state,
                properties: [...state.properties, ...action.payload],
                loading: false
            };
        case GET_SEARCH_NAME:
            return {
                ...state,
                searchProperties: action.payload,
                loading: false
            };
        case REMOVE_PROPERTY:
            return {
                ...state,
                properties: state.properties.filter(
                    property => property.category !== action.payload
                )
            };
        case GET_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            };
        case CLEAR_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default propertyReducer;

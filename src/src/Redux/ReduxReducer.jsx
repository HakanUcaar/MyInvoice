import {
    UPDATE_COLLECTION_DATA,
    READ_COLLECTION_DATA,
    SAVE_COLLECTION_DATA,
    LOADING_COLLECTION_DATA,
    LOADED_COLLECTION_DATA
}
from './ReduxActionContants';



const initialState = {
    MyCollection : null,
    Link : "",
    IsFetching : false,
    IsReadCollectionData : false
};


function rootReducer (state = initialState, action) {
    switch(action.type){
        case UPDATE_COLLECTION_DATA:{
            return {
                ...state, MyCollection: action.payload,IsFetching:false
            }
        }
        case READ_COLLECTION_DATA:{
            return {
                ...state, MyCollection: action.payload,IsReadCollectionData:true,IsFetching:false,Link:action.payload.collectionId
            }         
        }
        case SAVE_COLLECTION_DATA:{
            return {
                ...state, MyCollection: null,IsFetching:false,Link:"",IsReadCollectionData:false
            }
        }   
        case LOADING_COLLECTION_DATA:{
            return {
                ...state, IsFetching: true
            }
        }
        case LOADED_COLLECTION_DATA:{
            return {
                ...state, IsFetching: false
            }
        }        
        default: return state;
    }
}

export default rootReducer;
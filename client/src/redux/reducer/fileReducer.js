import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE
} from '../Action/UploadFile';

const initialState = {
  uploading: false,
  uploadedFile: null,
  uploadError: null
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE_REQUEST:
      return {
        ...state,
        uploading: true,
        uploadedFile: null,
        uploadError: null
      };
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploading: false,
        uploadedFile: action.payload.filename,
        uploadError: null
      };
    case UPLOAD_FILE_FAILURE:
      return {
        ...state,
        uploading: false,
        uploadedFile: null,
        uploadError: action.payload.error
      };
    default:
      return state;
  }
};

export default fileReducer;

export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

export const uploadFileRequest = () => {
  return {
    type: UPLOAD_FILE_REQUEST
  };
};

export const uploadfileSuccess = (filename) => {
  return {
    type: UPLOAD_FILE_SUCCESS,
    payload: {
      filename: filename
    }
  };
};

export const uploadfileFailure = (error) => {
  return {
    type: UPLOAD_FILE_FAILURE,
    payload: {
      error: error
    }
  };
};
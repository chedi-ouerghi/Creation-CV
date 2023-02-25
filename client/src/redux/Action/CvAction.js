import axios from "axios";
import { GET_CVS, GET_ONE_CV } from "../ActionTypes/CvTypes";

export const get_cv = () => async (dispatch) => {
  try {
    const res = await axios.get("/cv/getcv");

    dispatch({ type: GET_CVS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_one_cv = (id) => async (dispatch) => {
  console.log(id,'yes')
  try {
    const res = await axios.get(`/cv/getOnecv/${id}`);

    dispatch({ type: GET_ONE_CV, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_cv = (CV) => async (dispatch) => {
  try {
    const response = await axios.post("/cv/addcv", CV);
    console.log(response.data); 
    dispatch(get_cv());
  } catch (error) {
    console.log(error);
    dispatch({ type: 'ADD_CV_FAILED', error: error.message });
  }
};

export const delete_cv = (id) => async (dispatch) => {
console.log(id)
  try {
    await axios.delete(`/cv/delcv/${id}`);
    dispatch(get_cv());
  } catch (error) {
    console.log(error);
  }
};
export const edit_cv = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/cv/editcv/${id}`, data);
    dispatch(get_cv());
  } catch (error) {
    console.log(error);
  }
};
import { toast } from "react-toastify";
import * as types from "../constants";

//GET USER ACTIONS
export const loadUserStart = () => {
  console.log("load user start action");
  return {
    type: types.LOAD_USER_START,
  };
};
export const loadUserSuccess = (users) => {
  console.log("load user success action");
  return {
    type: types.LOAD_USER_SUCCESS,
    payload: users,
  };
};
export const loadUserError = (error) => {
  console.log("load user error action");
  return {
    type: types.LOAD_USER_ERROR,
    payload: error,
  };
};

//ADD USER ACTIONS
export const addUserStart = (user) => {
  console.log("add user start action");
  return {
    type: types.ADD_USER_START,
    payload: user,
  };
};
export const addUserSuccess = (user) => {
  console.log("add user success action");
  toast.success('User added successfully'); 
  return {
    type: types.ADD_USER_SUCCESS,
    payload: user,
  };
};
export const addUserError = (error) => {
  console.log("add user error action");
  return {
    type: types.ADD_USER_ERROR,
    payload: error,
  };
};

//DELETE USER ACTIONS
export const deleteUserStart = (userId) => {
  console.log("delete user start action");
  return {
    type: types.DELETE_USER_START,
    payload: userId,
  };
};
export const deleteUserSuccess = (userId) => {
  console.log("delete user success action");
  toast.success("User deleted successfully");
  return {
    type: types.DELETE_USER_SUCCESS,
    payload: userId,
  };
};
export const deleteUserError = (error) => {
  console.log("delete user error action");
  return {
    type: types.DELETE_USER_ERROR,
    payload: error,
  };
};

//EDIT USER ACTIONS
export const editUserStart = (userId, user) => {
  console.log("Edit user start action");
  return {
    type: types.EDIT_USER_START,
    payload: { userId, user },
  };
};
export const editUserSuccess = (userId) => {
  console.log("edit user success action");
  toast.success('User updated successfully') 
  return {
    type: types.EDIT_USER_SUCCESS,
    payload: userId,
  };
};
export const editUserError = (error) => {
  console.log("edit user error action");
  return {
    type: types.EDIT_USER_ERROR,
    payload: error,
  };
};

//SHOW USER ACTIONS
export const showUserStart = (userId) => {
  console.log("Show user start action");
  return {
    type: types.SHOW_USER_START,
    payload: userId,
  };
};
export const showUserSuccess = (user) => {
  console.log("show user success action");
  return {
    type: types.SHOW_USER_SUCCESS,
    payload: user,
  };
};
export const showUserError = (error) => {
  console.log("show user error action");
  return {
    type: types.SHOW_USER_ERROR,
    payload: error,
  };
};
export const showUserResClean = () => {
  console.log("show user res clean action");
  return {
    type: types.SHOW_USER_RES_CLEAN,
  };
};

import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";

//send data to db
export const postUser = (formdata) => {
  try {
    return axios.post(userUrl, formdata);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user

export const loginUser = (formdata) => {
  try {
    return axios.post(userUrl + "/login", formdata);
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

//send data to switch the task

//send data to delete from db.

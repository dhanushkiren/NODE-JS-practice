import axios from "axios";

const BaseApiUrl = "http://localhost:4000/v1";

// { The commented codes or demonstrates the Api Call in native js fetch method instead of axios }

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const CreateUser = async (payload) => {
  const CreateUserEndPoint = `${BaseApiUrl}/user`;

  // const rawResponse = await fetch(CreateUserEndPoint, {headers,method: 'POST',body: JSON.Stringify(payload)});
  //return rawResponse.json();

  const { data: apiRespone } = await axios.post(
    `${CreateUserEndPoint}`,
    payload
  );
  return apiRespone;
};

export const RetrieveUser = async (userId) => {
  const GetUserEndPoint = `${BaseApiUrl}/user/${userId}`;

  // const rawResponse = await fetch(GetUserEndPoint,{method:'GET',headers});
  // return rawResponse.json();

  const { data: apiRespone } = await axios.get(GetUserEndPoint);
  await new Promise((r) => setTimeout(r, 2000));
  return apiRespone;
};

export const RetrieveAllUser = async () => {
  const getAllUserEndPoint = `${BaseApiUrl}/user/all`;

  //const rawResponse = await fetch(getAllUserEndPoint, {method:'GET', headers});
  //return rawResponse.json();

  const { data: apiRespone } = await axios.get(getAllUserEndPoint);
  return apiRespone;
};

export const EditUser = async (userId, payload) => {
  const editUserEndPoint = `${BaseApiUrl}/user/${userId}`;

  //const rawResponse = await fetch(editUserEndPoint, {method:'PUT', headers,body:JSON.stringify(payload)});
  //return rawResponse.json();

  const { data: apiRespone } = await axios.put(editUserEndPoint, payload);
  return apiRespone;
};

export const RemoveUser = async (userId) => {
  const removeUserEndPoint = `${BaseApiUrl}/user/${userId}`;

  const rawResponse = await fetch(removeUserEndPoint, {
    method: "DELETE",
    headers,
  });
  return rawResponse.json();

  // const { data: apiRespone } = await axios.delete(removeUserEndPoint);
  // return apiRespone;
};

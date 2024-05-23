import yup from "yup";

const MINIMUM_LENGTH = {
  name: 2,
  age: 2,
};
const MAXIMUM_LENGTH = {
  name: 20,
  age: 2,
};
export const getUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};

export const addUser = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
        email: yup.string().email(),
        age: yup.string().min(MINIMUM_LENGTH.age).max(MAXIMUM_LENGTH.age),
      }),
    },
  },
};

export const updateUser = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(MINIMUM_LENGTH.name).max(MAXIMUM_LENGTH.name),
        email: yup.string().email(),
        age: yup.string().min(MINIMUM_LENGTH.age).max(MAXIMUM_LENGTH.age),
      }),
    },
  },
};

export const deleteUser = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup.number().required(),
      }),
    },
  },
};

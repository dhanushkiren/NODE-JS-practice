import users from "../data/users.data.js";

/**
 * 
 * @param {Number} userId 
 * @returns {*}
 */
const get = (userId) => {
  const findUser = users.find((user) => {
    if (user.id === userId) {
      return user;
    }
    return null;
  });
  return findUser;
};

const getAll = () => {
  return users;
};

/**
 * 
 * @param {Object} details 
 * @returns {*}
 */

const insert = (details) => {
  const newUser = { id: users.length + 1,...details };
  users.push(newUser);
  return newUser;
};

/**
 * Delete the user by ID
 * 
 * @param {Number} userId 
 * @returns {*}
 */

const remove = (userId) => {
  const deleteUser = (user, index) => {
    if (user.id === userId) {
      //remove the founded user....
      users.splice(index, 1);
      return true;
    }
  };

  return users.find(deleteUser);
};

/**
 * Update the user by ID
 * 
 * @param {Number} userId 
 * @param {Object} newDetails 
 * @returns {*}
 */
const update = (userId, newDetails) => {
  let existingUser = null;
  let userIndex;
  users.map((user, index) => {
    if (user.id === userId) {
      existingUser = user;
      userIndex = index;
    }
  });
  if (!existingUser) {
    return false;
  }

  const updatedUser = {
    ...existingUser,
    ...newDetails,
  };
  users.splice(userIndex, 1, updatedUser);
  return updatedUser;
};

export default { get, getAll, insert, remove, update };

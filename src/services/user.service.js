import userDao from "../models/persistence/user.dao.js";

/**
 * Get user by ID
 * 
 * @param userId 
 * @returns {*}
 */
const getUser = (userId) => {
  return userDao.get(userId);
};

/**
 * Get All user 
 * 
 * @returns {[]}
 */
const getAllUser = () => {
  return userDao.getAll();
};

/**
 * Add user 
 * 
 * @param {Object} details 
 * @returns {*}
 */
const addUser = (details) => {
  return userDao.insert(details);
};

/**
 * Delete a user by ID
 * 
 * @param {Number} userId 
 * @returns {*}
 */
const removeUser = (userId) => {
  return userDao.remove(userId);
};

/**
 * Update a user by ID
 * 
 * @param {Number} userId 
 * @param {Object} details 
 * @returns {*}
 */
const updateUser = (userId,details) => {
  return userDao.update(userId,details);
};

export default {
    getUser,
    getAllUser,
    updateUser,
    addUser,
    removeUser
}
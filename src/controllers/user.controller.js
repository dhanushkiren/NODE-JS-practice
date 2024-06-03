import { StatusCodes } from "http-status-codes";
import userService from "../services/user.service.js";
import pino from "pino";

const logger = pino();

const STATUS = {
  success: true,
  failure: false,
};

/**
 * @param req
 * @param res
 * @returns
 */
const getAllUser = (req, res) => {
  const users = userService.getAllUser();

  if (users.length) {
    logger.info("getting all users");
    return res.status(StatusCodes.OK).send(users);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    mesasge: "No users found",
  });
};

/**
 * Retrive a user
 * @param {*} req
 * @param {*} res
 * @returns
 */

const getUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUser(id);

  if (user) {
    return res.status(StatusCodes.OK).send(user);
  }

  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    mesasge: `user ${id} does not exist`,
  });
};

/**
 * Add a user
 * @param {*} req
 * @param {*} res
 * @returns
 */

const addUser = (req, res) => {
  const { body: user } = req;
  const addedUser = userService.addUser(user);

  logger.info("creating a user");

  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    user: addedUser,
  });
};

/**
 * update a user
 * @param {*} req
 * @param {*} res
 * @returns
 */

const updateUser = (req, res) => {
  const { body: user } = req;

  const id = parseInt(req.params.id, 10);
  const updatedUser = userService.updateUser(id, user);

  if (updatedUser) {
    logger.info(`updating the user of id ${id}`);
    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      user: updatedUser,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `user ${id} not found`,
    });
  }
};

/**
 * Remove a user
 * @param {*} req
 * @param {*} res
 * @returns
 */

const deleteUser = (req, res) => {
  const { params } = req;
  const id = parseInt(params.id);
  const user = userService.getUser(id);

  if (user) {
    userService.removeUser(id);
    logger.info(`deleting the user of id ${id}`);

    return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: `user ${id} has been removed`,
    });
  } else {
    return res.status(StatusCodes.NOT_FOUND).send({
      status: STATUS.failure,
      message: `user ${id} hasn't been removed`,
    });
  }
};

export default {
  updateUser,
  addUser,
  getAllUser,
  getUser,
  deleteUser,
};

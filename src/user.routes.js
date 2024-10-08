import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from "express-yup-middleware";
import { addUser, updateUser, getUser, deleteUser } from "./user.schemas.js";
import userController from "./controllers/user.controller.js";

const router = express.Router();

router.get("/all", userController.getAllUser);

router.get(
  "/:id",
  expressYupMiddleware({ schemaValidator: getUser }),
  userController.getUser
);

router.post(
  "/",
  expressYupMiddleware({
    schemaValidator: addUser,
    expectedStatusCodes: StatusCodes.BAD_REQUEST,
  }),
  userController.addUser
);

router.put(
  "/update/:id",
  expressYupMiddleware({
    schemaValidator: updateUser,
    expectedStatusCodes: StatusCodes.BAD_REQUEST,
  }),
  userController.updateUser
);

router.delete(
  "/:id",
  expressYupMiddleware({ schemaValidator: deleteUser }),
  userController.removeUser
);

export default router;

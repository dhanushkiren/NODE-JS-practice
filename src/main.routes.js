import express from "express";
import StatusCode from "http-status-codes";

const router = express.Router();

router.get("/ping", (req, res) => {
    res.status(StatusCode.OK);
    res.send("OK DK");
  });

export default router;
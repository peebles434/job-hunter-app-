import { Router } from "express";
var router = Router();

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

export default router;

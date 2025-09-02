import express from "express";
import { getAll, Create, Delete, SpecificNote, Update } from "./Operator.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", SpecificNote);
router.post("/", Create);
router.delete("/:id", Delete);
router.put("/:id", Update);

export default router;

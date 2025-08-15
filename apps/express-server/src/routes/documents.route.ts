import { Router } from "express";
import { AddDocument, archievedDocument, DeleteDocument, GetAllDocument } from "../controllers/documents.controller";

const router: Router = Router();

router.post("/", AddDocument);
router.get("/:userId", GetAllDocument);
router.delete("/", DeleteDocument);
router.put("/archieve", archievedDocument);

export default router;
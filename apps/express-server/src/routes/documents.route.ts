import { Router } from "express";
import { HealthCheck, Server } from "../controllers/server.controller";
import { AddDocument, archievedDocument, DeleteDocument, GetAllDocument } from "../controllers/documents.controller";

const router: Router = Router();

router.post("/", AddDocument);
router.get("/:userId", GetAllDocument);
router.delete("/", DeleteDocument);
router.put("/archieve", archievedDocument);

export default router;
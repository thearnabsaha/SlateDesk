import { Router } from "express";
import { HealthCheck, Server } from "../controllers/server.controller";
import { AddDocument, GetAllDocument } from "../controllers/documents.controller";

const router: Router = Router();

router.post("/", AddDocument);
router.get("/:userId", GetAllDocument);

export default router;
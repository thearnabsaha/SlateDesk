import { Router } from "express";
import { HealthCheck, Server } from "../controllers/server.controller";
import { AddDocument } from "../controllers/documents.controller";

const router: Router = Router();

router.post("/", AddDocument);

export default router;
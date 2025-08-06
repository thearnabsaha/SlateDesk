import { Request, Response } from 'express';
import { DocumentSchema } from '@workspace/utils/types';
import { prisma } from '@workspace/database/client';
import { getAllDescendantIds } from '../utils/getAllDescendantIds';

export const AddDocument = async (req: Request, res: Response) => {
    try {
        const result = DocumentSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json(result.error.format());
        } else {
            const document = await prisma.document.create({
                data: {
                    label: req.body.label,
                    userId: req.body.userId,
                    documentId: req.body.documentId,
                    archieved: false
                }
            })
            res.status(200).json({ "message": `New Document Added with id ${document.id}` })
        }
    } catch (error) {
        res.status(500).json({ "Error": error })
        console.log(error)
    }
}
export const DeleteDocument = async (req: Request, res: Response) => {
    try {
        const document = await prisma.document.delete({
            where: {
                userId: req.body.userId,
                id: req.body.id
            }
        })
        res.status(200).json({ "message": `Document Deleted with id ${document.id}` })
    } catch (error) {
        res.status(500).json({ "Error": error })
        console.log(error)
    }
}
export const archievedDocument = async (req: Request, res: Response) => {
    try {
        const allIds = await getAllDescendantIds(Number(req.body.id), prisma);
        const document = await prisma.document.updateMany({
            where: {
                userId: req.body.userId,
                id: { in: allIds },
            },
            data: {
                archieved: true
            }
        })
        res.status(200).json({ "message": `Document is Archieved ` })
    } catch (error) {
        res.status(500).json({ "Error": error })
        console.log(error)
    }
}
export const GetAllDocument = async (req: Request, res: Response) => {
    try {
        const document = await prisma.document.findMany({
            where: {
                AND: [
                    { userId: req.params.userId },
                    { archieved: false }
                ]
            }
        })
        res.status(200).json({ "message": document })
    } catch (error) {
        res.status(500).json({ "Error": error })
        console.log(error)
    }
}

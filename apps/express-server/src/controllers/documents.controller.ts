import { Request, Response } from 'express';
import { DocumentSchema } from '@workspace/utils/types';
import { prisma } from '@workspace/database/client';

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
                    documentId: req.body.documentId
                }
            })
            res.status(200).json({ "message": `New Document Added with id 1234` })
        }
    } catch (error) {
        res.status(500).json({ "Error": error })
        console.log(error)
    }
}

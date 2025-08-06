// utils/getAllDescendantIds.ts
export const getAllDescendantIds = async (id: number, prisma: any) => {
    const ids: number[] = [];

    const traverse = async (currentId: number) => {
        ids.push(currentId);

        const children = await prisma.document.findMany({
            where: { documentId: currentId },
            select: { id: true },
        });

        for (const child of children) {
            await traverse(child.id); // Recursive call
        }
    };

    await traverse(id);
    return ids;
};

import { FileUploader } from "../../helper/FileUploader";
import { prisma } from "../../../../lib/prisma";
const inserIntoDB = async (req) => {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = await FileUploader.uploadToCloudinary(file);
        req.body.icon = uploadToCloudinary?.secure_url;
    }
    const result = await prisma.specialties.create({
        data: req.body
    });
    return result;
};
const getAllFromDB = async () => {
    return await prisma.specialties.findMany();
};
const deleteFromDB = async (id) => {
    const result = await prisma.specialties.delete({
        where: {
            id,
        },
    });
    return result;
};
export const SpecialtiesService = {
    inserIntoDB,
    getAllFromDB,
    deleteFromDB
};
//# sourceMappingURL=specialties.service.js.map
import type { Request } from "express";
import type { Specialties } from "../../../../generated/prisma/client";
export declare const SpecialtiesService: {
    inserIntoDB: (req: Request) => Promise<{
        id: string;
        title: string;
        icon: string;
    }>;
    getAllFromDB: () => Promise<Specialties[]>;
    deleteFromDB: (id: string) => Promise<Specialties>;
};
//# sourceMappingURL=specialties.service.d.ts.map
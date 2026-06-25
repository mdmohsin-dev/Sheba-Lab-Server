import multer from 'multer';
export declare const FileUploader: {
    upload: multer.Multer;
    uploadToCloudinary: (file: Express.Multer.File) => Promise<void | import("cloudinary").UploadApiResponse>;
};
//# sourceMappingURL=FileUploader.d.ts.map
const { path } = require("express");
const createError = require("http-errors");
const multer = require("multer");

function uploader(
    subfolderPath,
    allowedFileTypes,
    maxFileSize,
    errorMessage
) {
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolderPath}`; // this relative path name may be incorrect
    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalName);
            const fileName =
                file.originalName
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") + "-" + Date.now();
            cb(null, fileName + fileExt);
        }
    });

    // prepare the final multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: maxFileSize
        },
        fileFilter: (req, file, cb) => {
            if (allowedFileTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(errorMessage));
            }
        }
    });

    return upload;
}

module.exports = uploader;
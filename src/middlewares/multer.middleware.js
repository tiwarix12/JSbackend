//expalin middleware
//diskstorage used here
//add to name of filemname in case files with same name is uploaded to server
import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: storage })
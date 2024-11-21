import multer from 'multer';

const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}); 

export const uploadSingle = (req, res, next) => {
    upload.single('cover')(req, res, (err) => {
        if (err) {
            res.status(400).json({message: err.message});
        } else {
            next();
        }
    });
}
const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// ✅ Fix: Typo in variable name (was `fileFiler`, should be `fileFilter`)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // ✅ Accept file
  } else {
    cb(new Error('Only .jpeg, .png, .jpg formats are allowed'), false); // ❌ Reject file
  }
};

// Setup upload with custom storage and file filter
const upload = multer({ storage, fileFilter }); // ✅ fix: use correct `fileFilter`

module.exports = upload;

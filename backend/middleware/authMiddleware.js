const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Not authorized , no token found" }); // ✅ fixed typo: "messae" → "message"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ fixed typo: "JWT_SCECRET" → "JWT_SECRET"
    console.log("✅ Decoded user ID from token:", decoded.id); // 👈 ADD THIS

    req.user = await User.findById(decoded.id).select('-password');
    next();
    console.log("✅ User found:", req.user?._id); // 👈 ADD THIS
  } catch (err) {
    console.error("❌ Token error:", err.message);
    res.status(401).json({ message: "Not authorized , no token found" }); // ✅ fixed typo: "jso" → "json"
  }
}

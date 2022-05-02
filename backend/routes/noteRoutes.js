const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  bookmarkNote,
} = require("../controllers/noteContoller");
const protect = require("../middleware/authMiddelware");

const router = require("express").Router();

// GET all goals
router.get("/", protect, getNotes);

// Create a single goals
router.post("/", protect, createNote);

// GET all goals
router.put("/:id", protect, updateNote);

// GET all goals
router.delete("/:id", protect, deleteNote);

// Bookmark goals
router.post("/:id", protect, bookmarkNote);

module.exports = router;

import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.mjs'; // Import the authentication middleware
import User from '../models/user.mjs';
const router = express.Router();
router.get('/showBookmark', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('bookmark');
        if (!user) {
            return res.status(404).json({ error: true, message: 'User not found' });
        }
        // Return the user's bookmarks

        res.status(200).json({ bookmarks: user.bookmark });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Internal server error' });
    }
})
export default router;
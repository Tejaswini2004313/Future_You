import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.mjs'; // Import the authentication middleware
import User from '../models/user.mjs';

const router = express.Router();

router.post('/addBookmark', authMiddleware, async (req, res) => {
    try {
        // Get the authenticated user's ID from req.user
        const userId = req.user.id;
        console.log(userId);
        const { major, subfield } = req.body;
        // Find the user by ID and update the bookmark array
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: true, message: 'User not found' });
        }

        // Add the new bookmark to the user's bookmark array
        user.bookmark.push({
            major: major,
            subfield: subfield,
        });

        // Save the updated user object
        await user.save();

        // Return a success response
        res.status(200).json({ success: true, message: 'Bookmark added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Internal server error' });
    }
});

export default router;

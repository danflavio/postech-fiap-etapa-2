const router = express.Router();

router.get('/', postsController.getAllPosts);
router.get('/search', postsController.searchPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsConetroller.deletePost);

export default router;
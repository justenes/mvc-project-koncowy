const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const cocktailController = require('../controllers/cocktailController');

router.get('/', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/cocktails');
  } else {
    return res.redirect('/login');
  }
});

router.get('/cocktails', auth, cocktailController.getAllCocktails);
router.get('/add', auth, cocktailController.showAddForm);
router.post('/add', auth, upload.single("image"), cocktailController.addCocktail);
router.get('/edit/:id', auth, cocktailController.showEditForm);
router.put('/edit/:id', auth, upload.single("image"), cocktailController.updateCocktail);
router.delete('/delete/:id', auth, cocktailController.deleteCocktail);
router.get('/category/:category', auth, cocktailController.filterByCategory);

module.exports = router;

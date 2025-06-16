const Cocktail = require('../models/cocktail');

// kokteyl listele
exports.getAllCocktails = async (req, res) => {
  const cocktails = await Cocktail.find().populate('author');
  res.render('index', { cocktails });
};



// yeni tarif formu 
exports.showAddForm = (req, res) => {
  res.render('add');
};

// tarif ekle

exports.addCocktail = async (req, res) => {
  console.log("Formdan gelen veri:", req.body);
  console.log("Yüklenen dosya:", req.file);
  
  const imageName = req.file ? req.file.filename : null;

  await Cocktail.create({
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    category: req.body.category,
    rating: req.body.rating,
    image: imageName,
    author: req.session.userId 
  });

  res.redirect('/');
};


// edit form
exports.showEditForm = async (req, res) => {
  const cocktail = await Cocktail.findById(req.params.id);
  res.render('edit', { cocktail });
};

// update tarif
exports.updateCocktail = async (req, res) => {
  const updatedData = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    category: req.body.category,
    rating: req.body.rating
  };

  if (req.file) {
    updatedData.image = req.file.filename;
  }

  await Cocktail.findByIdAndUpdate(req.params.id, updatedData);
  res.redirect('/');
};


// delete tarif
exports.deleteCocktail = async (req, res) => {
  await Cocktail.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

// filtreleme
exports.filterByCategory = async (req, res) => {
  const cocktails = await Cocktail.find({ category: req.params.category }).populate('author');
  res.render('index', { cocktails });
};

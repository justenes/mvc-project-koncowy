const User = require('../models/user');
const Cocktail = require('../models/cocktail'); //kullanici profili
const bcrypt = require('bcrypt');



// register form
exports.showRegisterForm = (req, res) => {
  res.render('register');
};

// register
exports.register = async (req, res) => {
  console.log("📥 req.body:", req.body);
  console.log("📷 req.file:", req.file);

  const { username, password } = req.body;

  try {
    // kullanici adi kontrolu 
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      console.log("⚠️ Ta nazwa użytkownika jest już zarejestrowana.", existingUser.username);
      return res.render('register', {
        error: 'Ta nazwa użytkownika jest już zarejestrowana. Wybierz inną.'
      });
    }

    const avatar = req.file ? req.file.filename : null;

      //sifre duz halde
    const user = new User({ username, password, avatar });
    await user.save();

    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    console.error("❌ Kayıt hatası:", err.message);

    if (err.code === 11000) {
      return res.render('register', {
        error: 'Ta użytkownika jest już zarejestrowana.'
      });
    }

    res.render('register', {
      error: 'Error, please try again.'
    });
  }
};



exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    const userCocktails = await Cocktail.find({ author: req.session.userId });

    res.render('profile', {
      user,
      cocktails: userCocktails
    });
  } catch (err) {
    console.error("Profil hatası:", err.message);
    res.redirect('/');
  }
};


// 📌 Giriş formunu göster
exports.showLoginForm = (req, res) => {
  res.render('login');
};

// 📌 Giriş işlemi
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.render('login', { error: 'Użytkownik nie został znaleziony' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.render('login', { error: 'Hasło jest nieprawidłowe' });
    }

    req.session.userId = user._id;
    res.redirect('/');
  } catch (err) {
    console.error("❌ Login hatası:", err.message);
    res.render('login', { error: 'Error' });
  }
};



// 📌 Çıkış işlemi
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

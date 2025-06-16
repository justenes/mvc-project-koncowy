###  Kolekcja ulubionych przepisów do koktajli

#  Opis projektu

Aplikacja „Kolekcja ulubionych przepisów do koktajli” została stworzona jako projekt zaliczeniowy z przedmiotu dotyczącego tworzenia aplikacji internetowych z wykorzystaniem Node.js oraz wzorca architektonicznego MVC. Umożliwia użytkownikom tworzenie i przeglądanie przepisów na koktajle oraz zarządzanie swoim profilem.

## ✅ Funkcjonalności

- Rejestracja użytkownika z możliwością dodania awatara
- Logowanie i wylogowywanie
- Dodawanie przepisów koktajlowych (tytuł, opis, składniki, zdjęcie)
- Edytowanie i usuwanie własnych przepisów
- Przeglądanie wszystkich przepisów w galerii
- Strona profilu z listą przepisów danego użytkownika
- Estetyczny interfejs (własne stylowanie CSS)
- Obsługa sesji i autoryzacji

## 🖼️ Zrzuty ekranu

### 🔐 Logowanie
![Logowanie](./public/screens/login.png)

### 📝 Rejestracja
![Rejestracja](./public/screens/register.png)

###  HomePage
![Home_page](./public/screens/homepage1.png)

### 🍹 Koktejle
![koktejle](./public/screens/homepage.png)

### 🍹 Koktejle alkoholowy
![koktejle](./public/screens/alko.png)

### 🍹 Koktejle bezalkoholowy
![koktejle](./public/screens/bezalko.png)

### 🍹 Koktejle owocowy
![koktejle](./public/screens/owoc.png)

### 👤 Profil użytkownika
![Profil](./public/screens/profile1.png)

📥 Przykładowe dane wejściowe
Po zainstalowaniu aplikacji i utworzeniu użytkownika, możesz dodać nowe koktajle. Oto przykładowe dane:

Nazwa: Mojito
Składniki: świeża mięta, Sok z limonki, Cukier trzcinowy lub biały, Woda gazowana, Kostki lodu
Kategoria: bezalkoholowy
Ocena: 3
Instrukcje: W szklance ugnieć liście mięty z cukrem i sokiem z limonki. Dodaj lód, dopełnij wodą gazowaną. Wymieszaj i udekoruj miętą lub plasterkiem limonki.
Na zdrowie! 🥂

📚 Wykorzystane biblioteki zewnętrzne

- express – główny framework serwera
- mongoose – obsługa bazy danych MongoDB
- ejs – silnik szablonów do SSR
- express-session – obsługa sesji i logowania
- bcrypt – szyfrowanie haseł
- multer – obsługa uploadu zdjęć
- dotenv – zmienne środowiskowe z pliku .env
- Method-override - umożliwia użycie metod put i delete w formularzach Html

### Struktura aplikacji

mvc-project-koncowy/
│
├── models/ # Schematy Mongoose (Cocktail, User)
├── routes/ # Trasy (cocktailRoutes.js, userRoutes.js)
├── controllers/ # Logika kontrolerów (cocktailController.js, userController.js)
├── views/ # Widoki EJS (index.ejs, register.ejs, login.ejs, profile.ejs, itd.)
├── public/ # Pliki statyczne (style.css, uploads/, screens/)
├── app.js # Plik główny serwera
└── .env # Zmienne środowiskowe

⚙️ Instalacja i uruchomienie

1. Klonuj repozytorium:

- https://github.com/justenes/mvc-project-koncowy
- cd mvc-projekt-koncowy

2. Zainstaluj zależności:

- npm install
- Skonfiguruj połączenie z MongoDB (możesz użyć lokalnej instancji lub MongoDB Atlas)

3. Utwórz plik .env:
- (Dane dostępowe zawarte w pliku .env zostały przygotowane wyłącznie do celów testowych.
Połączenie z bazą MongoDB (MONGO_URI) działa w trybie testowym i umożliwia zapis oraz edycję danych w ramach konta testowego.)

MONGO_URI=mongodb+srv://deneme:deneme@cluster0.j7wvfuc.mongodb.net/cocktailDB?retryWrites=true&w=majority&appName=Cluster0
SESSION_SECRET=supergizliyanankilit

4. Uruchom aplikację:
- npm start

Aplikacja będzie dostępna pod adresem:

➡️ http://localhost:3000
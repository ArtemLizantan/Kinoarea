//Сервер
var express = require("express"),
  app = express();
app.set("port", 8080);
app.use(express.static(__dirname));
app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port") + "/");
});

const admin = require("firebase-admin");

const serviceAccount = require("../kinoarea-c2393-firebase-adminsdk-g9fyw-bb867b6219.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Получаем доступ к Firestore
const db = admin.firestore();

// Данные для фильмов
const moviesData = [
  {
    title: "Фильм 1",
    description: "Описание фильма 1",
    trailer: "ссылка на трейлер 1",
  },
  {
    title: "Фильм 2",
    description: "Описание фильма 2",
    trailer: "ссылка на трейлер 2",
  },
];

// Функция для загрузки данных в коллекцию movies
async function uploadMoviesData() {
  const batch = db.batch();

  moviesData.forEach((movieData) => {
    const newMovieRef = db.collection("movies").doc(); // Генерируем новый идентификатор документа
    batch.set(newMovieRef, movieData);
  });

  await batch.commit();
  console.log("Данные успешно загружены в коллекцию movies");
}

// Вызываем функцию для загрузки данных
uploadMoviesData()
  .then(() => {
    console.log("Скрипт завершен");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
    process.exit(1);
  });

const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../kinoarea-c2393-firebase-adminsdk-g9fyw-bb867b6219.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Получаем доступ к Firestore
const db = admin.firestore();

// Данные для фильмов и актеров
const movies = require("./data/movies.js");
const actors = require("./data/actors.js");

// Функция для загрузки данных в коллекцию фильмов и добавления актеров к каждому фильму
async function uploadMoviesWithActors() {
  const batch = db.batch();

  // Добавляем фильмы в коллекцию "movies" и добавляем актеров к каждому фильму
  for (const movie of movies) {
    const movieRef = db.collection("movies").doc(movie.title);
    const actorsCollectionRef = movieRef.collection("actors");

    // Добавляем актеров к подколлекции "actors" у каждого фильма
    const actorsInMovie = actors.filter((actor) =>
      actor.movies.includes(movie.title)
    );
    actorsInMovie.forEach((actor) => {
      const actorDocRef = actorsCollectionRef.doc(actor.name);
      batch.set(actorDocRef, actor);
    });

    // Добавляем фильм в коллекцию "movies"
    batch.set(movieRef, movie);
  }

  // Выполняем батч-запрос для добавления фильмов и актеров
  await batch.commit();
  console.log("Фильмы и актеры успешно добавлены в Firestore");
}

// Вызываем функцию для загрузки фильмов с актерами в Firestore
async function main() {
  try {
    await uploadMoviesWithActors();
    console.log("Скрипт завершен");
    process.exit(0);
  } catch (error) {
    console.error("Ошибка при загрузке данных в Firestore:", error);
    process.exit(1);
  }
}

main();

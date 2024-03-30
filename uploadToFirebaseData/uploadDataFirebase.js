const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("../kinoarea-c2393-firebase-adminsdk-g9fyw-bb867b6219.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Получаем доступ к Firestore
const db = admin.firestore();

// Данные для фильмов
const nowInCinemaData = require("./data/nowInCinemaData.js");

// Функция для загрузки данных в коллекцию movies
async function uploadToFirebaseCollections(data, collectionName) {
  const batch = db.batch();

  data.forEach((movieData) => {
    const newMovieRef = db.collection(collectionName).doc(); // Генерируем новый идентификатор документа
    batch.set(newMovieRef, movieData);
  });

  await batch.commit();
  console.log("Данные успешно загружены в коллекцию", collectionName);
}

// Вызываем функцию для загрузки данных
async function main() {
  try {
    await uploadToFirebaseCollections(nowInCinemaData, "nowInCinema");
    console.log("Скрипт завершен");
    process.exit(0);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    process.exit(1);
  }
}

main();

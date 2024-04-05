const actors = [
  {
    name: "Zoe Saldana",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/194024_v9_bb.jpg",
    roles: [{ "Avatar: The Way of Water": "Neytri" }],
    movies: [
      "Guardians of the Galaxy",
      "Avatar: The Way of Water",
      "Star Trek",
    ],
  },
  {
    name: "Sam Worthington",
    img: "https://m.media-amazon.com/images/M/MV5BZWUwNmEwZTUtYzMxMS00ODg5LTlmYjItMGU4ZjNmN2Q1NjkwXkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_.jpg",
    roles: [
      { Avatar: "Jake Sully" },
      { "Avatar: The Way of Water": "Jake Sully" },
    ],
    movies: [
      "Avatar",
      "Avatar: The Way of Water",
      "Clash of the Titans",
      "Terminator Salvation",
    ],
  },
  {
    name: "Sigourney Weaver",
    img: "https://media.themoviedb.org/t/p/w500/wTSnfktNBLd6kwQxgvkqYw6vEon.jpg",
    roles: [
      { Avatar: "Dr. Grace Augustine" },
      { "Avatar: The Way of Water": "Kiri" },
    ],
    movies: ["Alien", "Avatar", "Avatar: The Way of Water", "Ghostbusters"],
  },
  {
    name: "Stephen Lang",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/73978_v9_bb.jpg",
    roles: [
      { Avatar: "Colonel Miles Quaritch" },
      { "Avatar: The Way of Water": "Colonel Miles Quaritch" },
    ],
    movies: [
      "Avatar",
      "Avatar: The Way of Water",
      "Don't Breathe",
      "Tombstone",
    ],
  },
  {
    name: "Kate Winslet",
    img: "https://cdn.britannica.com/38/130638-050-DBCE19EE/Kate-Winslet.jpg",
    roles: [{ "Avatar: The Way of Water": "Ronal" }],
    movies: [
      "Titanic",
      "The Reader",
      "Revolutionary Road",
      "Avatar: The Way of Water",
    ],
  },
  {
    name: "Leonardo DiCaprio",
    img: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
    roles: [{ Inception: "Dom Cobb" }],
    movies: [
      "Inception",
      "Titanic",
      "The Wolf of Wall Street",
      "Once Upon a Time in Hollywood",
    ],
  },
  {
    name: "Jeff Goldblum",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Jeff_Goldblum_by_Gage_Skidmore_3.jpg",
    roles: [{ "Jurassic Park": "Dr. Ian Malcolm" }],
    movies: [
      "Jurassic Park",
      "The Fly",
      "Thor: Ragnarok",
      "The Grand Budapest Hotel",
    ],
  },
  {
    name: "Johnny Depp",
    img: "https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    roles: [
      {
        "Pirates of the Caribbean: The Curse of the Black Pearl":
          "Captain Jack Sparrow",
      },
    ],
    movies: [
      "Pirates of the Caribbean: The Curse of the Black Pearl",
      "Edward Scissorhands",
      "Sweeney Todd: The Demon Barber of Fleet Street",
      "Alice in Wonderland",
    ],
  },
  {
    name: "Ian McKellen",
    img: "https://m.media-amazon.com/images/M/MV5BMTQ2MjgyNjk3MV5BMl5BanBnXkFtZTcwNTA3NTY5Mg@@._V1_.jpg",
    roles: [{ "The Lord of the Rings: The Return of the King": "Gandalf" }],
    movies: [
      "The Lord of the Rings: The Return of the King",
      "The Hobbit: An Unexpected Journey",
      "X-Men",
      "Beauty and the Beast",
    ],
  },
  {
    name: "Jonah Hill",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Hm1TFdONFHdtrRB-gL1awrEAmJ7NvP7ipUhZ9_7VyA&s",
    roles: [{ Superbad: "Seth" }],
    movies: ["Superbad"],
  },
  {
    name: "Michael Cera",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/182528_v9_bb.jpg",
    roles: [{ Superbad: "Evan" }],
    movies: ["Superbad"],
  },
  {
    name: "Bill Murray",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/8327_v9_bc.jpg",
    roles: [{ "The Grand Budapest Hotel": "M. Ivan" }],
    movies: ["The Grand Budapest Hotel"],
  },
  {
    name: "Ralph Fiennes",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/52809_v9_bb.jpg",
    roles: [{ "The Grand Budapest Hotel": "M. Gustave" }],
    movies: ["The Grand Budapest Hotel"],
  },
  {
    name: "Ben Affleck",
    img: "https://cdn.britannica.com/33/242333-050-95A19CE8/Actor-Ben-Affleck-premiere-AIR-March-2023.jpg",
    roles: [{ "Gone Girl": "Nick Dunne" }],
    movies: ["Gone Girl"],
  },
  {
    name: "Rosamund Pike",
    img: "https://www.instyle.com/thmb/5El4v0tDSEO93rTRGWcpkmr_2Oc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/012216-rosamund-pike-bob-lead-7d76d50490c54c9e891aa4a4d32862c2.jpg",
    roles: [{ "Gone Girl": "Amy Dunne" }],
    movies: ["Gone Girl"],
  },
  {
    name: "Neil Patrick Harris",
    img: "https://m.media-amazon.com/images/M/MV5BMTUxNjQ4MjU5Ml5BMl5BanBnXkFtZTcwMTY5NzAzNw@@._V1_.jpg",
    roles: [{ "Gone Girl": "Desi Collins" }],
    movies: ["Gone Girl"],
  },
];

module.exports = actors;

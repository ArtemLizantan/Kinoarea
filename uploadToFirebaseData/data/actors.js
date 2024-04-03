const actors = [
  {
    name: "Tom Hanks",
    img: "https://example.com/tom_hanks.jpg",
    roles: ["Forrest Gump", "Captain John Miller", "Chuck Noland"],
    movies: ["Forrest Gump", "Saving Private Ryan", "Cast Away"],
  },
  {
    name: "Scarlett Johansson",
    img: "https://example.com/scarlett_johansson.jpg",
    roles: ["Black Widow", "Lucy", "Natasha Romanoff"],
    movies: ["Black Widow", "Lucy", "Avengers: Endgame"],
  },
  {
    name: "Meryl Streep",
    img: "https://example.com/meryl_streep.jpg",
    roles: ["Miranda Priestly", "Margaret Thatcher", "Sophie Zawistowski"],
    movies: ["The Devil Wears Prada", "The Iron Lady", "Sophie's Choice"],
  },
  {
    name: "Dwayne Johnson",
    img: "https://example.com/dwayne_johnson.jpg",
    roles: ["The Rock", "Hobbs", "Maui"],
    movies: ["Fast & Furious 9", "Jumanji", "Moana"],
  },
  {
    name: "Robert Downey Jr.",
    img: "https://example.com/robert_downey_jr.jpg",
    roles: ["Iron Man", "Sherlock Holmes", "Tony Stark"],
    movies: ["Iron Man", "Avengers", "Sherlock Holmes"],
  },
  {
    name: "Jennifer Lawrence",
    img: "https://example.com/jennifer_lawrence.jpg",
    roles: ["Katniss Everdeen", "Mystique", "Joy Mangano"],
    movies: ["The Hunger Games", "X-Men", "Joy"],
  },
  {
    name: "Chris Hemsworth",
    img: "https://example.com/chris_hemsworth.jpg",
    roles: ["Thor", "Hunt", "Eric the Huntsman"],
    movies: ["Thor", "Extraction", "Snow White and the Huntsman"],
  },
  {
    name: "Emma Watson",
    img: "https://example.com/emma_watson.jpg",
    roles: ["Hermione Granger", "Belle", "Meg March"],
    movies: ["Harry Potter", "Beauty and the Beast", "Little Women"],
  },
  {
    name: "Ryan Reynolds",
    img: "https://example.com/ryan_reynolds.jpg",
    roles: ["Deadpool", "Van Wilder", "Andrew Paxton"],
    movies: ["Deadpool", "Van Wilder", "The Proposal"],
  },
  {
    name: "Keanu Reeves",
    img: "https://example.com/keanu_reeves.jpg",
    roles: ["Neo", "John Wick", "Ted"],
    movies: [
      "The Matrix Resurrections",
      "John Wick",
      "Bill & Ted's Excellent Adventure",
    ],
  },
  {
    name: "Tom Holland",
    img: "https://example.com/tom_holland.jpg",
    roles: ["Spider-Man", "Nathan Drake", "Billy Elliot"],
    movies: [
      "Spider-Man: No Way Home",
      "Uncharted",
      "Billy Elliot the Musical",
    ],
  },

  {
    name: "Robert Pattinson",
    img: "https://example.com/robert_pattinson.jpg",
    roles: ["Batman", "Edward Cullen", "Neil"],
    movies: ["The Batman", "Twilight", "Tenet"],
  },
  {
    name: "Emily Blunt",
    img: "https://example.com/emily_blunt.jpg",
    roles: ["Lily Houghton", "Rita Vrataski", "Mary Poppins"],
    movies: ["Jungle Cruise", "Edge of Tomorrow", "Mary Poppins Returns"],
  },
  {
    name: "Simu Liu",
    img: "https://example.com/simu_liu.jpg",
    roles: ["Shang-Chi", "Jung Kim", "Tanner"],
    movies: [
      "Shang-Chi and the Legend of the Ten Rings",
      "Kim's Convenience",
      "Tanner Hall",
    ],
  },

  {
    name: "Sam Worthington",
    img: "https://example.com/sam_worthington.jpg",
    roles: ["Jake Sully", "Perseus", "Marcus Wright"],
    movies: [
      "Avatar: The Way of Water",
      "Clash of the Titans",
      "Terminator Salvation",
    ],
  },

  {
    name: "Jesse Eisenberg",
    img: "https://example.com/jesse_eisenberg.jpg",
    roles: ["Mark Zuckerberg", "Simon", "Lex Luthor"],
    movies: ["The Social Network", "Now You See Me", "Batman v Superman"],
  },

  {
    name: "Charlize Theron",
    img: "https://example.com/charlize_theron.jpg",
    roles: ["Furiosa", "Meredith Vickers", "Aileen"],
    movies: ["Mad Max: Fury Road", "Prometheus", "Monster"],
  },

  {
    name: "Emma Stone",
    img: "https://example.com/emma_stone.jpg",
    roles: ["Mia", "Wichita", "Skeeter"],
    movies: ["La La Land", "Zombieland", "The Help"],
  },

  {
    name: "Amy Adams",
    img: "https://example.com/amy_adams.jpg",
    roles: ["Dr. Louise Banks", "Giselle", "Amelia Earhart"],
    movies: [
      "Arrival",
      "Enchanted",
      "Night at the Museum: Battle of the Smithsonian",
    ],
  },
  {
    name: "Ryan Gosling",
    img: "https://example.com/ryan_gosling.jpg",
    roles: ["K", "Sebastian", "Noah"],
    movies: ["Blade Runner 2049", "La La Land", "The Notebook"],
  },
  {
    name: "Harry Styles",
    img: "https://example.com/harry_styles.jpg",
    roles: ["Alex", "Marin", "Jack Malik"],
    movies: ["Dunkirk", "The Little Mermaid", "Yesterday"],
  },
  {
    name: "Daniel Kaluuya",
    img: "https://example.com/daniel_kaluuya.jpg",
    roles: ["Chris Washington", "W'Kabi", "Slim"],
    movies: ["Get Out", "Black Panther", "Queen & Slim"],
  },
  {
    name: "Chadwick Boseman",
    img: "https://example.com/chadwick_boseman.jpg",
    roles: ["T'Challa", "Jackie Robinson", "James Brown"],
    movies: ["Black Panther", "42", "Get on Up"],
  },
  {
    name: "Robert Downey Jr.",
    img: "https://example.com/robert_downey_jr.jpg",
    roles: ["Tony Stark", "Sherlock Holmes", "Kirk Lazarus"],
    movies: ["Avengers: Infinity War", "Sherlock Holmes", "Tropic Thunder"],
  },
  {
    name: "Lady Gaga",
    img: "https://example.com/lady_gaga.jpg",
    roles: ["Ally", "Patrizia Reggiani", "The Countess"],
    movies: ["A Star Is Born", "House of Gucci", "American Horror Story"],
  },
  {
    name: "Tom Cruise",
    img: "https://example.com/tom_cruise.jpg",
    roles: ["Ethan Hunt", "Maverick", "Jerry Maguire"],
    movies: ["Top Gun: Maverick", "Mission: Impossible", "Jerry Maguire"],
  },
  {
    name: "Jennifer Lawrence",
    img: "https://example.com/jennifer_lawrence.jpg",
    roles: ["Katniss Everdeen", "Tiffany Maxwell", "Mystique"],
    movies: [
      "The Hunger Games",
      "Silver Linings Playbook",
      "X-Men: First Class",
    ],
  },
  {
    name: "Chris Hemsworth",
    img: "https://example.com/chris_hemsworth.jpg",
    roles: ["Thor", "Hunt", "James Hunt"],
    movies: ["Thor: Love and Thunder", "Blackhat", "Rush"],
  },
  {
    name: "Emma Watson",
    img: "https://example.com/emma_watson.jpg",
    roles: ["Hermione Granger", "Belle", "Meg March"],
    movies: [
      "Harry Potter and the Deathly Hallows: Part 2",
      "Beauty and the Beast",
      "Little Women",
    ],
  },

  {
    name: "Sandra Bullock",
    img: "https://example.com/sandra_bullock.jpg",
    roles: ["Leigh Anne Tuohy", "Gracie Hart", "Dr. Ryan Stone"],
    movies: ["The Blind Side", "Miss Congeniality", "Gravity"],
  },
  {
    name: "Johnny Depp",
    img: "https://example.com/johnny_depp.jpg",
    roles: ["Captain Jack Sparrow", "Edward Scissorhands", "Mad Hatter"],
    movies: [
      "Pirates of the Caribbean",
      "Edward Scissorhands",
      "Alice in Wonderland",
    ],
  },
  {
    name: "Jennifer Aniston",
    img: "https://example.com/jennifer_aniston.jpg",
    roles: ["Rachel Green", "Brooke", "Dr. Julia Harris"],
    movies: ["Friends", "The Break-Up", "Horrible Bosses"],
  },
  {
    name: "Will Smith",
    img: "https://example.com/will_smith.jpg",
    roles: ["Agent J", "Chris Gardner", "Hancock"],
    movies: ["Men in Black", "The Pursuit of Happyness", "Hancock"],
  },
  {
    name: "Anne Hathaway",
    img: "https://example.com/anne_hathaway.jpg",
    roles: ["Mia Thermopolis", "Selina Kyle", "Fantine"],
    movies: ["The Princess Diaries", "The Dark Knight Rises", "Les Misérables"],
  },
  {
    name: "Julia Roberts",
    img: "https://example.com/julia_roberts.jpg",
    roles: ["Vivian Ward", "Erin Brockovich", "Anna Scott"],
    movies: ["Pretty Woman", "Erin Brockovich", "Notting Hill"],
  },
  {
    name: "Matthew McConaughey",
    img: "https://example.com/matthew_mcconaughey.jpg",
    roles: ["Ron Woodroof", "Rusty Cohle", "Cooper"],
    movies: ["Dallas Buyers Club", "True Detective", "Interstellar"],
  },
  {
    name: "Ben Affleck",
    img: "https://example.com/ben_affleck.jpg",
    roles: ["Batman", "Tony Mendez", "Holden McNeil"],
    movies: ["Justice League", "Argo", "Chasing Amy"],
  },
  {
    name: "Natalie Portman",
    img: "https://example.com/natalie_portman.jpg",
    roles: ["Padmé Amidala", "Nina Sayers", "Jane Foster"],
    movies: ["Star Wars", "Black Swan", "Thor"],
  },
  {
    name: "Eddie Murphy",
    img: "https://example.com/eddie_murphy.jpg",
    roles: ["Axel Foley", "Donkey", "Prince Akeem"],
    movies: ["Beverly Hills Cop", "Shrek", "Coming to America"],
  },
  {
    name: "George Clooney",
    img: "https://example.com/george_clooney.jpg",
    roles: ["Danny Ocean", "Ryan Bingham", "Doug Ross"],
    movies: ["Ocean's Eleven", "Up in the Air", "ER"],
  },
  {
    name: "Brad Pitt",
    img: "https://example.com/brad_pitt.jpg",
    roles: ["Tyler Durden", "Billy Beane", "Rusty Ryan"],
    movies: ["Fight Club", "Moneyball", "Ocean's Eleven"],
  },
  {
    name: "Tom Hiddleston",
    img: "https://example.com/tom_hiddleston.jpg",
    roles: ["Loki", "Jonathan Pine", "Hank Williams"],
    movies: ["Thor", "The Night Manager", "I Saw the Light"],
  },
  {
    name: "Idris Elba",
    img: "https://example.com/idris_elba.jpg",
    roles: ["Heimdall", "Stringer Bell", "Nelson Mandela"],
    movies: ["Thor", "The Wire", "Mandela: Long Walk to Freedom"],
  },
  {
    name: "Hugh Jackman",
    img: "https://example.com/hugh_jackman.jpg",
    roles: ["Wolverine", "Jean Valjean", "P.T. Barnum"],
    movies: ["X-Men", "Les Misérables", "The Greatest Showman"],
  },
  {
    name: "Christian Bale",
    img: "https://example.com/christian_bale.jpg",
    roles: ["Bruce Wayne / Batman", "Patrick Bateman", "Irving Rosenfeld"],
    movies: ["The Dark Knight Trilogy", "American Psycho", "American Hustle"],
  },
  {
    name: "Chris Pratt",
    img: "https://example.com/chris_pratt.jpg",
    roles: ["Star-Lord", "Andy Dwyer", "Owen Grady"],
    movies: [
      "Guardians of the Galaxy",
      "Parks and Recreation",
      "Jurassic World",
    ],
  },
  {
    name: "Margot Robbie",
    img: "https://example.com/margot_robbie.jpg",
    roles: ["Harley Quinn", "Tonya Harding", "Jane Porter"],
    movies: ["Suicide Squad", "I, Tonya", "The Legend of Tarzan"],
  },
  {
    name: "Chris Pine",
    img: "https://example.com/chris_pine.jpg",
    roles: ["Steve Trevor", "James Kirk", "Toby Howard"],
    movies: ["Wonder Woman", "Star Trek", "Hell or High Water"],
  },
  {
    name: "Gal Gadot",
    img: "https://example.com/gal_gadot.jpg",
    roles: ["Diana Prince / Wonder Woman", "Gisele Yashar", "Shank"],
    movies: ["Wonder Woman", "Fast & Furious", "Ralph Breaks the Internet"],
  },
  {
    name: "Zoe Saldana",
    img: "https://example.com/zoe_saldana.jpg",
    roles: ["Gamora", "Neytiri", "Uhura"],
    movies: ["Guardians of the Galaxy", "Avatar", "Star Trek"],
  },
  {
    name: "Chris Evans",
    img: "https://example.com/chris_evans.jpg",
    roles: ["Captain America", "Human Torch", "Curtis"],
    movies: ["Captain America", "Fantastic Four", "Snowpiercer"],
  },

  {
    name: "Tom Hardy",
    img: "https://example.com/tom_hardy.jpg",
    roles: ["Eddie Brock", "Bane", "Max Rockatansky"],
    movies: [
      "Venom: Let There Be Carnage",
      "The Dark Knight Rises",
      "Mad Max: Fury Road",
    ],
  },
  {
    name: "Vin Diesel",
    img: "https://example.com/vin_diesel.jpg",
    roles: ["Dominic Toretto", "Groot", "Riddick"],
    movies: ["Fast & Furious 9", "Guardians of the Galaxy", "Pitch Black"],
  },

  {
    name: "Leonardo DiCaprio",
    img: "https://example.com/leonardo_dicaprio.jpg",
    roles: ["Cobb", "Jordan Belfort", "Jack Dawson"],
    movies: ["Inception", "The Wolf of Wall Street", "Titanic"],
  },

  {
    name: "Daniel Radcliffe",
    img: "https://example.com/daniel_radcliffe.jpg",
    roles: ["Harry Potter", "Igor", "Allen Ginsberg"],
    movies: [
      "Harry Potter and the Deathly Hallows: Part 1",
      "Victor Frankenstein",
      "Kill Your Darlings",
    ],
  },

  {
    name: "Matt Damon",
    img: "https://example.com/matt_damon.jpg",
    roles: ["Mark Watney", "Jason Bourne", "Will Hunting"],
    movies: ["The Martian", "Jason Bourne", "Good Will Hunting"],
  },
  {
    name: "Amy Poehler",
    img: "https://example.com/amy_poehler.jpg",
    roles: ["Joy", "Joyce Brewster", "Leslie Knope"],
    movies: ["Inside Out", "Sisters", "Parks and Recreation"],
  },

  {
    name: "Ginnifer Goodwin",
    img: "https://example.com/ginnifer_goodwin.jpg",
    roles: ["Judy Hopps", "Margene Heffman", "Snow White"],
    movies: ["Zootopia", "Big Love", "Snow White and the Seven Dwarfs"],
  },
];

module.exports = actors;

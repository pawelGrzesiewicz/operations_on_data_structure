const disneyMovies = [
    {
        title: "The Lion King",
        releaseYear: 1994,
        duration: 88,
        mainCharacters: ["Simba", "Mufasa", "Scar", "Nala"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 2,
            otherAwards: 5,
        },
    },
    {
        title: "Beauty and the Beast",
        releaseYear: 1991,
        duration: 84,
        mainCharacters: ["Belle", "Beast", "Gaston", "Lumière"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 2,
            otherAwards: 6,
        },
    },
    {
        title: "Aladdin",
        releaseYear: 1992,
        duration: 90,
        mainCharacters: ["Aladdin", "Jasmine", "Genie", "Jafar"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 1,
            otherAwards: 4,
        },
    },
    {
        title: "101 Dalmatynczyków",
        releaseYear: 1961,
        duration: 79,
        mainCharacters: ["Pongo", "Perdita", "Cruella de Vil"],
        awardsInfo: {
            academyAwards: 1,
            goldenGlobes: 0,
            otherAwards: 1,
        },
    },
    {
        title: "Cinderella",
        releaseYear: 1950,
        duration: 74,
        mainCharacters: ["Cinderella", "Prince Charming", "Fairy Godmother"],
        awardsInfo: {
            academyAwards: 3,
            goldenGlobes: 0,
            otherAwards: 2,
        },
    },
    {
        title: "Moana",
        releaseYear: 2016,
        duration: 107,
        mainCharacters: ["Moana", "Maui", "Tala", "Heihei"],
        awardsInfo: {
            academyAwards: 0,
            goldenGlobes: 1,
            otherAwards: 3,
        },
    },
    {
        title: "The Little Mermaid",
        releaseYear: 1989,
        duration: 83,
        mainCharacters: ["Ariel", "Prince Eric", "Ursula", "Sebastian"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 0,
            otherAwards: 3,
        },
    },
    {
        title: "Toy Story",
        releaseYear: 1995,
        duration: 81,
        mainCharacters: ["Woody", "Buzz Lightyear", "Jessie", "Rex"],
        awardsInfo: {
            academyAwards: 0,
            goldenGlobes: 1,
            otherAwards: 6,
        },
    },
    {
        title: "Pocahontas",
        releaseYear: 1995,
        duration: 81,
        mainCharacters: ["Pocahontas", "John Smith", "Meeko"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 1,
            otherAwards: 1,
        },
    },
    {
        title: "Zootopia",
        releaseYear: 2016,
        duration: 108,
        mainCharacters: [
            "Judy Hopps",
            "Nick Wilde",
            "Chief Bogo",
            "Mayor Lionheart",
        ],
        awardsInfo: {
            academyAwards: 1,
            goldenGlobes: 1,
            otherAwards: 4,
        },
    },
];


//1. Ile dni temu miała premiere najstarsza bajka?

const findOldestMovie = (disneyMovies) => {

    const oldestMovie = disneyMovies.reduce((oldest, movie) => (movie.releaseYear < oldest.releaseYear ? movie : oldest), disneyMovies[0]);
    return (oldestMovie.releaseYear - new Date().getFullYear());
};

console.log(findOldestMovie(disneyMovies));


//2. Czy wszystkie filmy otzrymały jakąkolwiek nagrodę?

function anyAwards (Movies) {
    return Movies.some((movie) =>
            movie.awardsInfo.academyAwards > 0 ||
            movie.awardsInfo.goldenGlobes > 0 ||
            movie.awardsInfo.otherAwards > 0
        ) ? 'wszsytkie filmy otrzymały jakąs nagrodę ' : 'nie wszystkie fily otrzymały nagrody'
}

const result = anyAwards(disneyMovies)
console.log(result);



//3. Jaka litera powtarza się najczęściej w imionach główncyh bohaterów?

const mainCharacters = disneyMovies
    .map((movie) => movie.mainCharacters)
    .flat()
    .map((character) => character.split(' ')[0])
    .join('')
    .toLowerCase();

const letterCounts = {};

for (let i =0; i < mainCharacters.length; i++) {
    const letter =mainCharacters[i];
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
}

let mostFrequentLetter = '';
let maxCount = 0;

for (const letter in letterCounts) {
    if (letterCounts[letter] > maxCount) {
        mostFrequentLetter =letter;
        maxCount = letterCounts[letter];
    }
}

console.log(`Najczęściej występująca litera to: ${mostFrequentLetter}, wystąpiła ${maxCount} razy.`);

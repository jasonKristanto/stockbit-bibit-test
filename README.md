# Stockbit Bibit Test

Here is repository to keep my solutions of the test problems. You can run these commands to run the solutions and see if the solutions match the expected solutions.

To run and use this repo, here are the steps you can do.

1. Clone this repo
   
2. Install the dependencies

```bash
npm install
```

---

## Find First String in Bracket Refactor Problem

Run this command to see the results of this function after refactoring.

```bash
npm run find-words

/*or*/

node ./src/refactor-code/sandbox
```

For adding additional test case, you can directly do it in the sandbox files in the refactor-code directory. Here is the example of the command to use to add the additional test case.

```js
testString = '(tested string) tested string';
validateRefactorSolution(testString);
```

---

## Anagram Problem

Run this command to see the results of this anagram function.

```bash
npm run anagram

/*or*/

node ./src/anagram/sandbox
```

For adding additional test case, you can directly do it in the sandbox files in the anagram directory. Here is the example of the command to use to add the additional test case.

```js
testArray = ['string', 'string', 'string', 'string'];
console.log(anagram(testArray));
```

---

## Movie API

This is a simple movie api project that built with Node.js, express.js, mySQL and OMDb API. To start using this API, you must do these following steps.

1. Copy the .env.example files into .env and fill the respective field with your device environment.
   
2. If you don't have any databases and tables which are needed, you can run these commands.

```bash
/*Database for development environment*/
npm run db-movie-api

/*Database for testing environment*/
npm run db-movie-api-test
```

3. For testing needed, you can run this command.

```bash
npm run movie-api-test
```

4. To run the movie api server, you can run this command and hit the available endpoint.

```bash
npm run movie-api
```

### API Documentation

#### Search endpoint

**Method**: `GET`

**Endpoint**: `/movie/search`

**Available fields**:

| Field Name | Field Type | Mandatory | Default Value |
|---|---|---|---|
| title | String | Yes | - |
| type | String. accept 'movie', 'series', 'episode' | No | - |
| year | Number | No | - |
| page | Number (between 1 to 100) | No | 1 |

**Url query param example**:

`/movie/search?title=batman&page=1&year=2016&type=movie`

**Success response**:
```json
{
  "message": "Movies found",
  "data": {
    "Search": [
      {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: The Killing Joke",
        "Year": "2016",
        "imdbID": "tt4853102",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Bad Blood",
        "Year": "2016",
        "imdbID": "tt4870838",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWZiZmZhYmQtYjVkZi00MWIzLWEzM2MtYzhkNjliNzc2MTMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Return of the Caped Crusaders",
        "Year": "2016",
        "imdbID": "tt5973626",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdlNjNhOGEtZTk2Yy00MjI5LTllOTMtODczMWFmNmNhZmVlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Batman Unlimited: Mechs vs. Mutants",
        "Year": "2016",
        "imdbID": "tt5896146",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWVhZTNmZTQtZTgwYS00YWE5LThjMjktMjFkNjEwYzdkODA2XkEyXkFqcGdeQXVyNDM1NDAyNDk@._V1_SX300.jpg"
      },
      {
        "Title": "Batman V Arrow",
        "Year": "2016",
        "imdbID": "tt5479456",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2UzYzQwNzctMzc2MC00MDk2LTljZjgtMGE3NDdiYmY5MzFiXkEyXkFqcGdeQXVyNDk4MzA4Mjk@._V1_SX300.jpg"
      },
      {
        "Title": "Superman Meets Batman",
        "Year": "2016",
        "imdbID": "tt5241796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwZTQ2NGMtYmFkMC00ZWRmLWE2Y2YtOGMyYTcyMzVhNzgzXkEyXkFqcGdeQXVyMjU3NTcwNTI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Dante",
        "Year": "2016",
        "imdbID": "tt5845956",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjVkODhlNjUtNTY1MC00Yjg0LTkyOTUtZGJlOWQ1Yzg1Y2ZiXkEyXkFqcGdeQXVyMTg1MTc3MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Bond P Batman",
        "Year": "2016",
        "imdbID": "tt13428368",
        "Type": "movie",
        "Poster": "N/A"
      },
      {
        "Title": "Batman: Austerity & Rage",
        "Year": "2016",
        "imdbID": "tt5916948",
        "Type": "movie",
        "Poster": "N/A"
      }
    ],
    "totalResults": "37",
    "Response": "True"
  }
}
```

#### Detail endpoint

**Method**: `GET`

**Endpoint**: `/movie/detail`

**Available fields**:

| Field Name | Field Type | Mandatory | Default Value |
|---|---|---|---|
| imdb | String | Yes* | - |
| title | String | Yes* | - |
| type | String. accept 'movie', 'series', 'episode' | No | - |
| year | Number | No | - |
| plot | String. accept 'full', 'short' | No | short |

**Note**: at least either field imdb or title is required on the field

**Url query param example**:

```
/movie/detail?title=Batman&year=2016&plot=full

/*or*/

/movie/detail?imdb=tt2975590&year=2016&plot=full
```

**Success response**:
```json
{
  "message": "Movies found",
  "data": {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "Rated": "PG-13",
    "Released": "25 Mar 2016",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Zack Snyder",
    "Writer": "Chris Terrio, David S. Goyer, Bob Kane",
    "Actors": "Ben Affleck, Henry Cavill, Amy Adams",
    "Plot": "The general public is concerned over having Superman on their planet and letting the \"Dark Knight\" - Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack Superman. Meanwhile, Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and millionaire, tries to use his own advantages to fight the \"Man of Steel\".",
    "Language": "English",
    "Country": "United States",
    "Awards": "14 wins & 33 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "29%"
      },
      {
        "Source": "Metacritic",
        "Value": "44/100"
      }
    ],
    "Metascore": "44",
    "imdbRating": "6.4",
    "imdbVotes": "652,634",
    "imdbID": "tt2975590",
    "Type": "movie",
    "DVD": "25 Nov 2016",
    "BoxOffice": "$330,360,194",
    "Production": "Cruel and Unusual, Warner Bros., Syncopy, Atlas Entertainment, DC Entertainment",
    "Website": "N/A",
    "Response": "True"
  }
}
```

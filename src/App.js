import React, { useState } from 'react';
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "King Arthur: Legend of the Sword",
      description:
        "When the child Arthur’s father is murdered, Vortigern, Arthur’s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Excalibur from the stone, his life is turned upside down and he is forced to acknowledge his true legacy... whether he likes it or not.",
      posterURL: '../images/king Authur.jpg',
      rating: 7.1,
    },

    {
      title: "Venom",
      description:
        "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
      posterURL: "../images/venom.jpg",
      rating: 7.0,
    },

    {
      title: "Black Adam",
      description:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      posterURL: "../images/black adam.jpg",
      rating: 8.1,
    },

    {
      title: "Spider-Man: Into the Spider-Verse",
      description:
        "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
      posterURL: "../images/spiderman.jpg",
      rating: 6.2,
    },

    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, filterValue) => {
    let filtered = movies;

    if (filterType === 'title') {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'rating') {
      filtered = movies.filter((movie) => movie.rating >= filterValue);
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
    });
  };

  return (
    <div className="app" style={{textAlign: "left" }}>
      <h1>My Movie App</h1>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />

      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Poster URL:
          <input
            type="text"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default App;

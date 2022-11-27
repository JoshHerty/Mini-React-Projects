import { FormEvent, useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./CreateStoryRoute.css";
import Header from "./Header";

const CreateStoryRoute = () => {
  const { addStory } = useContext(StoriesContext);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [person, setPerson] = useState("");
  const [sillyWord, setSillyWord] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [brandTagline, setBrandTagline] = useState("");

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
    const story: Story = {
      author: author,
      word1: place,
      word2: person,
      word3: sillyWord,
      word4: occupation,
      word5: number,
      word6: brandTagline,
    };
    addStory(story);
    // console.log(story);
    setAuthor("");
    setPlace("");
    setPerson("");
    setSillyWord("");
    setOccupation("");
    setNumber("");
    setBrandTagline("");
  };

  return (
    <div className="CreateStoryRoute">
      <Header />
      <form onSubmit={formHandler}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="place">Place</label>
        <input
          type="text"
          name="place"
          id="place"
          required
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <label htmlFor="person">Person</label>
        <input
          type="text"
          name="person"
          id="person"
          required
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <label htmlFor="silly-word">Silly Word</label>
        <input
          type="text"
          name="silly-word"
          id="silly-word"
          required
          value={sillyWord}
          onChange={(e) => setSillyWord(e.target.value)}
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          required
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="brand-tagline">Brand Tagline</label>
        <input
          type="text"
          name="brand-tagline"
          id="brand-tagline"
          required
          value={brandTagline}
          onChange={(e) => setBrandTagline(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateStoryRoute;

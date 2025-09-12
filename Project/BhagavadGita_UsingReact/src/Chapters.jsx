import { useEffect, useState, useTransition } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import './Chapters.css';

export default function Chapter() {

  const { id } = useParams();
  const [data, setData] = useState({});
  const [verses, setVerses] = useState([]);
  const [loadingVerses, setLoadingVerses] = useState(false);

  // Fetch chapter info
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
              "x-rapidapi-key": import.meta.env.VITE_KEY,
            },
          }
        );

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();

  }, [id]);

  // Fetch verses for the chapter
  useEffect(() => {
    const fetchVerses = async () => {
      setLoadingVerses(true);
      try {
        const res = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "fbc168ee83mshb6d15e5b489a4d1p16ac9fjsn5316d1644539",
              "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
            },
          }
        );

        const result = await res.json();
        // Ensure verses is always an array
        setVerses(Array.isArray(result) ? result : result.verses || []);
      } catch (error) {
        console.error("Error fetching verses:", error);
        setVerses([]);
      } finally {
        setLoadingVerses(false);
      }
    };

    fetchVerses();
  }, [id]);

  if (loadingVerses) return <Loader />;

  return (
    <>
      {/* Chapter Info */}
      <section className="chapter-header">
        <div className="chapter-number">Chapter {data?.chapter_number}</div>
        <h1 className="chapter-title">{data?.name_translated}</h1>
        <p className="chapter-summary">{data?.chapter_summary}</p>
      </section>

      {/* Search & Verse Count */}
      <section className="verse-controls">
        <h3>{data?.verses_count} verses</h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Go To Verse"
            className="search-input"
          />
          <button className="search-btn" style={{marginRight:"20px"}}>
            <i className="fa-solid fa-sort"></i> Sort
          </button>
        </div>
      </section>

      {/* Verses */}
      
      <section className="verses-list">
        {verses.length === 0 && (
          <div className="no-verses">No verses found for this chapter.</div>
        )}
        <div className="verses">

        {verses.map((verse) => (
          <Link to={`/Verse/${id}/${verse.verse_number}`} id="link">
  <div key={verse.id} className="verse-card">
    <h4 className="verse-number">VERSE {verse.verse_number}</h4>  
    <p className="verse-text">
      {verse.translations?.find(t => t.language === "english")?.description 
        || "No translation available"}
    </p>
  </div>
        </Link>
))}

        </div>
      </section>
    </>
  );
}

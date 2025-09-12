import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Verses.css"

function Verses() {
  const { id, id2 } = useParams();
  const [verse, setVerse] = useState({});
  const [loadingVerses, setLoadingVerses] = useState(false);

  useEffect(() => {
    const fetchVerse = async () => {
      setLoadingVerses(true);
      try {
        const res = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${id2}/`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
              "x-rapidapi-key": import.meta.env.VITE_KEY,
            },
          }
        );

        const json = await res.json();
        setVerse(json);
      } catch (error) {
        console.error("Error fetching verse:", error);
        setVerse({});
      } finally {
        setLoadingVerses(false);
      }
    };

    fetchVerse();
  }, [id, id2]);

  if (loadingVerses) return <Loader />;
  if (!verse) return <p>No verse found.</p>;

  // Pick the first translation (usually English)
  const englishTranslation = verse.translations?.find(
    (t) => t.language === "english"
  );

  // Pick the first commentary (if available)
  const firstCommentary = verse.commentaries?.[0];

  return (
    <div className="verse-container max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mb-8">
      {/* Heading */}
      <h2 className="v-number">
        BG {verse.chapter_number}.{verse.verse_number}
      </h2>

      {/* Sanskrit */}
      <p className="v-text">
       
        {verse.text}
       
      </p>

      {/* Transliteration */}
      <p className="v-transliteration">{verse.transliteration}</p>

      {/* Word by Word */}
      <p className="v-wordMeanigs">{verse.word_meanings}</p>

      {/* Translation */}
      <h3 className="translation">Translation</h3>
      <p className="v-description">
        {englishTranslation?.description || "No translation available."}
      </p>

      {/* Commentary */}
      <h3 className="commentary">Commentary</h3>
      <p className="v-commentary">
        {firstCommentary?.description || "No commentary available."}
      </p>
    </div>
  );
}

export default Verses;

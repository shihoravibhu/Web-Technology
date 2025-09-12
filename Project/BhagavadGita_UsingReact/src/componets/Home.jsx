import React, { useState, useEffect , useTransition} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Loader from "../Loader";

function Home() {

  const [data, setData] = useState([]);  

  const [loadingVerses, setLoadingVerses] = useState(false);  
  
  const apiUrl =
  "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
  
  useEffect(() => {
    
    const fetchChapters = async () => {
      
      setLoadingVerses(true);
      
      try {
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
            "x-rapidapi-key": import.meta.env.VITE_KEY, 
          },
        });
        
        const json = await res.json();
        setData(json); 
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
      finally {
        setLoadingVerses(false);
      }
    };
    
    fetchChapters();
  }, []);
  
  if (loadingVerses) return <Loader />;
  
  return (
    <>
      {/* Hero Image */}
      <div className="img-div">
   
        <img src="img/i1_home.webp" alt="Bhagavad Gita" />
        <div className="txt">
          <h2>Experience the Gita</h2>
          <h2>
            <span>Anywhere, Anytime</span>
          </h2>
          <Link to="/Chapter/1" className="btn btn-light">
            
            Read Now
            
          </Link>
        </div>
      </div>

      {/* Background Section */}
      <div className="bgcol"></div>

      {/* Verse of the Day */}
      <div className="container verse-section bg-light mt-5 rounded-3 shadow-lg p-3">
        <div className="verse-heading">Verse of the day - BG 6.2</div>
        <div className="verse-text">
          Do you, O Arjuna, know that Yoga is what they call renunciation; no
          one indeed becomes a Yogi who has not renounced their thoughts.
        </div>
        <a href="#" className="see-more fs-6">
          See More
        </a>
      </div>

      {/* Shloka Subscription */}
     <div className="shloka text-center my-5">
  <h2 className="mb-4">
    Have the Shloka of the Day delivered to your inbox each morning
  </h2>

  <div className="search">
    <div className="row g-3 justify-content-center">
      {/* Name Input */}
      <div className="col-12 col-sm-6 col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
        />
      </div>

      {/* Email Input */}
      <div className="col-12 col-sm-6 col-md-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
        />
      </div>

      {/* Subscribe Button */}
      <div className="col-12 col-sm-6 col-md-2">
        <button type="button" className="btn btn-outline-success w-100">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Chapters List */}
      <div className="container my-4">
        <div className="row chapters">
          {data && data.length > 0 ? (
            data.map((ch) => (
                //what is key (in atribute)? =>  React can match the old element with the new element.Only the changed elements are updated, improving performance.
             <div className="col-md-6 mb-4" key={ch.id}>  
                 <Link to={"/Chapter/"+ch.id} id="link">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title text-warning">
                      Chapter {ch.chapter_number}
                    </h6>
                    <h5 className="card-subtitle mb-2" id="chapterName">
                      {ch.name_transliterated}
                    </h5>
                    <p className="card-text">
                    {ch.chapter_summary?.length > 250
                        ? ch.chapter_summary.slice(0, 250) + '...'
                        : ch.chapter_summary || "no summary avialable"}
                    </p>
                    <h6>
                      <i className="bi bi-list-ul me-1"></i> {ch.verses_count} Verses
                    </h6>
                  </div>
                </div>
                </Link>   
              </div>
            ))
          ) : (
            <div className="text-center">Loading chapters...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

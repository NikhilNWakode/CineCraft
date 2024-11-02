import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import CineCraftLogo from "./logoplay";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const searchRef = useRef();
  const inputRef = useRef()


  useEffect(()=>{
    if(query.length == 0){
      setTimeout(function(){
        inputRef.current.style.display ='none';
      }, 200)
    }
    else {
      setTimeout(function(){
        inputRef.current.style.display = 'block';
      }, 200)
    };
  }, [query])

  //console.log(query);
  const GetSearches = async () => {
    if (query.trim() === "") {
      setSearches([]); // Do nothing if query is empty
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
     // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    
    <div className=" w-full h-[10vh] pr-10 pl-5  flex relative  justify-between  items-center ">
      <CineCraftLogo />
     <div  className="flex flex-row-reverse items-center w-[80%]">
     

     <div 
      ref={searchRef} 
      onMouseOver={()=>{
        inputRef.current.style.width = "100%"
        setTimeout(function(){
          inputRef.current.style.display = "block"
        }, 200)
      }}
      onMouseOut={()=>{
        if(query.length == 0){
          inputRef.current.style.width = "0"
          setTimeout(function(){
            inputRef.current.style.display = "none"
          },200)
        }
      }}
      className={`${query.length>0? "w-full": "w-6"} transition-all duration-1000 hover:w-full border-b border-b-zinc-200 flex flex-row justify-between p-0 hover:border-b-zinc-200`}>
      <div>
          {query.length > 0 && (
            <i
              onClick={() => setQuery("")}
              className="ri-close-fill text-zinc-400   text-2xl "
            ></i>
          )}
        </div>
        <input
          ref={inputRef}
          type="text"
          className={`hidden w-0 ${query.length<50 ? "text-xl" : " block text-sm break-words text-wrap"} placeholder-zinc-400 text-zinc-200 outline-none border-none bg-transparent ml-4 `}
          placeholder=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      
      <i className="ri-search-line text-zinc-400 text-2xl"></i>

     </div>
     </div>

      <div className={`${query.length>0? "block": "hidden"} absolute topnav rounded-sm md:w-[65%] lg:w-[60%] xl:w-[50%] sm:w-[65%] w-[80%] max-h-[50vh] top-[100%] right-[0px] border-b-2 border-zinc-400 overflow-auto scroll-smooth`}>
        {searches.length === 0 && query.length>0 && (
          <>
          <div className="text-zinc-400 text-2xl hover:text-zinc-800 bg-black hover:bg-zinc-400 duration-300 font-semibold  w-[100%] h-24 flex justify-center items-center ">Opps ! No results Found</div>
          </>
        )}
        {searches.map((s, i) => (
            <Link
              key={i}
              className="  text-zinc-400 hover:text-zinc-800 bg-black hover:bg-zinc-400 duration-300 font-semibold  w-[100%] h-24  flex justify-start items-center border-b-2 border-zinc-600"
            >
              <img
                src={s.backdrop_path || s.profile_path || s.poster_path ?
                    `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}` 
                    : `src/assets/image_not_available.png`}
                alt="Data Image"
                className="w-3/12 object-center object-cover shadow-lg shadow-slate-900 h-full rounded-sm mr-5 box-border border-2 border-zinc-400"
              />
              <div className="flex flex-col  gap-1">
                <h1 className="text-xl  font-bold">{s.name || s.orginal_name || s.title || s.original_title}</h1>
                <p className="text-sm  ">{ s.first_air_date || s.
release_date
}</p>
                
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;

import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav"
import Topnav from "./templates/Topnav"
import axios from "../utils/axios"
import Header from "./templates/header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import MovieFact from "./templates/MoviePsychFacts";
import Loader from "./templates/Loader";

const Home = () => {
    document.title = "Cinecraft | HomePage";
   
  const [wallpaper,setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category,setCategory] = useState("all");
  const [isLoading,setIsLoading] = useState(true);




  const getHeaderWallpaper = async () => {
    try {
      const { data } = await  axios.get(`/trending/all/day`);
      const trend = data.results[(Math.random() * data.results.length).toFixed()]
       setWallpaper(trend);
      
    }catch(error){
      console.log(error)
    }
  }
  const getTrending = async () => {
    try {
      const { data} = await  axios.get(`/trending/${category}/day`);
       setTrending(data.results);   
      
      }catch(error){
      console.log(error)
    }
  }



  useEffect(() => {
   getTrending();
   setTimeout(()=> {
    setIsLoading(false);
   },2500) 
   !wallpaper && getHeaderWallpaper();
  },[category])
  console.log(trending);

  if (isLoading){
    return <div className="text-white flex items-center justify-center w-full h-[100vh] bg-black">
    {/* <Loader /> */}
    <MovieFact />
  </div>
  
  }
  

  return  (
    <div className="w-full ">
        <Topnav />
     <div className="flex  ">
     <Sidenav  />
      <div className="w-[100vw]  h-full hero bg-black overflow-y  overflow-x-hidden">
        <Header data={wallpaper} />
        <div className=" mt-2 p-5 pr-2">
        <h1 className="text-2xl font-semibold mb-2 text-zinc-400  ">
          Trendings
        </h1>
        <Dropdown options={["all", "tv", "movie"]} func={setCategory} />
      </div>
        <HorizontalCards data={trending}   />
      </div>
     </div>
    </div>
  // ) 
    
  );
}

export default Home

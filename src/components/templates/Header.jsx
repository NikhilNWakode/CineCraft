import { Link } from "react-router-dom";
const Header = ({data}) => {
    //console.log(data);
  return (
    <div style={{
        // background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.8),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
          background: `linear-gradient(#00000005,#000000), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat : 'no-repeat',
          
        
    }}
    className="w-full h-[50vh] flex flex-col p-[2%] justify-end">
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl  font-black w-[70%]  ml-2 text-zinc-400" >{data.original_title || data.name || data.title || data.orginal_name}</h1>
      <p className="text-zinc-400 mt-1 w-[70%] ml-2 text-sm sm:text-sm md:text-[15px] lg:text-[16px] xl:text-[17px] ">{data.overview.slice(0,180)}....<Link className="text-red-600  ">more</Link></p>
      <p className="text-zinc-400 mt-2 ml-2">< i className="ri-megaphone-fill text-yellow-400/70"></i> {data.release_date || data.
first_air_date
}
       < i className="ml-5  ri-album-fill text-yellow-400/70"></i> {data.media_type.toUpperCase()}</p>
       <span><Link className="ml-2 inline-block  text-slate-300 p-2 rounded-md font-bold bg-red-700 hover:bg-red-800 duration-300 transition-all mt-4 " >Watch Trailer</Link></span>
    </div>
  )
}

export default Header

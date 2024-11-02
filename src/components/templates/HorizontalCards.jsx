

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-fit trending p-5  bg-black ">
      
      <div className="w-full flex cards h-[41vh] trending overflow-y-hidden pb-1  ">
        {data.map((d, i) => (
          <div
            key={i}
            className=" min-w-[60%] sm:min-w-[30%] lg:min-w-[18%] md:min-w-[28%] xl:min-w-[14%]    h-full mr-5 bg-[#1e1f24]  transition-all duration-200 overflow-hidden text-white rounded-xl mb-10 scale-95 opacity-80 hover:opacity-95 hover:scale-100 "
          >
            <img
              className="w-[100%] object-cover rounded-t-xl   h-[45%]"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              })`}
              alt="Data Image"
            />
            <div className=" p-3 overflow-y-auto">
              <h1 className="mt-3 text-xl text-slate-100 font-semibold">
                {d.original_title || d.name || d.title || d.orginal_name}
              </h1>
              <p className="text-left text-zinc-300">
                {d.overview.slice(0, 75)}....
                <span className="text-red-600  ">more</span>
              </p>
            </div>
            <div className="h-[5px] mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;

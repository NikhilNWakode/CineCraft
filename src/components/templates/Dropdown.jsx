import { useState } from 'react';

const Dropdown = ({options, func }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    func(option);
  };

 

  return (
    <div className="relative w-[300px] ">
     

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1e1f24] text-white p-3 rounded-lg cursor-pointer flex items-center justify-between"
        
      >
        <span>{selected}</span>
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div  className="absolute top-full mt-2 w-full  bg-[#1e1f24] rounded-lg shadow-lg z-10">
          
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              
              
              
              className={`flex items-center p-3 cursor-pointer transition-all duration-300
                ${selected === option ? 'bg-zinc-500  rounded-lg' : 'hover:bg-red-500/85'}
                text-white hover:rounded-lg`}            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

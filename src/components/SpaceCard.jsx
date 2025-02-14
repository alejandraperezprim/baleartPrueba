import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

export default function SpaceCard() {
  const [spaces, setSpaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const spacesPerPage = 6;
  const totalPages = Math.ceil(spaces.length / spacesPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [spacesRes, imagesRes] = await Promise.all([
          fetch("/data/spaces.json"),
          fetch("/data/spaces-img.json"),
        ]);

        const [spacesData, imagesData] = await Promise.all([
          spacesRes.json(),
          imagesRes.json(),
        ]);

        const mergedData = spacesData.map((space) => {
          const imageObj = imagesData.find(
            (img) => img.registre === space.registre
          );
          return { ...space, image: imageObj ? imageObj.image : "" };
        });

        setSpaces(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Obtener los espacios de la página actual
  const indexOfLastSpace = currentPage * spacesPerPage;
  const indexOfFirstSpace = indexOfLastSpace - spacesPerPage;
  const currentSpaces = spaces.slice(indexOfFirstSpace, indexOfLastSpace);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 flex flex-wrap justify-center gap-4 p-4">
        {currentSpaces.map((space) => (
          <div
            key={space.registre}
            className="bg-white rounded-lg shadow-md overflow-hidden w-80 h-[400px] flex flex-col"
          >
            <div className="relative">
              <img
                src={space.image}
                alt={space.nom}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {space.nom}
                  </h2>
                  <p className="text-sm text-gray-600">{space.municipi}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 space-x-1">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <span className="text-gray-600 text-sm ml-2">(5/5)</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {space["descripcions/cat"]}
              </p>
              <div className="mt-auto">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Componente de paginación */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />
    </div>
  );
}

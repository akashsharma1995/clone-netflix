import React from "react";
import Image from "next/image";
import Modal from "../UI/Modal/Modal";
import { formattedDate } from "@/utils/common";
import LoadingSpinner from "../UI/LoadingSpinner";
import { tmdbImageURL } from "@/constants/tmdbURLs";

const CarouselModal = ({
  handleModalClose,
  selectedMovie,
  castDetails,
  loadingCast,
}) => {
  return (
    <Modal handleModalClose={handleModalClose}>
      <div className="w-1/3 relative aspect-[2/3] shrink-0">
        <Image
          src={`${tmdbImageURL}/${selectedMovie.poster_path}`}
          fill={true}
          alt="movie-poster"
          className="w-full rounded-lg !h-auto"
          loading="eager"
          quality={25}
        />
      </div>
      <div className="grow">
        <h3 className="font-bold text-xl mb-3">{selectedMovie?.title || ""}</h3>
        <p className="mt-2">
          <span className="border border-solid border-white px-3 rounded-sm">
            &#9733;&nbsp; {selectedMovie?.vote_average || ""}
          </span>
          &nbsp;{`(${selectedMovie?.vote_count || ""})`}
        </p>
        <p className="mt-2">
          <span className="font-bold">Release Date:&nbsp;</span>
          <span>{formattedDate(selectedMovie?.release_date)}</span>
        </p>
        <p className="text-md mt-2">{selectedMovie?.overview || ""}</p>
        {!loadingCast && castDetails[selectedMovie.id] && (
          <p className="flex flex-wrap gap-3 mt-2">
            <span className="font-bold">Cast:</span>
            {castDetails[selectedMovie.id]?.map((cast) => {
              return (
                <span
                  className="font-bold px-2 bg-white text-black rounded-sm"
                  key={cast.id}
                >
                  {cast.name}
                </span>
              );
            })}
          </p>
        )}
        {loadingCast && (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CarouselModal;

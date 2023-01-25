import React from "react";

const MovieCard = ({ mov }) => {
  return (
    <div className="card-box">
      <div className="movie-card">
        <img
          src={
            mov.Poster !== "N/A"
              ? mov.Poster
              : "https://www.utcourts.gov/en/about/courts/judges-bios/justice-courts/second-district-justice-court/michael-junk/_jcr_content/root/container/container/columncontainer/col-2-2-1/image.coreimg.svg/1667446674791/no-image-placeholder.svg"
          }
          alt={mov.Title}
        />
      </div>
      <p className="movie-title">
        {mov.Title.length > 25 ? `${mov.Title.substring(0, 25)}...` : mov.Title}
      </p>
    </div>
  );
};

export default MovieCard;

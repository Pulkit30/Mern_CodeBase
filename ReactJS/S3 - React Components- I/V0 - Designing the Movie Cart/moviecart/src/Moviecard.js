import React from "react";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" />
          </div>
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers shown in the movie.</div>
            <div className="price">Rs. 200</div>
          </div>
          <div className="footer">
            <div className="rating">8.9</div>
            <div className="stars">star</div>
            <button className="favourite-btn"></button>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;

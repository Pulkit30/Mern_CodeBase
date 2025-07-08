import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    let animes = this.props.anime;
    return (
      <div className="anime-list">
        {animes.map((anime) => {
          return (
            <>
              <AnimeCard anime={anime} />
            </>
          );
        })}
      </div>
    );
  }
}

export default AnimeList;

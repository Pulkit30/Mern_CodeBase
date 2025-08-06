import { Component } from "react";
import AnimeCard from './AnimeCard.js'
// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const animList=this.props.anime
    return <div className="anime-list">
     {
       animList.map((item,index)=>{
        return <AnimeCard key={index} animeCardDetails={item}/>
       })
     }
    </div>;
  }
}

export default AnimeList;

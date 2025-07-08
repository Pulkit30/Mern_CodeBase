// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    return ArtPiece.db
    
    // Write your code here to retrieve all art pieces
  }

  static findOne(id) {
    const artPiece=ArtPiece.db.find((val)=> val.id == id )
     return artPiece
    // Write your code here to retrieve a specific art piece by its id
  }

  static update(id, data) {
    const artPiece=ArtPiece.db.findIndex((val)=> val.id == id )
    if(artPiece==-1){
      return None
    }
    else{
      const {title,artist,year,imageUrl}=data
     ArtPiece.db[artPiece]['title']=title
     ArtPiece.db[artPiece]['artist']=artist
     ArtPiece.db[artPiece]['year']=year
     ArtPiece.db[artPiece]['imageUrl']=imageUrl
     return ArtPiece.db[artPiece]
    }
    // Write your code here to update the details of a specific art piece
  }

  static delete(id) {
    const artPiece=ArtPiece.db.findIndex((val)=> val.id == id )
    if(artPiece!=-1){
     ArtPiece.db.splice(artPiece , 1)
    }
    // Write your code here to delete a specific art piece
  }
}

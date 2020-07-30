import React from "react";
import axios from "axios";

class GetArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/api.php?artist=" + this.props.artist)
      .then(res => {
        const artist = res.data;
        this.setState({ artist: artist });
      });
    axios
      .get(
        "http://localhost:8080/api/api.php?getAlbumFromArtist=" +
          this.props.artist
      )
      .then(res => {
        const albums = res.data;
        this.setState({ albums: albums });
      });
  }

  render() {
    return (
      <div class="row justify-content-center">
        {this.state.artist.map(property => (
          <div class="col-7 text-center">
            <img src={property.photo} alt="Pensons aux malvoyants" />
            <h3>{property.name}</h3>
            <p class="description">&laquo; {property.description} &raquo;</p>
            <p class="description">&laquo; {property.bio} &raquo;</p>
            <h5>Albums: </h5>
            <ul>
              {this.state.albums.map(album => (
                <li>
                  <a href={"/album/" + album.name}>{album.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

function Artist(props) {
  return <GetArtist artist={props.artist} />;
}

export default Artist;

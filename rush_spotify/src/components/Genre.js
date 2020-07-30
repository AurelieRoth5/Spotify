import React from "react";
import axios from "axios";

class GetGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/api/api.php?getAlbumFromGenre=" +
          this.props.genre
      )
      .then(res => {
        const albums = res.data;
        this.setState({ albums });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.props.genre} albums:</h1>
        <ul>
          {this.state.albums.map(album => (
            <li>
              <a href={"/album/" + album.name}>{album.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function Genre(props) {
  return (
    <div class="row justify-content-center">
      <div class="col-7 text-center">
        <GetGenre genre={props.genre} />
      </div>
    </div>
  );
}

export default Genre;

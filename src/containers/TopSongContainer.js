import React, {Component, Fragment} from "react";
import TopSongList from "../components/TopSongList";
import './TopSongContainer.css';

class TopSongContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({songs: data.feed.entry})
 });

 request.send();
};


  render(){
    return (
      <Fragment>
      <div className="song-container">
        <h2> Top 20 UK Songs</h2>
        {console.log(this.state.songs)}
        <TopSongList songs={this.state.songs}/>
      </div>
      </Fragment>
    );
  }
}




export default TopSongContainer;

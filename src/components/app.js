import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';


// Youtube API Key.
const API_KEY= 'AIzaSyDEIqHbYhbhWGpGatzLqmScYo5uthV2TzU';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term:'siberian huskies'}, (videos) => {
      console.log(videos);
      this.setState({ videos })
      // this.setState({ videos:videos });
      // applicable only where key& value pair are same..
    });
  }

  render() {
    return (
      <div>
        <div>React simple starter</div>
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

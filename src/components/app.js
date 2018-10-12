import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import _ from 'lodash';


// Youtube API Key.
const API_KEY= 'AIzaSyDEIqHbYhbhWGpGatzLqmScYo5uthV2TzU';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [],
                   selectedVideo: null
     };
    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      this.setState({ videos:videos,
                      selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="main-container">
        <span className="main-logo">my youtube</span>
        <SearchBar onSearchTermChange={videoSearch}/>
        <div className="video-container">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

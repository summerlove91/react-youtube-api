import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={()=> onVideoSelect(video)} className="list-inline-item">
        <div className="video-image">
          <img className="image" src={imageUrl}/>
        </div>
    </li>
  );
};

export default VideoListItem;

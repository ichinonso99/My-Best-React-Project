import React from 'react';
// import videoData from './videoData.json';

const VideoPlayer = () => {
  const videos = [
    {
      id: 1,
      category: "watch",
      video: "Videos/video1.mp4",
      title: "Solid Gold WriskWatch",
      price: 29500,
      description: '2 years Warranty 100% Water Resistant Watch',
      rating: { rate: 88.6, count: 217.1 },

    },
    {
      id: 2,
      category: "watch",
      title: 'State Management in React',
      video: 'videos/video1.mp4',
      price: 29500,
      description: '2 years Warranty 100% Water Resistant Watch',
      rating: { rate: 88.6, count: 217.1 },
    },
    {
      id: 3,
      category: "watch",
      type: 'video/mp4',
      title: 'React Hooks Explained',
      video: "Videos/video1.mp4",
      price: 29500,
      description: '2 years Warranty 100% Water Resistant Watch',
      rating: { rate: 88.6, count: 217.1 },
    }
    // Add more video objects as needed
  ];

  return (
    <div>
      <h2 className='mt-3'>Video Player</h2>
      <div className='videoPlayer container mt-3' >
        <div className='row'>
          {videos.map((video) => (
            <div className=' col-md-4 shadow p-2 bg-body rounded mt-3 m-2' style={{ width: "22rem" }} data-aos='zoom-in' key={video.id}>
              {/* <div > */}
              <div>
                <p>{video.category}</p>
                <video width="320" height="360" controls>
                  <source src={video.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
import React, { PropTypes } from 'react'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'

import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyD40C8AxXE1pS0QIHSusiE_Q8sT-P7oK-8';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({
        key: API_KEY,
        term: term
      },
      videos => this.setState({
        selectedVideo: videos[0],
        videos
      })
    )
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 500)

    return (
      <div>
        Search:
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }


}

export default App;

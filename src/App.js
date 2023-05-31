import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Gaming from './components/Gaming'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
    likedVideoList: [],
    disLikedVideoList: [],
    isSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onAddToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  onAddToLikedVideos = videoDetails => {
    this.setState(prev => ({
      likedVideoList: [...prev.likedVideoList, videoDetails],
    }))
  }

  onAddToDislike = videoDetails => {
    this.setState(prev => ({
      disLikedVideoList: [...prev.disLikedVideoList, videoDetails],
    }))
  }

  onRemoveSavedVideo = videoDetails => {
    const {savedVideosList} = this.state
    const removedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: removedList})
  }

  onRemoveLikedVideos = videoDetails => {
    const {likedVideoList} = this.state
    const removedList = likedVideoList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({likedVideoList: removedList})
  }

  onRemoveDislike = videoDetails => {
    const {disLikedVideoList} = this.state
    const removedListt = disLikedVideoList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({disLikedVideoList: removedListt})
  }

  updateSaveVideosList = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      this.onRemoveSavedVideo(videoDetails)
    } else {
      this.onAddToSavedVideos(videoDetails)
    }
  }

  updateLikedVideosList = videoDetails => {
    const {isLiked} = this.state
    if (isLiked) {
      this.onRemoveLikedVideos(videoDetails)
    } else {
      this.onAddToLikedVideos(videoDetails)
      this.setState({isDisliked: false})
      this.onRemoveDislike(videoDetails)
    }
  }

  updateDisLikedVideosList = videoDetails => {
    const {isDisliked} = this.state
    if (isDisliked) {
      this.onRemoveDislike(videoDetails)
    } else {
      this.onAddToDislike(videoDetails)
      this.setState({isLiked: false})
      this.onRemoveLikedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({isSaved: !prev.isSaved}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  updateLike = videoDetails => {
    this.setState(
      prev => ({isLiked: !prev.isLiked}),
      this.updateLikedVideosList(videoDetails),
    )
  }

  updateDisLike = videoDetails => {
    this.setState(
      prev => ({isDisliked: !prev.isDisliked}),
      this.updateDisLikedVideosList(videoDetails),
    )
  }

  render() {
    const {
      isDark,
      savedVideosList,
      likedVideoList,
      disLikedVideoList,
      isSaved,
      isLiked,
      isDisliked,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideosList,
          likedVideoList,
          disLikedVideoList,
          isSaved,
          isLiked,
          isDisliked,
          updateSave: this.updateSave,
          updateLike: this.updateLike,
          updateDisLike: this.updateDisLike,
          onToggleTheme: this.onToggleTheme,
          onAddToSavedVideos: this.onAddToSavedVideos,
          onRemoveSavedVideo: this.onRemoveSavedVideo,
          onAddToLikedVideos: this.addLikedVodeo,
          onRemoveLikedVideos: this.RemoveLikedVideo,
          onAddToDislike: this.onAddToDislike,
          onRemoveDislike: this.onRemoveDislike,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

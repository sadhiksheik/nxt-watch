import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  isSave: false,
  isLiked: false,
  isDisliked: false,
  savedVideosList: [],
  likedVideoList: [],
  disLikedVideoList: [],
  updateSave: () => {},
  updateLike: () => {},
  updateDisLike: () => {},
  onToggleTheme: () => {},
  onAddToSavedVideos: () => {},
  onRemoveSavedVideo: () => {},
  onAddToLikedVideos: () => {},
  onRemoveLikedVideos: () => {},
  onAddToDislike: () => {},
  onRemoveDislike: () => {},
})

export default ThemeContext

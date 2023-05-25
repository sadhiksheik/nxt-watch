import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  savedVideosList: [],
  onToggleTheme: () => {},
  onAddToSavedVideos: () => {},
  onRemoveSavedVideo: () => {},
})

export default ThemeContext

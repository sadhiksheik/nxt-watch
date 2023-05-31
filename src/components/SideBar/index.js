import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import {
  SideCont,
  PathsCont,
  PathsPara,
  StyledLink,
  FooterCont,
  Head,
  IconCont,
  IconImg,
  Para,
  Homeicon,
  TrendIcon,
  GamingIcon,
  SavedIcon,
} from './styledComponents'

const activeTabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class SideBar extends Component {
  state = {isActive: activeTabs.home}

  render() {
    const {isActive} = this.state
    const isHome = isActive === activeTabs.home

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SideCont isDark={isDark}>
              <StyledLink to="/">
                <PathsCont>
                  <Homeicon isHome={isHome} size={25} isDark={isDark} />
                  <PathsPara isDark={isDark}>Home</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/trending">
                <PathsCont>
                  <TrendIcon size={25} isDark={isDark} />

                  <PathsPara isDark={isDark}>Trending</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/gaming">
                <PathsCont>
                  <GamingIcon size={25} isDark={isDark} />
                  <PathsPara isDark={isDark}>Gaming</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/saved-videos">
                <PathsCont>
                  <SavedIcon size={25} isDark={isDark} />
                  <PathsPara isDark={isDark}>Saved videos</PathsPara>
                </PathsCont>
              </StyledLink>

              <FooterCont>
                <Head isDark={isDark}>CONTACT US</Head>
                <IconCont>
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconCont>
                <Para isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </FooterCont>
            </SideCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SideBar

import {Component} from 'react'

import {AiFillHome, AiFillDatabase} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
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
} from './styledComponents'

// const activeTabs = {
//   home: 'HOME',
//   trending: 'TRENDING',
//   gaming: 'GAMING',
//   savedVideos: 'SAVED VIDEOS',
// }

class SideBar extends Component {
  //   state = {isActive: activeTabs.home}

  render() {
    // const {isActive} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SideCont isDark={isDark}>
              <StyledLink to="/">
                <PathsCont>
                  {isDark ? (
                    <AiFillHome size={25} color="#e2e8f0" />
                  ) : (
                    <AiFillHome size={25} color="#181818" />
                  )}

                  <PathsPara isDark={isDark}>Home</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/trending">
                <PathsCont>
                  {isDark ? (
                    <FaFireAlt size={25} color="#e2e8f0" />
                  ) : (
                    <FaFireAlt size={25} color="#181818" />
                  )}

                  <PathsPara isDark={isDark}>Trending</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/gaming">
                <PathsCont>
                  {isDark ? (
                    <SiYoutubegaming size={25} color="#e2e8f0" />
                  ) : (
                    <SiYoutubegaming size={25} color="#181818" />
                  )}
                  <PathsPara isDark={isDark}>Gaming</PathsPara>
                </PathsCont>
              </StyledLink>
              <StyledLink to="/saved-videos">
                <PathsCont>
                  {isDark ? (
                    <AiFillDatabase size={25} color="#e2e8f0" />
                  ) : (
                    <AiFillDatabase size={25} color="#181818" />
                  )}
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

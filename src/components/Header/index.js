import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderCont,
  LogoImg,
  InnerCont,
  DarkImg,
  ThemeBtn,
  LogoutBtn,
  ProfileImg,
  HamburgerIcon,
  LogoutIcon,
  DropDownCont,
  StyledLink,
  PopCont,
  ConfirmBtn,
  BtnCont,
  ClosePopBtn,
} from './styledComponents'

class Header extends Component {
  state = {isShowDropdown: false}

  onLoggingOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onHamburgerClicked = () => {
    this.setState(prev => ({isShowDropdown: !prev.isShowDropdown}))
  }

  render() {
    const {isShowDropdown} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onToggleTheme} = value

          const onThemeChanged = () => {
            onToggleTheme()
          }

          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <HeaderCont isDark={isDark}>
                <Link to="/">
                  <LogoImg src={logoUrl} alt="website logo" />
                </Link>
                <InnerCont>
                  {isDark ? (
                    <ThemeBtn onClick={onThemeChanged}>
                      <DarkImg src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png" />
                    </ThemeBtn>
                  ) : (
                    <ThemeBtn onClick={onThemeChanged}>
                      <FaMoon size={20} />
                    </ThemeBtn>
                  )}
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <HamburgerIcon
                    isDark={isDark}
                    onClick={this.onHamburgerClicked}
                  />

                  <Popup
                    modal
                    trigger={<LogoutBtn isDark={isDark}>Logout</LogoutBtn>}
                  >
                    {close => (
                      <PopCont isDark={isDark}>
                        <div>
                          <p>Are you sure, you want to logout?</p>
                        </div>
                        <BtnCont>
                          <ClosePopBtn
                            isDark={isDark}
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Close
                          </ClosePopBtn>
                          <ConfirmBtn onClick={this.onLoggingOut}>
                            Confirm
                          </ConfirmBtn>
                        </BtnCont>
                      </PopCont>
                    )}
                  </Popup>

                  <Popup modal trigger={<LogoutIcon isDark={isDark} />}>
                    {close => (
                      <PopCont isDark={isDark}>
                        <div>
                          <p>Are you sure, you want to logout?</p>
                        </div>
                        <BtnCont>
                          <ClosePopBtn
                            isDark={isDark}
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Close
                          </ClosePopBtn>
                          <ConfirmBtn onClick={this.onLoggingOut}>
                            Confirm
                          </ConfirmBtn>
                        </BtnCont>
                      </PopCont>
                    )}
                  </Popup>
                </InnerCont>
              </HeaderCont>
              {isShowDropdown && (
                <DropDownCont isDark={isDark}>
                  <StyledLink to="/" isDark={isDark}>
                    Home
                  </StyledLink>
                  <StyledLink to="/trending" isDark={isDark}>
                    Trending
                  </StyledLink>
                  <StyledLink to="/gaming" isDark={isDark}>
                    Gaming
                  </StyledLink>

                  <StyledLink to="/saved-videos" isDark={isDark}>
                    Saved videos
                  </StyledLink>
                  <StyledLink isDark={isDark}>Profile</StyledLink>
                </DropDownCont>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Header)

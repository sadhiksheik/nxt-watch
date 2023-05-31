import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainCont,
  BgCont,
  SideBarCont,
  NotCont,
  NotImg,
  NotHead,
  NotPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <MainCont>
          <Header />
          <BgCont>
            <SideBarCont>
              <SideBar />
            </SideBarCont>
            <NotCont isDark={isDark} data-testid="trending">
              <NotImg src={imgUrl} alt="not found" />
              <NotHead isDark={isDark}>Page Not Found</NotHead>
              <NotPara>
                we are sorry, the page you requested could not be found.
              </NotPara>
            </NotCont>
          </BgCont>
        </MainCont>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound

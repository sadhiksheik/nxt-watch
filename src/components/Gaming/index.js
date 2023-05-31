import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  MainCont,
  BgCont,
  SideBarCont,
  GameCont,
  LoaderCont,
  FailureCont,
  FailImg,
  FailHead,
  FailedPAra,
  RetryBtn,
  TrendingMainCont,
  HeadContainer,
  FireCont,
  Heading,
  GamingUlCont,
  LinkEl,
  LiEl,
  ThumbNailImg,
  TitleHead,
  Viewpara,
} from './styledComponents'

const apiResultConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gameList: [], apiResult: apiResultConstants.initial}

  componentDidMount = () => {
    this.getGameVideoDetails()
  }

  getGameVideoDetails = async () => {
    this.setState({apiResult: apiResultConstants.loading})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const formattedData = fetchedData.videos.map(each => ({
        id: each.id,
        tittle: each.title,
        thumbNailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      console.log(formattedData)
      this.setState({
        apiResult: apiResultConstants.success,
        gameList: formattedData,
      })
    } else {
      this.setState({apiResult: apiResultConstants.failure})
    }
  }

  onRetryClicked = () => {
    this.getGameVideoDetails()
  }

  getLoaderView = () => (
    <LoaderCont className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCont>
  )

  getFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureCont>
            <FailImg src={failureUrl} alt="failure view" />
            <FailHead isDark={isDark}>Oops! Something Went Wrong</FailHead>
            <FailedPAra isDark={isDark}>We are having some trouble</FailedPAra>
            <RetryBtn type="button" onClick={this.onRetryClicked}>
              Retry
            </RetryBtn>
          </FailureCont>
        )
      }}
    </ThemeContext.Consumer>
  )

  getSuccessView = () => {
    const {gameList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendingMainCont>
              <HeadContainer data-testid="banner" isDark={isDark}>
                <FireCont isDark={isDark}>
                  <SiYoutubegaming color="#ff0000" size={40} />
                </FireCont>
                <Heading isDark={isDark}>Gaming</Heading>
              </HeadContainer>
              <GamingUlCont>
                {gameList.map(each => (
                  <LiEl key={each.id}>
                    <LinkEl to={`/videos/${each.id}`}>
                      <ThumbNailImg
                        src={each.thumbNailUrl}
                        alt="video thumbnail"
                      />
                      <TitleHead isDark={isDark}>{each.tittle}</TitleHead>
                      <Viewpara>{each.viewCount} Watching Worldwide</Viewpara>
                    </LinkEl>
                  </LiEl>
                ))}
              </GamingUlCont>
            </TrendingMainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  getSwitchedResults = () => {
    const {apiResult} = this.state
    switch (apiResult) {
      case apiResultConstants.success:
        return this.getSuccessView()
      case apiResultConstants.loading:
        return this.getLoaderView()
      case apiResultConstants.failure:
        return this.getFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <MainCont>
              <Header />
              <BgCont>
                <SideBarCont>
                  <SideBar />
                </SideBarCont>
                <GameCont data-testid="gaming" isDark={isDark}>
                  {this.getSwitchedResults()}
                </GameCont>
              </BgCont>
            </MainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming

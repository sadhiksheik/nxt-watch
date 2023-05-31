import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoThumbNail from '../VideoThumbNail'
import {
  BgCont,
  SideBarCont,
  HomeCont,
  BannerCont,
  LogoImg,
  LogoCancelCont,
  CloseBtn,
  BannerPara,
  BannerBtn,
  SearchCont,
  SearchInput,
  SearchBtn,
  HomeBodyCont,
  SearchIcon,
  LoaderCont,
  MainCont,
  UlCont,
  FailureCont,
  FailHead,
  FailedPAra,
  FailImg,
  RetryBtn,
} from './styledComponents'

const apiResultConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    showBanner: true,
    inputText: '',
    inputQuery: '',
    resultsState: apiResultConstants.initial,
    videosList: [],
  }

  onCloseBanner = () => {
    this.setState(prev => ({showBanner: !prev.showBanner}))
  }

  onInputChanged = event => {
    this.setState({inputText: event.target.value})
  }

  onSearchClicked = () => {
    const {inputText} = this.state
    this.setState({inputQuery: inputText}, this.getHomeVideosData)
  }

  componentDidMount = () => {
    this.getHomeVideosData()
  }

  onRetryClicked = () => {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({resultsState: apiResultConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {inputQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputQuery}`
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        resultsState: apiResultConstants.success,
        videosList: formattedData,
      })
    } else {
      this.setState({resultsState: apiResultConstants.failure})
    }
  }

  getLoaderView = () => (
    <LoaderCont className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCont>
  )

  getNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

        return (
          <FailureCont>
            <FailImg src={failureUrl} alt="no videos" />
            <FailHead isDark={isDark}>No Search results found</FailHead>
            <FailedPAra isDark={isDark}>
              Try different key words or remove search filter
            </FailedPAra>
            <RetryBtn type="button" onClick={this.onRetryClicked}>
              Retry
            </RetryBtn>
          </FailureCont>
        )
      }}
    </ThemeContext.Consumer>
  )

  getSuccessView = () => {
    const {videosList} = this.state
    const len = videosList.length

    return len === 0 ? (
      this.getNoVideosView()
    ) : (
      <UlCont>
        {videosList.map(eachVideo => (
          <VideoThumbNail key={eachVideo.id} details={eachVideo} />
        ))}
      </UlCont>
    )
  }

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

  getSwitchedResults = () => {
    const {resultsState} = this.state

    switch (resultsState) {
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
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const imageUrl =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <MainCont>
              <Header />
              <BgCont>
                <SideBarCont>
                  <SideBar />
                </SideBarCont>
                <HomeCont data-testid="home" isDark={isDark}>
                  {showBanner && (
                    <BannerCont data-testid="banner">
                      <LogoCancelCont>
                        <LogoImg src={imageUrl} alt="nxt watch logo" />
                        <CloseBtn
                          onClick={this.onCloseBanner}
                          data-testid="close"
                        >
                          <AiOutlineClose size={15} />
                        </CloseBtn>
                      </LogoCancelCont>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerPara>
                      <BannerBtn type="button">GET IT NOW</BannerBtn>
                    </BannerCont>
                  )}
                  <HomeBodyCont isDark={isDark}>
                    <SearchCont>
                      <SearchInput
                        isDark={isDark}
                        type="search"
                        placeholder="search"
                        onChange={this.onInputChanged}
                      />
                      <SearchBtn
                        data-testid="searchButton"
                        onClick={this.onSearchClicked}
                        type="button"
                      >
                        <SearchIcon isDark={isDark} />
                      </SearchBtn>
                    </SearchCont>
                    {this.getSwitchedResults()}
                  </HomeBodyCont>
                </HomeCont>
              </BgCont>
            </MainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

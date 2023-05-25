import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendCont,
  SideBarCont,
  MainCont,
  BgCont,
  LoaderCont,
  FailureCont,
  FailImg,
  FailHead,
  FailedPAra,
  RetryBtn,
  TrendVideoContUl,
  TrendingMainCont,
  HeadContainer,
  Heading,
  FireCont,
  LiEl,
  ThumbNailImg,
  DetailsCont,
  ChannelImg,
  ParasCont,
  TitleHead,
  ChanelName,
  ViewsDatePara,
  LinkEl,
} from './styledComponents'

const apiResultConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {apiResult: apiResultConstants.initial, trendList: []}

  componentDidMount = () => {
    this.getTrendList()
  }

  getTrendList = async () => {
    this.setState({apiResult: apiResultConstants.loading})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        apiResult: apiResultConstants.success,
        trendList: formattedData,
      })
    } else {
      this.setState({apiResult: apiResultConstants.failure})
    }
  }

  onRetryClicked = () => {
    this.getTrendList()
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
            <FailImg src={failureUrl} alt="failed image" />
            <FailHead isDark={isDark}>Oops! Something Went Wrong</FailHead>
            <FailedPAra isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again
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
    const {trendList} = this.state

    const getDateToNow = each => {
      const dateFromNow = formatDistanceToNow(new Date(each.publishedAt)).split(
        ' ',
      )
      return dateFromNow.splice(1, 2).join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendingMainCont>
              <HeadContainer isDark={isDark}>
                <FireCont isDark={isDark}>
                  <FaFire color="#ff0000" size={40} />
                </FireCont>
                <Heading isDark={isDark}>Trending</Heading>
              </HeadContainer>
              <TrendVideoContUl>
                {trendList.map(each => (
                  <LinkEl to={`/videos/${each.id}`}>
                    <LiEl>
                      <ThumbNailImg
                        src={each.thumbNailUrl}
                        alt="video thumbnail"
                      />
                      <DetailsCont>
                        <ChannelImg
                          src={each.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <ParasCont>
                          <TitleHead isDark={isDark}>{each.tittle}</TitleHead>
                          <ChanelName>{each.channel.name}</ChanelName>
                          <ViewsDatePara>
                            {each.viewCount} views . {getDateToNow(each)} ago
                          </ViewsDatePara>
                        </ParasCont>
                      </DetailsCont>
                    </LiEl>
                  </LinkEl>
                ))}
              </TrendVideoContUl>
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
                <TrendCont isDark={isDark} data-testid="trending">
                  {this.getSwitchedResults()}
                </TrendCont>
              </BgCont>
            </MainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending

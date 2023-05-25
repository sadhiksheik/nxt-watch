import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainCont,
  BgCont,
  SideBarCont,
  VideoItemCont,
  LoaderCont,
  FailureCont,
  FailImg,
  FailHead,
  FailedPAra,
  RetryBtn,
  PlayerContainer,
  TitlePara,
  ViewsLikeCont,
  ViewsPara,
  LikesCont,
  LikeBtn,
  DislikeBtn,
  SavedBtn,
  Line,
  ChannelCont,
  ChannelLogo,
  ChannelDetailsCont,
  Name,
  Subs,
  Descri,
} from './styledComponents'

const apiResultConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiResultConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount = () => {
    this.getVideoItemDetails()
  }

  onRetryClicked = () => {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiResultConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbNailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subsCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        videoDetails: formattedData,
        apiStatus: apiResultConstants.success,
      })
    } else {
      this.setState({apiStatus: apiResultConstants.failure})
    }
  }

  getLoaderView = () => (
    <LoaderCont className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCont>
  )

  onLiked = () => {
    this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
  }

  onDisliked = () => {
    this.setState(prev => ({isDisliked: !prev.isDisliked, isLiked: false}))
  }

  getSuccessView = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state

    const {
      channelName,
      description,
      profileImageUrl,
      publishedAt,
      subsCount,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const dateFromNow = formatDistanceToNow(new Date(publishedAt)).split(' ')
    const res = dateFromNow.splice(1, 2).join(' ')

    const saveText = isSaved ? 'Saved' : 'Save'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onAddToSavedVideos, onRemoveSavedVideo} = value

          const updateVideoDetails = () => {
            if (isSaved) {
              onAddToSavedVideos(videoDetails)
            } else {
              onRemoveSavedVideo(videoDetails)
            }
          }

          const onSaveClicked = () => {
            this.setState(
              prev => ({isSaved: !prev.isSaved}),
              updateVideoDetails(),
            )
          }

          return (
            <>
              <PlayerContainer>
                <ReactPlayer
                  height={350}
                  controls
                  width={1150}
                  url={videoUrl}
                />
              </PlayerContainer>
              <TitlePara isDark={isDark}>{title}</TitlePara>
              <ViewsLikeCont>
                <ViewsPara>
                  {viewCount} views . {res} ago
                </ViewsPara>
                <LikesCont>
                  <LikeBtn isLiked={isLiked} onClick={this.onLiked}>
                    <BiLike size={25} /> Like
                  </LikeBtn>
                  <DislikeBtn isDisliked={isDisliked} onClick={this.onDisliked}>
                    <BiDislike size={25} /> Dislike
                  </DislikeBtn>
                  <SavedBtn isSaved={isSaved} onClick={onSaveClicked}>
                    <MdPlaylistAdd size={25} /> {saveText}
                  </SavedBtn>
                </LikesCont>
              </ViewsLikeCont>
              <Line />
              <ChannelCont>
                <ChannelLogo src={profileImageUrl} alt="profile" />
                <ChannelDetailsCont>
                  <Name isDark={isDark}> {channelName}</Name>
                  <Subs isDark={isDark}>{subsCount} subscribers</Subs>
                </ChannelDetailsCont>
              </ChannelCont>
              <Descri isDark={isDark}>{description}</Descri>
            </>
          )
        }}
      </ThemeContext.Consumer>
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

  getSwitchedData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiResultConstants.loading:
        return this.getLoaderView()
      case apiResultConstants.success:
        return this.getSuccessView()
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
                <VideoItemCont data-testid="videoItemDetails" isDark={isDark}>
                  {this.getSwitchedData()}
                </VideoItemCont>
              </BgCont>
            </MainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoDetails

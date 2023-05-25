import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  LiElement,
  ThumbNail,
  VideoDetailsCont,
  Profile,
  DetailsCont,
  TittlePara,
  LinkEl,
  ViewsTimeCont,
  ViewsPara,
  TimePara,
  ChannelTittlePara,
} from './styledComponents'

const VideoThumbNail = props => {
  const {details} = props
  const {id, tittle, thumbNailUrl, channel, viewCount, publishedAt} = details

  const dateFromNow = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const res = dateFromNow.splice(1, 2).join(' ')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LiElement>
            <LinkEl to={`/videos/${id}`}>
              <ThumbNail src={thumbNailUrl} alt="video thumbnail" />
              <VideoDetailsCont>
                <Profile src={channel.profileImageUrl} alt={channel.name} />
                <DetailsCont>
                  <TittlePara isDark={isDark}>{tittle}</TittlePara>
                  <ChannelTittlePara isDark={isDark}>
                    {channel.name}
                  </ChannelTittlePara>
                  <ViewsTimeCont>
                    <ViewsPara>{viewCount} Views</ViewsPara>
                    <TimePara>{res} ago</TimePara>
                  </ViewsTimeCont>
                </DetailsCont>
              </VideoDetailsCont>
            </LinkEl>
          </LiElement>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoThumbNail

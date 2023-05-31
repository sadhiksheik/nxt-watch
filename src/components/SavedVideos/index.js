import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainCont,
  BgCont,
  SideBarCont,
  SavedCont,
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
  NoVideosCont,
  NoImg,
  NoHead,
  NoPara,
  ViewsContainer,
} from './styledComponents'

const getDateToNow = each => {
  const dateFromNow = formatDistanceToNow(new Date(each.publishedAt)).split(' ')
  return dateFromNow.splice(1, 2).join(' ')
}

const SavedVidoes = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value
      const NoImgUrl =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
      return (
        <MainCont>
          <Header />
          <BgCont>
            <SideBarCont>
              <SideBar />
            </SideBarCont>
            <SavedCont isDark={isDark} data-testid="savedVideos">
              {savedVideosList.length === 0 ? (
                <NoVideosCont>
                  <NoImg isDark={isDark} src={NoImgUrl} alt="no saved videos" />
                  <NoHead isDark={isDark}>No saved videos found</NoHead>
                  <NoPara isDark={isDark}>
                    You can save your videos while watching them
                  </NoPara>
                </NoVideosCont>
              ) : (
                <TrendingMainCont>
                  <HeadContainer data-testid="banner" isDark={isDark}>
                    <FireCont isDark={isDark}>
                      <FaFire color="#ff0000" size={40} />
                    </FireCont>
                    <Heading isDark={isDark}>Saved videos</Heading>
                  </HeadContainer>
                  <TrendVideoContUl>
                    {savedVideosList.map(each => (
                      <LinkEl key={each.id} to={`/videos/${each.id}`}>
                        <LiEl key={each.id}>
                          <ThumbNailImg
                            src={each.thumbNailUrl}
                            alt="video thumbnail"
                          />
                          <DetailsCont>
                            <ChannelImg
                              src={each.profileImageUrl}
                              alt="channel logo"
                            />
                            <ParasCont>
                              <TitleHead isDark={isDark}>
                                {each.title}
                              </TitleHead>
                              <ChanelName>{each.channelName}</ChanelName>
                              <ViewsContainer>
                                <ViewsDatePara>
                                  {each.viewCount} views . ago
                                </ViewsDatePara>
                                <ViewsDatePara>
                                  {getDateToNow(each)} ago
                                </ViewsDatePara>
                              </ViewsContainer>
                            </ParasCont>
                          </DetailsCont>
                        </LiEl>
                      </LinkEl>
                    ))}
                  </TrendVideoContUl>
                </TrendingMainCont>
              )}
            </SavedCont>
          </BgCont>
        </MainCont>
      )
    }}
  </ThemeContext.Consumer>
)
export default SavedVidoes

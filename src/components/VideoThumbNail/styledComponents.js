import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LiElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`
export const ThumbNail = styled.img`
  height: 150px;
  width: 250px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`
export const VideoDetailsCont = styled.div`
  display: flex;
  width: 250px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
export const Profile = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 10px;
  }
`
export const DetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0px;
`
export const TittlePara = styled.p`
  color: ${props => (props.isDark ? ' #e2e8f0' : ' #1e293b')};
  font-size: 14px;
  margin: 0px;
  font-family: 'Roboto';
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
  }
`
export const ChannelTittlePara = styled.p`
  color: ${props => (props.isDark ? ' #e2e8f0' : ' #1e293b')};
  font-size: 14px;
  margin: 0px;
  font-family: 'Roboto';

  @media screen and (max-width: 768px) {
  }
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`
export const ViewsTimeCont = styled.div`
  display: flex;
  margin-top: 0px;
`
export const ViewsPara = styled.p`
  color: #64748b;
  font-size: 14px;
  margin-bottom: 10px;
  margin-right: 5px;
`
export const TimePara = styled.p`
  color: #64748b;
  font-size: 14px;
  margin-bottom: 10px;
`

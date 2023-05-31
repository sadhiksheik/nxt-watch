import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const BgCont = styled.div`
  display: flex;
`
export const SideBarCont = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const SavedCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? ' #0f0f0f ' : '#f9f9f9 ')};
  height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
`

export const TrendingMainCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeadContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#181818 ' : '#ebebeb')};
  align-items: center;
  padding: 20px;
  padding-left: 80px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    padding-left: 10px;
    padding: 15px;
    margin-bottom: 10px;
  }
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 34px;
  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`
export const FireCont = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#d7dfe9')};
  padding: 30px;
  border-radius: 50px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    padding: 20px;
    border-radius: 40px;
  }
`
export const TrendVideoContUl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`
export const LiEl = styled.div`
  display: flex;
  list-style-type: none;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`
export const ThumbNailImg = styled.img`
  width: 300px;
  height: 200px;

  @media screen and (max-width: 576px) {
    margin-right: 0px;
    width: 100%;
  }
`
export const DetailsCont = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (max-width: 576px) {
    display: flex;
    padding: 10px;
    align-items: center;
  }
`
export const ChannelImg = styled.img`
  display: none;
  @media screen and (max-width: 576px) {
    display: inline;
    height: 40px;
    width: 40px;
    border-radius: 30px;
    margin-right: 20px;
  }
`
export const ParasCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleHead = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 17px;
  }
`
export const ChanelName = styled.p`
  color: #475569;
  font-size: 17px;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ViewsDatePara = styled.p`
  color: #475569;
  font-size: 15px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
export const LinkEl = styled(Link)`
  text-decoration: none;
`
export const NoVideosCont = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`
export const NoImg = styled.img`
  height: 300px;
  margin-top: 100px;
  width: 350px;
`

export const NoHead = styled.h1`
  color: ${props => (props.isDark ? '#f1f5f9' : '#0f0f0f')};
  font-size: 26px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const NoPara = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#0f0f0f')};
  font-size: 18px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
`

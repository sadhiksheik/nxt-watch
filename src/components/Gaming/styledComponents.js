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
export const GameCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? ' #0f0f0f  ' : '#f9f9f9 ')};
  height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
`
export const LoaderCont = styled.div`
  align-self: center;
`
export const FailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const FailImg = styled.img`
  height: 250px;
  width: 250px;
`
export const FailHead = styled.h1`
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  font-size: 24px;
  font-weight: bold;
`
export const FailedPAra = styled.h1`
  color: ${props => (props.isDark ? ' #475569' : ' #475569')};
  font-size: 18px;
`
export const RetryBtn = styled.button`
  background-color: #3b82f6;
  font-size: 12px;
  color: #ffffff;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  border: none;
  width: 80px;
  font-weight: bold;
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
export const GamingUlCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`
export const LinkEl = styled(Link)`
  text-decoration: none;
`
export const LiEl = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 40px;
`
export const ThumbNailImg = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    height: 220px;
    width: 160px;
    border-radius: 10px;
  }
`
export const TitleHead = styled.h1`
  color: ${props => (props.isDark ? '#f1f5f9' : '#0f0f0f')};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const Viewpara = styled.p`
  color: #475569;
  font-size: 16px;
  margin-bottom: 0px;
  font-weight: 500;
  min-width: 150px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    width: 150px;
  }
`

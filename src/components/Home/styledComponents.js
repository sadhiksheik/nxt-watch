import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'

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
export const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? ' #181818' : '#f1f1f1')};
  height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
`
export const BannerCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 300px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`
export const LogoImg = styled.img`
  height: 35px;
  width: 140px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 100px;
  }
`
export const LogoCancelCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const BannerPara = styled.p`
  color: #231f20;
  font-size: 18px;
  width: 200px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const BannerBtn = styled.button`
  border: solid 2px #231f20;
  padding: 5px 10px 5px 10px;
  color: #231f20;
  font-size: 14px;
  background-color: transparent;
  font-weight: bold;
`
export const SearchCont = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #909090;
  width: 220px;
  margin-bottom: 20px;
`
export const SearchInput = styled.input`
  background-color: ${props => (props.isDark ? ' #181818' : 'white ')};
  padding: 10px;
  outline: none;
  border: none;

  color: ${props => (props.isDark ? 'white' : '#181818')};
`
export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
`
export const HomeBodyCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => (props.isDark ? ' #181818' : '#f1f1f1')};
  height: 100vh;
`
export const SearchIcon = styled(AiOutlineSearch)`
  height: 15px;
  width: 15px;
  color: ${props => (props.isDark ? ' white' : '#181818')};
`
export const LoaderCont = styled.div`
  align-self: center;
`

export const UlCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const FailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// import React from 'react'
import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const BgCont = styled.div`
  display: flex;
  height: 100vh;
`

export const SideBarCont = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const VideoItemCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? ' #0f0f0f ' : '#f9f9f9  ')};
  height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
  padding: 10px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    padding-top: 20px;
  }
`
export const LoaderCont = styled.div`
  align-self: center;
  margin-top: 100px;
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
export const FailedPAra = styled.p`
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
export const PlayerContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 350px;
    margin-bottom: 0px;
  }
`
export const TitlePara = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ebebeb' : ' #1e293b')};
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`
export const ViewsLikeCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsPara = styled.p`
  font-size: 15px;
  color: #64748b;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`
export const LikesCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    width: 250px;
  }
`
export const LikeBtn = styled.button`
  color: ${props => (props.liked ? '#2563eb ' : '#64748b ')};
  font-size: 15px;
  border: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  font-weight: 500;
`
export const DislikeBtn = styled.button`
  color: ${props => (props.disLiked ? '#2563eb ' : '#64748b ')};
  font-size: 15px;
  border: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
  font-weight: 500;
`
export const SavedBtn = styled.button`
  color: ${props => (props.isPresent ? '#2563eb ' : '#64748b ')};
  font-size: 15px;
  border: 0px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  font-weight: 500;
`
export const Line = styled.hr`
  width: 100%;
  border: 1px solid #616e7c;
  @media screen and (max-width: 768px) {
    margin-left: 10px;

    width: 95%;
  }
`
export const ChannelCont = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`
export const ChannelLogo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 20px;
  margin-right: 10px;
`
export const ChannelDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Name = styled.p`
  color: ${props => (props.isDark ? '#f1f1f1' : '#313131 ')};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 0px;
`

export const Subs = styled.p`
  color: ${props => (props.isDark ? '#94a3b8 ' : '#475569 ')};
  font-size: 13px;
  font-weight: 500;
`
export const Descri = styled.p`
  color: ${props => (props.isDark ? '#f4f4f4 ' : '#475569 ')};
  font-size: 16px;
  margin-left: 60px;
  font-weight: 400;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    font-size: 13px;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
`

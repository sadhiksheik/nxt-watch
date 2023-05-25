import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideCont = styled.div`
  width: 230px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  padding-top: 20px;
  display: flex;

  flex-direction: column;
  height: 100vh;
  font-family: 'Roboto';
`
export const PathsCont = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  width: 230px;
  background-color: transparent;
`
export const PathsPara = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#475569')};
  font-size: 16px;
  text-decoration: none;
  margin-left: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Head = styled.h1`
  color: ${props => (props.isDark ? '#f1f5f9' : '#475569')};
  font-size: 16px;
`
export const TabsCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 10px;
  margin-bottom: 20px;
`
export const IconCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`
export const IconImg = styled.img`
  height: 25px;
  width: 25px;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#475569')};
  font-size: 14px;
  width: 150px;
`

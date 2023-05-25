import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

export const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  padding-left: 40px;
  height: 60px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    padding-left: 10px;
    height: 50px;
  }
`

export const LogoImg = styled.img`
  height: 28px;
  width: 100px;
  @media screen and (max-width: 768px) {
    height: 25px;
    width: 80px;
    margin-left: 10px;
  }
`
export const InnerCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 200px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin-right: 0px;
  }
`
export const DropDownCont = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
    flex-wrap: wrap;
    height: 70px;
    padding: 10px;
  }
`

export const DarkImg = styled.img`
  height: 25px;
  width: 25px;
`
export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 20px;
    width: 20px;
    color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  }
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
`
export const LogoutBtn = styled.button`
  color: ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  padding: 3px 9px 3px 9px;
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#3b82f6')};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIcon = styled(FiLogOut)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 20px;
    width: 20px;
    color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 14px;
  font-weight: bold;
  width: 90px;
`
export const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopCont = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#e2e8f0')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid ${props => (props.isDark ? '#d7dfe9' : '#0f0f0f')};
`
export const ConfirmBtn = styled.button`
  color: #d7dfe9;
  font-size: 14px;
  border: 1px solid #d7dfe9;
  background-color: #4f46e5;
  padding: 7px 14px 7px 14px;
  border-radius: 5px;
  outline: none;
`
export const BtnCont = styled.div`
  display: flex;
`
export const ClosePopBtn = styled.button`
  color: ${props => (props.isDark ? '#d7dfe9' : '#0f0f0f')};
  font-size: 14px;
  border: 1px solid ${props => (props.isDark ? '#d7dfe9' : '#0f0f0f')};
  background-color: transparent;
  padding: 7px 14px 7px 14px;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
`

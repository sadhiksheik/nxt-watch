import styled from 'styled-components'

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
export const NotCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? ' #0f0f0f ' : '#f9f9f9 ')};
  height: 100vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
  align-items: center;
  text-align: center;
  padding: 20px;
`
export const NotImg = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 50px;
`
export const NotHead = styled.h1`
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  font-size: 30px;
`
export const NotPara = styled.p`
  color: #94a3b8;
  font-size: 20px;
  font-weight: 500;
`

import styled from 'styled-components'

export const Head = styled.p`
  color: white;
  font-size: 20px;
`
export const LoginCont = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  height: 100vh;
`

export const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  padding: 40px;
  border-radius: 15px;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  min-height: 400px;
  width: 400px;
`
export const LoginImage = styled.img`
  height: 40px;
  width: 150px;
  align-self: center;
  margin-bottom: 30px;
`
export const LabelEl = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 14px;
  margin-bottom: none;
  font-weight: 500;
`
export const InputEl = styled.input`
  padding: 10px;
  margin-bottom: 7px;
  border: 1px solid #94a3b8;
`
export const CheckLabel = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 14px;
  margin-left: 2px;
  font-weight: 500;
`
export const CheckCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const LoginBtn = styled.button`
  color: white;
  font-size: 18px;
  padding: 10px;
  background-color: #4f46e5;
  border-radius: 10px;
  border: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
`

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  LoginCont,
  FormCont,
  LoginImage,
  LabelEl,
  InputEl,
  CheckLabel,
  CheckCont,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    passwordType: 'password',
  }

  onUserNameChanged = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordChanged = event => {
    this.setState({password: event.target.value})
  }

  onChecked = () => {
    const {passwordType} = this.state
    if (passwordType === 'text') {
      this.setState({passwordType: 'password'})
    } else {
      this.setState({passwordType: 'text'})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onFormSubmitted = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      passwordType,
      showSubmitError,
      errorMsg,
      userName,
      password,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const imageUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginCont isDark={isDark}>
              <FormCont isDark={isDark} onSubmit={this.onFormSubmitted}>
                <LoginImage src={imageUrl} alt="login" />

                <LabelEl htmlFor="userName" isDark={isDark}>
                  USERNAME
                </LabelEl>
                <br />
                <InputEl
                  value={userName}
                  onChange={this.onUserNameChanged}
                  type="text"
                  id="userName"
                  placeholder="Username"
                />
                <br />
                <LabelEl htmlFor="password" isDark={isDark}>
                  PASSWORD
                </LabelEl>
                <br />
                <InputEl
                  value={password}
                  onChange={this.onPasswordChanged}
                  type={passwordType}
                  id="password"
                  placeholder="Password"
                />
                <br />
                <CheckCont>
                  <input
                    onChange={this.onChecked}
                    type="checkbox"
                    id="checkbox"
                  />
                  <CheckLabel htmlFor="checkbox" isDark={isDark}>
                    Show Password
                  </CheckLabel>
                </CheckCont>
                <LoginBtn type="submit">Login</LoginBtn>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormCont>
            </LoginCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

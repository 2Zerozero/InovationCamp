import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {CgMathPlus} from "react-icons/cg"
import * as S from './styled'
import axios from 'axios';
import {FaAnchor} from "react-icons/fa"

const instanceAxios = axios.create({
  baseURL : process.env.REACT_APP_SERVER_URL
  // baseURL : "http://1.244.223.183"
})

// 유저명 유효성 검사 함수
const isValidUsername = (username) => {
  const regex = /^(?=.*[0-9])(?=.*[a-z])[a-z0-9]{4,10}$/;
  return regex.test(username);
};

// 비밀번호 유효성 검사 함수
const isValidPassword = (password) => {
  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-+])[a-zA-Z0-9!@#$%^&*()\-+]{8,15}$/;
  return regex.test(password);
};

function Login({ modal, closeModal }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleSignUp = () => {
    initTextFiled();
    setIsSignUp(!isSignUp);
  };
  
  const initTextFiled = () =>{
    setUsername("");
    setPassword("");
  }

  const LoginState = async () => {

    try {
      const payload = {
        username:username,
        password:password
      }
      let res = await instanceAxios.post(`/api/user/login`, payload)
      if(res.data.status >= 300){
        alert(res.data.message)
        return;
      }
      initTextFiled();
      console.log(res)
      document.cookie = `accessToken=${res.headers.authorization}; path=/;`
      closeModal();
      } catch (error) {
        console.log(error)
      }
  }

  const SignupState = async () => {
    try {
      const payload = {
        username:username,
        password:password
      }
      let res = await instanceAxios.post(`/api/user/signup`, payload)
      if(res.data.status >= 300){
        alert(res.data.message)
        return;
      }
      console.log(res)
      initTextFiled();
      setIsSignUp(false);
      } catch (error) {
        console.log(error)
      }
  }

  const onLogin = async () => {
    if (!isValidUsername(username)) {
      alert("유저명은 숫자와 영소문자로만 구성하되 각 1개 이상을 포함해야 합니다. 길이는 4이상 10이하이어야 합니다.");
      return;
    }

    if (!isValidPassword(password)) {
      alert("비밀번호는 숫자, 알파벳, 특수문자 !@#$%^&*()-+로만 구성하되 각 1개 이상을 포함해야 합니다. 길이는 8이상 15이하이어야 합니다.");
      return;
    }

    // 유효성 검사를 통과한 경우 로그인 또는 회원가입 처리를 수행합니다.
    isSignUp ? SignupState() : LoginState();
  };

    const inputEmailHandler = (event) => {
      setUsername(event.target.value);
    }

    const inputPasswordHandler = (event) => {
      setPassword(event.target.value);
    }

    return (
      <>
  
        {modal ? (

          <S.Wrap>
            <Container component="main" maxWidth="xs">
              <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
                <CgMathPlus  style={{ 
                  color: '#868E96', 
                  transform: 'rotate(45deg)',
                  fontSize: '2rem' }}
                  onClick={closeModal}
                  />
              </div>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '3px solid rgb(201,201,201)',
                  borderRadius: '15px',
                  padding: '50px 30px',
                }}
              >
                <Avatar style={{ backgroundColor: "#3F9EF2" }} m={{ m: 1, bgcolor: 'secondary.main' }}>
                  <FaAnchor style={{ color: "#202124" }} />
                </Avatar>
                <Typography style={{ color: "#3F9EF2" }} component="h1" variant="h5">
                항구
              </Typography>
              <Typography style={{ color: "#3F9EF2" }} component="h1" variant="h5">
                {isSignUp ? "회원가입" : "로그인"}
              </Typography>
              <TextField
                name='id'
                autoFocus
                autoComplete="current-id"
                label="아이디"
                required
                value={username}
                onChange={inputEmailHandler}
                fullWidth
              />
              <TextField
                margin="normal"
                fullWidth
                name='password'
                autoComplete="current-password"
                label="패스워드"
                type='Password'
                value={password}
                onChange={inputPasswordHandler}
              />
              <FormControlLabel style={{ color: "#3F9EF2" }}
                control={<Checkbox value="remember" color="primary" />}
                label="기억해줘!"
              />

              <Button
                style={{ backgroundColor: "#3F9EF2" }}
                type='submit'
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 3 }}
                onClick={onLogin}
              >
                {isSignUp ? "회원가입" : "로그인"}
              </Button>


              <Button
                style={{ backgroundColor: "#3F9EF2" }}
                type='submit'
                fullWidth
                variant="contained"
                sx={{ mt: 1 }}
                onClick={toggleSignUp}
              >
                {isSignUp ? "로그인 하기" : "회원가입 하기"}
              </Button>
              <Button
                style={{ backgroundColor: "#3F9EF2" }}
                type='submit'
                fullWidth
                variant="contained"
                sx={{ mt: 1 }}
              >
                패스워드 까먹음?
              </Button>
              </Box>
            </Container>
          </S.Wrap>

          
        ) : null }
      </>
    );
}
export default Login;
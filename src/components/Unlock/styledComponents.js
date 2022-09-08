import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`

export const ImgAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LockedImg = styled.img`
  width: 96px;
`

export const Status = styled.p`
  font-family: 'Roboto';
  color: #e2e8f0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-top: 24px;
  margin-bottom: 90px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`

export const LockBtn = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.3px;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`

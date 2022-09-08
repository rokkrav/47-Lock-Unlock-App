import {useState} from 'react'

import {
  AppContainer,
  LockedImg,
  Status,
  LockBtn,
  ImgAndTextContainer,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)
  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const altImg = isLocked ? 'lock' : 'unlock'
  const statusText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const btnText = isLocked ? 'Unlock' : 'Lock'

  const onClickBtn = () => {
    setLock(prevState => !prevState)
  }
  return (
    <AppContainer>
      <ImgAndTextContainer>
        <LockedImg src={imageUrl} alt={altImg} />
        <Status>{statusText}</Status>
      </ImgAndTextContainer>
      <LockBtn type="button" onClick={onClickBtn}>
        {btnText}
      </LockBtn>
    </AppContainer>
  )
}

export default Unlock

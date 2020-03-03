import React from 'react';
import { ContinueBtn } from '../../../shared-components/Buttons';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';
import Success from '../../../assets/images/success.png';

const defaultStyle = {
  left: '50%',
  opacity: 0,
  transition: `all 200ms ease-in 100ms`
}
const transitionStyles = {
  entering: { left: '50%', opacity: 0 },
  entered: { left: '50%', opacity: 1 },
  exiting: { left: '40%', opacity: 1 },
  exited: { left: '40%', opacity: 0 }
}

export default ({ isShown, clickedContinue, clickedPrevious }) => (
  <Transition
    in={ isShown }
    timeout={ 300 }
    mountOnEnter
    unmountOnExit
  >
    { state => (
      <Styled.Paper
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <Styled.Container>
          <Styled.Image src={ Success } alt=""/>
          <h3 style={{ textAlign: 'center' }}>Successfully!</h3>
          <Styled.Notification>You are ready to use the DXpert Wallet and Decentralized Exchange!</Styled.Notification>
            <ContinueBtn 
              clicked={ clickedContinue }
              text="Unlock the wallet" />
        </Styled.Container>
      </Styled.Paper>
    ) }
  </Transition>
)
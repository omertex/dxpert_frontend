import React from 'react';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  opacity: 0,
  transition: `all 300ms ease-in`
}
const transitionStyles = {
  entering: { opacity: 0, },
  entered: { opacity: 1, },
  exiting: { opacity: 1, },
  exited: { opacity: 0, }
}

export default ({ children,isShownPopUp }) => (
  <Transition
    in={ isShownPopUp }
    timeout={ 300 }
    mountOnEnter
    unmountOnExit
  >
    { state => (
      <Styled.Underlayer
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <Styled.PopUpContent visible={ isShownPopUp }>
          { children }
        </Styled.PopUpContent>
      </Styled.Underlayer>
    ) }
  </Transition>
)
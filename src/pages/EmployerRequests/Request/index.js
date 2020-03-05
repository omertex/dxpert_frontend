import React, { memo, useState } from 'react';
import * as Styled from './styled';
import { Transition } from 'react-transition-group';

const defaultSkills = {
  height: 36,
  overflow: 'hidden',
  transition: 'all 200ms ease-in'
}
const transitionSkills = {
  entering: { height: 36, },
  entered: { height: 'auto', },
  exiting: { height: 'auto', },
  exited: { height: 36, }
}

export default memo(({ status, walletID, gender, age, skills, time }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleSkillsExpanded = () => setExpanded(!isExpanded);

  return (
    <Styled.Request status={ status }>
      { status === "pending" && <Styled.Pending fontSize="small" /> }
      { status === "completed" && <Styled.Completed fontSize="small" /> }
      { status === "failed" && <Styled.Failed fontSize="small" /> }
      <Styled.WalletID>{walletID}</Styled.WalletID>
      <Styled.Gender>{gender}</Styled.Gender>
      <Styled.Age>{age}</Styled.Age>
      <Transition
        in={ isExpanded }
        timeout={ 200 }
      >
        { state => (
          <Styled.Skills
            style={{
              ...defaultSkills,
              ...transitionSkills[state]
            }}
          >
            {skills}
          </Styled.Skills>
        ) }
      </Transition>
      <Styled.Expand 
        onClick={ toggleSkillsExpanded }
        expanded={ isExpanded }
      />
      <Styled.Time>{ time }</Styled.Time>
    </Styled.Request>
  )
})
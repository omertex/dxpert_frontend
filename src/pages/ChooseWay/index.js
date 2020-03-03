import React from "react";
import { ContinueBtn, BorderBtn, ChooseWayBtn } from '../../shared-components/Buttons';
import * as Styled from "./styled";
import { Link } from 'react-router-dom';

function ChooseWay() {
  return (
    <Styled.Container>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vivamus
        orci, sed curabitur condimentum ut eget volutpat ornare. Sed
        pellentesque bibendum odio integer elementum quam eget.
      </h3>
      <h4>Choose your way</h4>
      <Styled.RoleWrapper>
        <ChooseWayBtn 
          text="For applicants" 
        />
        <ChooseWayBtn 
          text="For employers"
          second= { true }
        />
      </Styled.RoleWrapper>
      <Styled.AccountWrapper>
        <Link to="/wallet-creation-tutorial">
          <BorderBtn 
            text="Create account" 
            disabled={ false } 
          />
        </Link>
        <ContinueBtn
          text="Connect account" 
          disabled={ false } 
        />
      </Styled.AccountWrapper>
    </Styled.Container>
  );
}

export default ChooseWay;

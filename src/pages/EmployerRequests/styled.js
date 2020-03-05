import styled from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  flex-grow: 1;
  padding-top: 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  text-align: left;
  margin: 0 0 18px 80px;
  letter-spacing: -0.4px;
`;

export const Requests = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
`;
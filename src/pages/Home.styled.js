import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  top: 80px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    top: 110px;
  }
`;

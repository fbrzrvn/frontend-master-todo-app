import styled from 'styled-components';
import { MEDIA } from '../../styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 20px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.footerText};
  background: ${({ theme }) => theme.listBackground};
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
  border-radius: 0px 0px 5px 5px;
  transition: all 1s ease;
  ${MEDIA.small} {
    font-size: 12px;
    padding: 16px 24px;
  }
`;

export const Text = styled.p`
  align-text: center;
`;

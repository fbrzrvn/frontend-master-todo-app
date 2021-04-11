import styled from 'styled-components';
import { MEDIA } from '../../styles/media';
import { COLOR } from '../../styles/variables';

export const FooterContainer = styled.div`
  position: relative;
`;

export const FooterWrap = styled.div`
    display: flex;
    justify-content: space-between;
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
  }
`;

export const FooterCountText = styled.p``;

export const FooterClearText = styled.p`
  color: ${({ theme }) => theme.footerText};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;

export const FooterListWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 40px;
  padding: 15px 0 19px;
  background: ${({ theme }) => theme.listBackground};
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
  border-radius: 5px;
  transition: background 1s ease;
  ${MEDIA.medium} {
    box-shadow: unset;
    padding: 12px 0;
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
  }
`;

export const FooterListItem = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ id, status, theme }) =>
    status === id ? COLOR.brightBlue : theme.footerText};
  cursor: pointer;
  & + & {
    margin-left: 18px;
  }
  &:hover {
    color: ${({ id, status, theme }) => status !== id && theme.hover};
  }
`;

export const FooterTagline = styled.p`
  font-size: 14px;
  letter-spacing: -0.19px;
  text-align: center;
  color: ${({ theme }) => theme.footerText};
  ${MEDIA.medium} {
    margin-top: 49px;
  }
`;

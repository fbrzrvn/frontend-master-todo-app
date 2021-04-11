import styled from 'styled-components';
import { MEDIA } from '../../styles/media';

export const FormWrap = styled.div`
  background: ${({ theme }) => theme.listBackground};
  border-radius: 5px;
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.dropShadow};
  display: flex;
  padding: 1.5em 1.25em;
  margin: 0 auto 1em;
  width: 100%;
  transition: background 1s ease;

  ${MEDIA.small} {
    padding: 0.75em 0.6em;
  }
`;

export const FormBtn = styled.button`
  background: ${({ theme }) => theme.listBackground};
  border: 1px solid ${({ theme }) => theme.checkBorder};
  border-radius: 50px;
  height: 28px;
  width: 28px;
  margin-right: .75em};
  transition: all 1s;

  &:active, &:focus {
    outline: none;
  }

  ${MEDIA.small} {
      height: 20px;
      width: 20px;
      margin-right: .6em
    };
  }
`;

export const FormInput = styled.input`
  color: ${({ theme }) => theme.inputText};
  background: ${({ theme }) => theme.listBackground};
  border: none;
  font: inherit;
  width: 100%;
  transition: all 1s ease;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${MEDIA.small} {
    font-size: 1.125em;
  }
`;

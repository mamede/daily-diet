import styled, { css } from 'styled-components/native';

import { ButtonProps as Props } from './AddItemButton.types';

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  ${({ isDiet, active }) => {
    if (isDiet) {
      return css`
        background-color: ${({ theme }) => 
          active && isDiet ? theme.colors.green.light : theme.colors.red.light};
        border: 1px solid ${({ theme }) => 
          active && isDiet ? theme.colors.green.dark : theme.colors.red.dark};
      `
    }
  }}
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Status = styled.Text<Props>`
  width: 8px;
  height: 8px;
  background-color: ${({ isDiet, theme }) =>
    isDiet ? theme.colors.green.dark :  theme.colors.red.dark};
  margin-right: 8px;
  border-radius: 8px ;
`
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Text = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => 
  css`
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray[100]};
  `}
`;
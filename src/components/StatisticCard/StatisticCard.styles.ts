import styled from "styled-components/native";

interface ContainerProps {
  color: string;
  size?: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${({size}) => size ? size : 100}%;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-align: center;
`
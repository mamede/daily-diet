import styled from "styled-components/native";

interface ContainerProps {
  isLow?: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme, isLow }) => 
    isLow ? theme.colors.red.light : theme.colors.green.light };
  margin-bottom: 40px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  height: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) =>theme.fontSize.xx}px;
  font-family: ${({ theme }) =>theme.fontFamily.bold};
  color: ${({ theme }) =>theme.colors.gray[100]};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 20px;
`;
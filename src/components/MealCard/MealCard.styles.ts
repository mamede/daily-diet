import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'

interface StatusProps {
  isDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;
  padding: 16px 12px;
  margin-bottom: 8px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const Separator = styled.View`
  height: 14px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray[400]};
  margin: 0 12px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 6px;
  background-color: ${({ isDiet, theme }) =>
    isDiet ? theme.colors.green.mid :  theme.colors.red.mid};
`;
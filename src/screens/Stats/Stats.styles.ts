import { SafeAreaView } from 'react-native-safe-area-context'
import styled, {css} from "styled-components/native";

interface HeaderStaticsProps {
  isDiet: boolean
}

export const Container  = styled.View``;

export const Page = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  margin-top: -10px;
  border-radius: 20px ;
  align-items:center;
`;

export const Title = styled.Text`
  font-size:  ${({ theme }) =>theme.fontSize.sm}px;
  color:  ${({ theme }) =>theme.colors.gray[100]};
  font-family:  ${({ theme }) =>theme.fontFamily.bold};
  margin-bottom: 23px;
`;

export const ContainerStatistic = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderStaticContainer = styled.View<HeaderStaticsProps>`
  height: 180px;
  background-color: ${({theme, isDiet}) => 
    isDiet ? theme.colors.green.mid : theme.colors.red.mid};
  align-items: center ;
  padding-top: 70px;
`;

export const HeaderStaticTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xx}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const HeaderStaticSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 1;
  left: 24px;
  top: 45px;
  align-self: flex-start;
`;
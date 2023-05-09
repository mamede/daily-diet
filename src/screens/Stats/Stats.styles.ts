import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface StaticsProps {
  isDiet: boolean
}

export const Container = styled(SafeAreaView)<StaticsProps>`
  height: 100%;
  background-color: ${({theme, isDiet}) => 
    isDiet ? theme.colors.green.mid : theme.colors.red.mid};
`;

export const HeaderStaticContainer = styled.View<StaticsProps>`
  background-color: ${({theme, isDiet}) => 
    isDiet ? theme.colors.green.mid : theme.colors.red.mid};
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 28px;
  margin-left: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const HeaderStaticContent = styled.View`
  width: 100%;
  align-items: center;
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
  margin-bottom: 34px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size:  ${({ theme }) =>theme.fontSize.sm}px;
  color:  ${({ theme }) =>theme.colors.gray[100]};
  font-family:  ${({ theme }) =>theme.fontFamily.bold};
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const ContainerHighAndLowLights = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;

export const HeaderStaticContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 24px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const HeaderStaticTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-left: 85px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 40px;
`;

export const DateContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateContent = styled.TouchableOpacity`
  width: 48%;
`;

export const DateInputContainer = styled.View``;


export const TimeContent = styled.TouchableOpacity`
  width: 48%;
`;

export const TimeInputContainer = styled.View``;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DietButton = styled.View`
  width: 48%;
`;

export const NotDietButton = styled.View`
  width: 48%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 4px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  margin-top: 96px;
`;
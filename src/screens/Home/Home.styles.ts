import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  margin-top: ${Platform.OS === 'ios' ? 40 : StatusBar.currentHeight}px;
`;

export const HomeContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileContainer = styled.View`
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50px;
  width: ${Platform.OS === 'android' ? 40 : 50}px;
  height: ${Platform.OS === 'android' ? 40 : 50}px;
  overflow: hidden;
`;

export const Profile = styled.Image`
  width: 100%;
  height: 100%;
`;

export const NewMealContianer = styled.TouchableOpacity`

`;

export const NewMealTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => 
  css`
    font-size: ${theme.fontSize.md}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray[100]};
  `}
`;
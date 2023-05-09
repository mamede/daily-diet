import { TouchableOpacityProps } from "react-native"

export interface ButtonProps{
  active?: boolean
  title?: string
  isDiet?: boolean
  onPress?: TouchableOpacityProps['onPress'];
}
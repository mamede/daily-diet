import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`

export const InputText  = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-radius:6px;
  background-color: ${({ theme })=> theme.colors.white};
  border: 1px solid ${({ theme })=> theme.colors.gray[500]};
  color: ${({ theme })=> theme.colors.gray[200]};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 4px;
`;
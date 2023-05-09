import React, { useState } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform, Keyboard } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// ICONS
import { ArrowLeft } from "phosphor-react-native";

// COMPONENTS
import { Input } from "@components/Input/Input";
import { AddItemButton } from '@components/AddItemButton/AddItemButton';
import { Button } from '@components/Button/Button';

// STYLES
import theme from '@theme/index';
import * as S from "./AddMeal.styles";

// TYPES
type TypeMode = "date" | "time";

export function AddMeal() {
  const navigation = useNavigation();

  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [description, setDescrition] = useState('');

  const [isActive, setIsActive] = useState(false);
  
  const isDiet = true

  function onDateTimeSelected(event: any, value: any) {
    if (datePicker === true) {
      let datestring = new Date(value);
      setDate(
        `${datestring.getDate()}/${
          datestring.getMonth() + 1
        }/${datestring.getFullYear()}`
      );
      setDatePicker(false);
    } else {
      let datestring = new Date(value);
      setTime(
        `${datestring.getHours()}:${String(datestring.getMinutes()).padStart(
          2,
          "0"
        )}`
      );
      setTimePicker(false);
    }
  }

  function showDateTimePicker(type: TypeMode) {
    if (type === "date") setDatePicker(true);
    else setTimePicker(true);
  }

 // TODO: Hide keyboard when click on the screen
  return (
    <S.Container>
      <S.HeaderStaticContainer>
        <S.Button onPress={()=>{navigation.goBack()}}>
          <ArrowLeft 
            size={24}
            color={theme.colors.gray[200]}
            weight={Platform.OS === 'ios' ? 'bold' : 'regular'}
            style={{ marginRight: 12 }}
          />
        </S.Button> 
        <S.HeaderStaticTitle>Nova Refeição</S.HeaderStaticTitle>
      </S.HeaderStaticContainer>
      <S.Content>

        {(datePicker || timePicker) && (
          <DateTimePicker
            value={datePicker ? new Date() : new Date(Date.now())}
            mode={datePicker ? "date" : "time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateTimeSelected}
          />
        )}

        <Input
          title="Nome"
          onChangeText={(text) => setName(text)}
          value={name}
          onBlur={Keyboard.dismiss}
        />

        <Input
          title="Descrição"
          multiline={true}
          numberOfLines={7}
          onChangeText={setDescrition}
          value={description}
          textAlignVertical="top"
          onBlur={Keyboard.dismiss}
        />

        <S.DateContainer>
          <S.DateContent onPress={() => showDateTimePicker("date")}>
            <S.DateInputContainer pointerEvents="none">
              <Input
                title="Data"
                numberOfLines={1}
                editable={false}
                defaultValue={date}
                value={date}
              />
            </S.DateInputContainer>
          </S.DateContent>

          <S.TimeContent onPress={() => showDateTimePicker("time")}>
            <S.TimeInputContainer pointerEvents="none">
              <Input
                title="Hora"
                numberOfLines={1}
                editable={false}
                value={time}
                defaultValue={time}
              />
            </S.TimeInputContainer>
          </S.TimeContent>
        </S.DateContainer>

        <S.TitleContainer>
          <S.Title>Está dentro da dieta?</S.Title>
        </S.TitleContainer>

        <S.ButtonContainer>
          <S.DietButton>
            <AddItemButton
              title='Sim'
              active={isActive}
              isDiet={isDiet}
              onPress={() => setIsActive(!isActive)}
            />
          </S.DietButton>
          <S.NotDietButton>
            <AddItemButton title='Não' />
          </S.NotDietButton>
        </S.ButtonContainer>

        <S.FooterContainer>
          <Button title='Cadastrar Refeição' />
        </S.FooterContainer>
      </S.Content>
    </S.Container>
  );
}
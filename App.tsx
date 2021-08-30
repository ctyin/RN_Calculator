import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';

export default function App() {
  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);
  let [bool, setBool] = useState(true);
  let [operator, setOperator] = useState("");

  const updateNumber = (currNum: number) => {
    if (bool) {
      setNumber1(number1*10 + currNum);
    } else {
      setNumber2(number2*10 + currNum);
    }
  }

  const calculate = () => {
    if (operator === "+") {
      setNumber1(number1 + number2);
    } else if (operator === "-") {
      setNumber1(number1 - number2);
    } else if (operator === "*") {
      setNumber1(number1 * number2);
    } else if (operator === "/") {
      setNumber1(number1 / number2);
    }
    setNumber2(0);
  }

  const clear = () => {
    setNumber1(0);
    setNumber2(0);
    setOperator("");
    setBool(true);
  }

  const plusSign = () => {
    if (operator !== "") {
      calculate();
    }
    setOperator("+");
    setBool(false);
  }

  const minusSign = () => {
    if (operator !== "") {
      calculate();
    }
    setOperator("-");
    setBool(false);
  }

  const multiplySign = () => {
    if (operator !== "") {
      calculate();
    }
    setOperator("*");
    setBool(false);
  }

  const divideSign = () => {
    if (operator !== "") {
      calculate();
    }
    setOperator("/");
    setBool(false);
  }

  const equalsSign = () => {
    calculate();
    setOperator("");
    setBool(true);
  }

  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
      <Text>{bool ? number1 : number2}</Text>
      <Row>
        <>
          <Button 
            onPress={() => {clear()}}
            text="C"
            size="double"
            theme="accent"
          />
          <Button 
            onPress={() => {plusSign()}}
            text="+"
            size="double"
            theme="accent"
          />
          <Button 
            onPress={() => {minusSign()}}
            text="-"
            size="double"
            theme="accent"
          />
          <Button 
            onPress={() => {multiplySign()}}
            text="*"
            size="double"
            theme="accent"
          />
          <Button 
            onPress={() => {divideSign()}}
            text="/"
            size="double"
            theme="accent"
          />
          <Button 
            onPress={() => {equalsSign()}}
            text="="
            size="double"
            theme="accent"
          />
          
        </>
      </Row>
      <Row>
        <>
        <Button 
          onPress={() => {updateNumber(1)}}
          text="1"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(2)}}
          text="2"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(3)}}
          text="3"
          size="double"
          theme="accent"
        />
        </>
      </Row>
      <Row>
        <>
        <Button 
          onPress={() => {updateNumber(4)}}
          text="4"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(5)}}
          text="5"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(6)}}
          text="6"
          size="double"
          theme="accent"
        />
      </>
      </Row>
      <Row>
        <>
        <Button 
          onPress={() => {updateNumber(7)}}
          text="7"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(8)}}
          text="8"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(9)}}
          text="9"
          size="double"
          theme="accent"
        />
        <Button 
          onPress={() => {updateNumber(0)}}
          text="0"
          size="double"
          theme="accent"
        />
        </>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceAfter: {
    paddingBottom: 10
  }
});

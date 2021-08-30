import React from "react";
import { View } from "react-native";

interface Props {
  children: JSX.Element;
}

export default ({ children } : Props) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);
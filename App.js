import React, { Component } from 'react';
import { } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { booleanLiteralTypeAnnotation } from '@babel/types';

import Homeberita from"./screen/Homeberita";
import Detailberita from "./screen/Detailberita";


const AppNavigator = createStackNavigator(
  {
    Homeberita: Homeberita,
    Detailberita: Detailberita
  },
  {
    initialRouteName: "Homeberita"
  }
);

export default createAppContainer(AppNavigator);
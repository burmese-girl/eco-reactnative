import React from 'react';
import { Falsy, GestureResponderEvent, RecursiveArray, RegisteredStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ActionButton = (props: { handleActionButtonPress: ((event: GestureResponderEvent) => void) | undefined; style: boolean | ViewStyle | RegisteredStyle<ViewStyle> | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>> | null | undefined; shouldFillIcon: any; iconSize: any; filledIconName: any; filledIconColor: any; emptyIconName: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <TouchableOpacity onPress={props.handleActionButtonPress}>
        <View style={props.style}>
          {props.shouldFillIcon ? 
            <MCIcon size={props.iconSize} name={props.filledIconName} color={props.filledIconColor} /> : 
            <MCIcon size={props.iconSize} name={props.emptyIconName} color="black" />
          }
          {props.children}
        </View>
      </TouchableOpacity>
  )
}

ActionButton.defaultProps = {
  style: {
    marginHorizontal: 20
  },
  iconSize: 30,
  filledIconColor: '#76ff03'
}

export default ActionButton;
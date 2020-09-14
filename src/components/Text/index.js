import React from "react";
import {View} from "react-native";
import {Caption, Headline, Subheading, Text, Title} from 'react-native-paper'
import theme from "../../utilities/styling";


export const TextComponent = (props) => (
    <Text
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[{fontSize: 14}, props.style]}
    >
        {props.children}
    </Text>
);

export const BoldText = (props) => (
    <Text
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[{
            fontSize: 14
        }, props.style]}>
        {props.children}
    </Text>
);

export const TitleComponent = (props) => (
    <Title
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[props.style]}
    >
        {props.children}
    </Title>
);

export const SubheadingComponent = (props) => (
    <Subheading
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[props.style]}>
        {props.children}
    </Subheading>
);

export const CaptionComponent = (props) => (
    <Caption
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[{fontWeight: '500'}, props.style]}>
        {props.children}
    </Caption>
);
export const HeadlineComponent = (props) => (
    <Headline
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[props.style]}>
        {props.children}
    </Headline>
);

export const Label = (props) => (
    <View style={{flexDirection: 'row', height: 32, alignItems: 'flex-start'}}>
        <Text numberOfLines={2}
              style={{fontSize: theme.smallFontSize, color: props.themeColor}}>
            {props.children}
        </Text>
        <Subheading style={{fontSize: theme.extraSmallFontSize, color: theme.redColor}}>
            {props.required ? " *" : ""}
        </Subheading>
    </View>
);

export const BoldTextComponent = (props) => (
    <Text
        accessibilityLabel={typeof props.children === "string" || typeof props.children === "number" ? props.children.toString() : `ID_NOT_AVAILABLE`}
        style={[{
            fontSize: props.fontSize || theme.smallFontSize,
            color: props.color || '#616161'
        }, props.style]}
        numberOfLines={props.numberOfLines || 1}>
        {props.children}
    </Text>
);

export const ErrorTextComponent = (props) => (
    <Text style={[{
        fontSize: theme.smallFontSize,
        color: theme.redColor,
        marginVertical: 5
    }, props.style]}
          numberOfLines={props.numberOfLines || 1}>
        {props.children}
    </Text>
);



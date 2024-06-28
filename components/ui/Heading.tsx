import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors.conts";
import { FC } from "react";

interface IHeading {
    title: string;
    style?: { [key: string]: string | number }
}

const Heading: FC<IHeading> = ({ title, style }) => {
    return (
        <View>
            <Text style={[styles.title, style]}>{title}</Text>
        </View>
    )
};

export default Heading;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.accent,
        textAlign: 'center',
        padding: 12
    }
})
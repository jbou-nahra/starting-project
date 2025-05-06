import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton(props){
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => 
                pressed ? [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer} 
                onPress={props.onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>  
        </View>
          
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        borderRadius: 28
    },
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overFlow: 'hidden'
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.75
    }
})
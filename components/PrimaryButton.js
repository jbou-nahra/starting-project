import { View, Text, Pressable, StyleSheet } from "react-native";

function pressHandler(){
    console.log('Pressed!')
}

function PrimaryButton(props){
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => 
                pressed ? [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer} 
                onPress={pressHandler} 
                android_ripple={{color: '#640233'}}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>  
        </View>
          
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: '#72063c',
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
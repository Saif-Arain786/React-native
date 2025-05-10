import { View ,Text,Image, StyleSheet,TextInput,Button, TouchableOpacity} from "react-native";
import React ,{useState} from "react";


const Header = () => {

    const [text, setText] = useState("love you");
    const submitText = () => {
        console.log(text);
    };
    return (
        <>
        <Text style={{ fontSize: 20, fontWeight: "bold",color:"aqua" }}>{text}</Text> 
        <View style={{ height: 200, backgroundColor: "#f8f8f8", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold",color:"aqua" }}>My App</Text>  
            <View>
            <Image source={{ uri:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}} style={styles.picture}  /></View>
            <TextInput 
    style={styles.input} 
    placeholder="Enter text" 
    placeholderTextColor="gray" 
    onChangeText={(text) => setText(text)}
    keyboardType="default"
    secureTextEntry={true} 
    autoCorrect={true}
    // maxLength={50} // Maximum number of characters allowed
    // multiline={true} // Allows multiple lines of text
    // numberOfLines={4} // Number of lines for multiline input
    // editable={true} // Determines if the input is editable
    // autoCapitalize="none" // Controls capitalization ('none', 'sentences', 'words', 'characters')
    // autoCorrect={false} // Enables/disables auto-correction
    // textAlign="center" // Aligns text ('left', 'center', 'right')
    // returnKeyType="done" // Customize the return key ('done', 'go', 'next', etc.)
    // onSubmitEditing={() => console.log("Submitted")} // Callback when the return key is pressed
    // blurOnSubmit={true} // Dismisses the keyboard on submit
    // selectionColor="blue" // Color of the text selection handle
    // underlineColorAndroid="transparent" // Removes underline on Android
    // caretHidden={false} // Hides the cursor
    // contextMenuHidden={false} // Hides the context menu (copy/paste)
    // autoFocus={true} // Automatically focuse
    // maxLength={50} // Maximum number of characters allowed
    // multiline={true} // Allows multiple lines of text
    // numberOfLines={4}
/>       </View>
{/* <Button title="submit" onPress={
    ()=>submitText()
}></Button> */}
<TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: "aqua", padding: 10, borderRadius: 5, marginTop: 10 }} onPress={submitText}>
    <Text>submit</Text>

</TouchableOpacity>
</>
    );
    }
    const styles = StyleSheet.create({
        picture:{
            width: 100,
            height: 100,
            borderRadius: 25,
            marginLeft: 10,
        },
        input: {
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            marginTop: 10,
            paddingLeft: 10,
            width: 200,
            borderRadius: 5,
            color: "black",
            
        },
    })

    export default Header;
import { View ,Text, StyleSheet} from "react-native"
// import { Header } from "react-native/Libraries/NewAppScreen"
import Header from "./component/header"

const App = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'white'}}>  
      <Text>
        Hello World
      </Text>
      <Text style={styles.text}>
        Hello World
      </Text>
      <Header />
    </View>
    
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  },
  text:{
    color:'green',
    fontSize:20
  }
})
export default App
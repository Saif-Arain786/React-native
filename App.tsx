// import { Header } from "react-native/Libraries/NewAppScreen"
// import Header from "./component/header"
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MainScreen from './src/MainScreen.jsx'; // Your main screen/component
// import ProductList from "./component/apiproducts.jsx";
import ProductLists from "./component/paper.jsx"


const App = () => {
  return(
    <>
    {/* <Header /> */}
    {/* <SafeAreaProvider>
      <PaperProvider >
        <MainScreen />
      </PaperProvider>
    </SafeAreaProvider> */}
    {/* <ProductList/> */}
    <PaperProvider>
      <ProductLists/>
    </PaperProvider>
    
    </>
  
    
  )
}
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#6200ee',
//     secondary: '#03dac6',
//   },
// };

export default App
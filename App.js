import { createAppContainer, createStackNavigator } from "react-navigation";

import PeoplePage from "./src/pages/PeoplePage";
import PersonDetailPage from "./src/pages/PersonDetailPage";

import capitalizeFirstLetter from "./src/util/capitalizeFirstLetter";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
    PersonDetail: {
      screen: PersonDetailPage,
      navigationOptions: ({ navigation }) => {
        const personName = capitalizeFirstLetter(
          navigation.state.params.person.name.first
        );
        return {
          title: personName,
          headerTitleStyle: {
            fontSize: 30,
            color: "#fff",
            flexGrow: 1,
          },
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: "Contatos",
      headerTintColor: "#fff", // cor da setinha de navegação para voltar de pagina
      headerStyle: {
        backgroundColor: "#6ca2f7",
        borderBottomWidth: 1,
        borderBottomColor: "#c5c5c5",
      },
      headerTitleStyle: {
        fontSize: 30,
        color: "#fff",
        flexGrow: 1,
        textAlign: "center",
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

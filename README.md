To use this repository:

First, clone our front end repository: git clone https://github.com/Montana-Code-School/someones-there

Second, clone our back end repository: git clone https://github.com/Montana-Code-School/someones-there-back-end

Then: npm install

To run the application on your mobile device, install the Expo phone application.

Then, run npm run start followed by exp send -s <your phone number or email>.

This will send a link to your phone that will open the application.

If you want to run the iOS or Android simulator on your computer, then install Expo EDE: https://expo.io/tools#xde
Scripts

To run on android devices, use terminal command npm run android.

To run on iOS devices, use command npm run ios.

To run the server, use command npm run start.

To run the build, use command npm run build.

RootStack is located in App.js for the createStackNavigator.

onPress={ () => this.props.navigation.navigate('//name in RootStack to corresponding page')} is used in our buttons using 'react-navigation' to navigate to pages.
Libraries used:

    react-native-elements - used for styled components: https://react-native-training.github.io/react-native-elements/

    react-navigation - routes between pages, RootStack, withNavigation: https://reactnavigation.org/

    react-native-modal-dropdown - dropdown menu in DashboardPage, PreferencesPage, and CrisisPage: https://www.npmjs.com/package/react-native-modal-dropdown

Pictures

Any pictures can be found in the placement-pictures folder.
Back End Repo

Our back end repo is located at someones-there-back-end: https://github.com/Montana-Code-School/someones-there-back-end
Resources

-Tutorial for authenticating react-native applications: https://medium.com/@alexmngn/the-essential-boilerplate-to-authenticate-users-on-your-react-native-app-f7a8e0e04a42

-Tutorial being used for our back-end:https://rationalappdev.com/api-backend-with-nodejs-express-and-mongodb-for-react-native-apps/
Daily logs

Tuesday June 19th 2018:

    created front end
    got expo working
    started back end

Wednesday June 20th 2018:

    routes set up between pages
    made LandingPage,

Thursday June 21st 2018:

    worked on pages,
    created our navigation,

Friday June 22nd 2018:

    worked on SetUpPage,
    changed some styling on LandingPage,
    worked on LogInPage,
    installed drop down menu on LogInPage
    cleaned up code

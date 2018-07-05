import { Permissions, Notifications } from 'expo';


 const registerForPushNotifications = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
  this.subscription = Notifications.addListener(this.handleNotification);
  console.log(this.subscription);
  //
  // this.setState({
  //   token,
  // });
}

export default registerForPushNotifications;

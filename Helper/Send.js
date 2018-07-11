const sendPushNotification = (token,title,body) => {
  return fetch('https://exp.host/--/api/v2/push/send', {
    body: JSON.stringify({
      to: token,
      title: title,
      body: body,
      data: { message: `${title} - ${body}` },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}

export default sendPushNotification;

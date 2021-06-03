const config = {
    apiKey: "AIzaSyASHPw5Y2txCeGJFYXn3GVdAlbR0SJS-YU", //파이어베이스 설정에 있음
    authDomain: "thanksmemo-19012.firebaseapp.com",
    databaseURL: "https://moonyou-test-default-rtdb.firebaseio.com",
    projectId: "moonyou-test",
    storageBucket: "moonyou-test.appspot.com",
    messagingSenderId: "926150406764"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {
  firestore
};
import './sass/style.sass';
import './scripts/homeBackgroundAnimation'
import './scripts/headerAnimation';
import './scripts/slider';
import './scripts/burger-menu.js';
import './scripts/getTicket';
import './scripts/modal-window'
import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import GetTicket from './scripts/getTicket'
import firebaseConfig from './scripts/firebase.config'


firebase.initializeApp(firebaseConfig);

const getTicket = new GetTicket(firebase)
getTicket.init()

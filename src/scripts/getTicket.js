import firebase from "firebase";

export default class GetTicket{
    constructor(firebase){
        const app = firebase
        this.init = () => {
            const name = document.querySelector('#name').value,
                email = document.querySelector('#email').value,
                phone = document.querySelector('#phone').value,
                sendBtn = document.querySelector('.close-modal'),
                modalWindow = document.querySelector('.modal-window');


            const newId = app.database().ref().child('members').push().key;

            const writeUserData = (fullName, email, phone) => {
                const data = {}
                data['customers/' + newId] = {
                    fullName: fullName,
                    email: email,
                    phone : phone
                }

                firebase.database().ref().update(data);
            }
            sendBtn.addEventListener('click', () => {
                writeUserData(name, email, phone, ()=>{

                });
                alert('We will contact you!')
                modalWindow.classList.remove('active-modal')
            })
        }
    }
}



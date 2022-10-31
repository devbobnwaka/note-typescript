import { elements, state } from "./base.js";
import { handleClick, handleCloseClick } from "./views/indexView.js";
import { validateVal } from "./models/Login.js";
import Validator from "./validate.js";
import { changeBorder } from "./views/loginView.js";

elements.getClick?.addEventListener('click', handleClick);
elements.overlay?.addEventListener('click', handleCloseClick);

validateVal(elements.mail!, 'mail');
validateVal(elements.mail2!, 'mail');

validateVal(elements.username!, 'username');

validateVal(elements.password!, 'password');
validateVal(elements.password2!, 'password');

validateVal(elements.confirmPassword!, 'confirmPassword');

elements.signupBtn?.addEventListener('click', e => {
    e.preventDefault();
    let validateEmail = new Validator(elements.mail!.value);
    let validateUsername = new Validator(elements.username!.value);
    let validatePass = new Validator(elements.password!.value);
    let validateCPass = new Validator(elements.confirmPassword!.value);

    if(elements.password!.value !== elements.confirmPassword!.value) {
        changeBorder(validatePass.email(), elements.password!);
        changeBorder(validateCPass.email(), elements.confirmPassword!);
    };

    if(validateEmail.email() && validateUsername.stringLen() && validatePass.stringLen() && validateCPass.stringLen()){
        let userData = {
            id: Date.now(),
            email: elements.mail!.value,
            username: elements.username!.value,
            password: elements.password!.value,
            notes: []
        }        
    }
});

elements.signIn?.addEventListener('click', e => {
    e.preventDefault();
    let validateEmail = new Validator(elements.mail2!.value);
    let validatePass = new Validator(elements.password2!.value);
    if(validateEmail.email() && validatePass.stringLen()){
        console.log('true');
    }
});


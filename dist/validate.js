export default class Validator {
    constructor(val) {
        this.val = val;
    }
    email() {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.val.match(mailFormat)) {
            return true;
        }
        else {
            return false;
        }
    }
    stringLen() {
        if (this.val.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
}

export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zip: number;
    city: string;


    // obj kann any sein z.B. number oder string von firstname usw.
    constructor(obj?: any) {
        //this.firstName = obj ? obj.firstName : ''; ist eine if else frage 
        //wenn obj? = es gibt dann obj.firstname wenn nicht dann (:) mit doppelpunkten = das hier ''
        // einfach geschireben if(obj){this.firstname = obj.firstname}else{this.firstname = ''}
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zip = obj ? obj.zip : '';
        this.city = obj ? obj.city : '';
    }


}
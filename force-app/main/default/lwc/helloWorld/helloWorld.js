import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'Devops Fun';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}
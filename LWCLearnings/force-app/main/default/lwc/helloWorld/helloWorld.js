import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track
    greeting = '';

    handleChange(event) {
        this.greeting = event.target.value;
    }

    get resultValue() {
        return `Hey ${this.greeting}! Welcome to LWC`.toUpperCase();
    }
}
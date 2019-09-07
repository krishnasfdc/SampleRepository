import { LightningElement, api } from 'lwc';

export default class AccountFind extends LightningElement {

    @api accName;

    handleChange(event) {

        /* eslint-disable no-console */
        console.log(event.target.value);
    }
}
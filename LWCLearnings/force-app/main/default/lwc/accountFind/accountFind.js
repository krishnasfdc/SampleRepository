import { LightningElement, api, wire } from 'lwc';
import findAllAccounts from '@salesforce/apex/LWC_AccountController.findAllAccounts';

export default class AccountFind extends LightningElement {

    @api accName;

    @wire(findAllAccounts) allAccounts;

    get listIsNotEmpty() {

        return this.allAccounts && Array.isArray(this.allAccounts.data) && this.allAccounts.data.length > 0;
    }

    handleChange(event) {

        /* eslint-disable no-console */
        console.log(event.target.value);
    }
}
public with sharing class LWC_AccountController {
    public LWC_AccountController() {

    }

    @AuraEnabled
    public static List<Account> findAllAccounts(){
        
        return [SELECT Id, Name, Phone, Rating, BillingStreet, BillingCity, BillingState,
                BillingCountry, BillingPostalCode
                FROM Account];
    }

    @AuraEnabled
    public static List<Account> findAccountByName(String name){
        
        name = '%' + name + '%';
        return [SELECT Id, Name, Phone, Rating, BillingStreet, BillingCity, BillingState,
                BillingCountry, BillingPostalCode
                FROM Account
                WHERE Name LIKE :name];
    }
}

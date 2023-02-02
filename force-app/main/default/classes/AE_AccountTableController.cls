

public with sharing class AE_AccountTableController {

    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Name, NumberOfEmployees, Website, BillingStreet, BillingCity, BillingCountry, BillingPostalCode FROM Account];
    }

    @AuraEnabled
    public static Boolean deleteAccount(String id){
        System.debug('DELEEEETE' + id);
        try{
            delete [SELECT Id FROM Account WHERE Id=:id];
        }
        catch(Exception e){
            System.debug('error' + id);
            return false;
        }
        return true;
    }


    @AuraEnabled
    public static Boolean editAccount(Account account){
        try{
            update account;
        }
        catch(Exception e){
            return false;
        }
        return true;
    }

    @AuraEnabled
    public static Boolean createAccount(List<Account> accounts){
        try{
            insert accounts;
        }
        catch(Exception e){
            return false;
        }
        return true;
    }
}
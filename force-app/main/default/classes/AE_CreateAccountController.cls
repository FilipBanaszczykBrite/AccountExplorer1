

public with sharing class AE_CreateAccountController {

    @AuraEnabled
    public static List<Account> getEmptyAccount(){
        return new List<Account>{new Account()};
    }

    @AuraEnabled
    public static Boolean insertAccounts(String accounts){
        System.debug('INSERT ' + accounts);
        List<Account> accountsToInsert = (List<Account>) JSON.deserialize(accounts, List<Account>.class);
        try{
            for(Account acc: accountsToInsert){
                acc.Id = null;
            }
            insert accountsToInsert;
        }
        catch (Exception e){
            return false;
        }
        return true;
    }

}
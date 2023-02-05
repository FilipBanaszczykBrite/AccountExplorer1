
({
    doInit: function(cmp, event, helper){
        const columns = [
            { label: 'Name', fieldName: 'Name', type: "text", editable: true},
            { label: 'Website', fieldName: 'Website', type: 'url', editable: true },
            { label: 'Billing Country', fieldName: 'BillingCountry', editable: true},
            { label: 'Billing City', fieldName: 'BillingCity', editable: true},
            { label: 'Billing Street', fieldName: 'BillingStreet', editable: true},
            { label: 'Billing Postal Code', fieldName: 'BillingPostalCode', editable: true}
        ];
        cmp.set("v.columns", columns)
    },

    open: function(cmp, event, helper){
        helper.getEmptyAccount(cmp);
        cmp.set("v.createPopupOpened", true);
    },

    close: function(cmp, event, helper){
        helper.close(cmp);

     },

    newRow: function(cmp, event, helper) {
        cmp.set("v.newAccounts", cmp.get("v.newAccounts").concat({}));
        cmp.set("v.onlyOneRow", false);
     },

     createAccounts: function(cmp, event, helper){
         var accounts = cmp.get("v.newAccounts");
         var drafts = event.getParam('draftValues');
         let draftsLength = drafts.length;
         for(let i = 0; i < (draftsLength - accounts.length); i++){
             drafts.pop();
         }
         helper.saveAccounts(cmp, drafts);
     },

     deleteRow: function(cmp, event, helper){
         let old = cmp.get("v.newAccounts");
         old.pop();
         if(old.length == 1){
            cmp.set("v.onlyOneRow", true);
         }
         cmp.set("v.newAccounts", old);
     }

});
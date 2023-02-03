
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
     },

     createAccounts: function(cmp, event, helper){
         helper.saveAccounts(cmp, event.getParam('draftValues'));
     }
});
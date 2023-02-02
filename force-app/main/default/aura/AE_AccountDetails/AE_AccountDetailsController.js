
({
    doInit: function(cmp, event, helper){
        cmp.set("v.accountSelected", false);
        helper.setDetailFields(cmp, event);
        // var spinner = cmp.find("mySpinner");
         //$A.util.toggleClass(spinner, "slds-hide");
    },

    loadDetails: function(cmp, event, helper){
        cmp.set("v.accountSelected", true);
        var spinner = cmp.find("myDetailSpinner");
       // $A.util.toggleClass(spinner, "slds-hide");
        var accountId = event.getParam("accountId");
        cmp.set("v.recordId", accountId);
        $A.util.toggleClass(spinner, "slds-hide");

    },

    closeDetails: function(cmp, event, helper){
        cmp.set("v.accountSelected", false);
    },

    reloadView: function(cmp, event, helper){
        var appEvent = $A.get("e.c:AE_RefreshAccountList");
        setTimeout(() => {  appEvent.fire(); }, 500);
    }
});
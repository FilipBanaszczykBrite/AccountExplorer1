
({
    doInit: function(cmp, event, helper){


    }, 

    open: function(cmp, event, helper){
         cmp.set("v.editPopupOpened", true);
          var accountId = event.getParam("accountId");
          cmp.set("v.recordId", accountId);
    },

    reloadView: function(cmp, event, helper){
            var appEvent = $A.get("e.c:AE_RefreshAccountList");
            console.log('reload');
            helper.showToastEditSuccess();
             cmp.set("v.editPopupOpened", false);
            setTimeout(() => {  appEvent.fire(); }, 500);
        },



     close: function(cmp, event, helper){
          cmp.set("v.editPopupOpened", false);
     }
});
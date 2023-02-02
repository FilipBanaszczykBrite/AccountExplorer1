
({
    doInit: function(cmp, event, helper){
     helper.handlerGetAccounts(cmp);

    },

   deleteAccountRow: function(cmp, event, helper){
       event.stopPropagation()
       console.log('DELETE controller '+event);
       helper.handlerDeleteAccount(cmp, event);

   },

   editAccountRow: function(cmp, event, helper){
          event.stopPropagation()
          console.log('EDIT controller '+event);
          helper.handlerEditAccount(cmp, event);

      },

   showAccountDetails: function(cmp, event, helper){
       console.log('controller '+event);
        helper.handlerShowDetails(cmp, event);
   },

   openCreateModal: function(cmp, event, helper){
        var appEvent = $A.get("e.c:AE_OpenCreatePopup");
        appEvent.fire();
   }
});
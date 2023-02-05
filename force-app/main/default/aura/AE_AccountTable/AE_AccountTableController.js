
({
    doInit: function(cmp, event, helper){
     helper.handlerGetAccounts(cmp);

    },

   deleteAccountRow: function(cmp, event, helper){
       event.stopPropagation()
       if(confirm("Are you sure you want to delete account " + event.currentTarget.dataset.value + "?")){

           helper.handlerDeleteAccount(cmp, event);
       }
   },

   editAccountRow: function(cmp, event, helper){
          event.stopPropagation()

          helper.handlerEditAccount(cmp, event);

      },

   showAccountDetails: function(cmp, event, helper){

        helper.handlerShowDetails(cmp, event);
   },

   openCreateModal: function(cmp, event, helper){
        var appEvent = $A.get("e.c:AE_OpenCreatePopup");
        appEvent.fire();
   }
});
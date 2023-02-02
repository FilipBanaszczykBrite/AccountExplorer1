
({
    doInit: function(cmp, event, helper){


    }, 

    open: function(cmp, event, helper){
         cmp.set("v.editPopupOpened", true);
          var accountId = event.getParam("accountId");
          cmp.set("v.recordId", accountId);
    }
});
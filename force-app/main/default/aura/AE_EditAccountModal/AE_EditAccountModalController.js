
({
    doInit: function(cmp, event, helper){


    }, 

    open: function(cmp, event, helper){
         cmp.set("v.editPopupOpened", true);
          var accountId = event.getParam("accountId");
          cmp.set("v.recordId", accountId);
    },

    reloadView: function(cmp, event, helper){
        cmp.set("v.editPopupOpened", false);
            helper.showToastEditSuccess();
            setTimeout(() => {  $A.get("e.force:refreshView").fire(); }, 500);
        },



     close: function(cmp, event, helper){
          cmp.set("v.editPopupOpened", false);
     }
});
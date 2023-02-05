
({
    handlerGetAccounts: function(cmp){
        let action = cmp.get("c.getAccounts");
        var spinner = cmp.find("mySpinner");
        action.setCallback(this, function(response){
             $A.util.toggleClass(spinner, "slds-hide");
            cmp.set("v.accounts", response.getReturnValue());


          });
         $A.enqueueAction(action);
        $A.util.toggleClass(spinner, "slds-show");
    },

   handlerDeleteAccount: function(cmp, event){
       var accountId = event.target.id;
       let name = '';
       var accounts = cmp.get("v.accounts");
       for(let i = 0; i < accounts.length; i++){
                   if(accounts[i].Id == accountId){
                       name = accounts[i].Name;
                   }

               }

                  var spinner = cmp.find("mySpinner");
                  let action = cmp.get("c.deleteAccount");
                  action.setParams({ id : accountId });
                  action.setCallback(this, function(response){
                       $A.util.toggleClass(spinner, "slds-hide");

                      if(response.getReturnValue()){
                           this.showToastDeleteSuccess(cmp, event);

                      }
                      else{
                          this.showToastDeleteFail(cmp, event);
                      }
                        $A.get("e.force:refreshView").fire();
                    });
                  $A.util.toggleClass(spinner, "slds-show");
                   $A.enqueueAction(action);


       },

       showToastDeleteSuccess: function(cmp, event) {
           var toastEvent = $A.get("e.force:showToast");
           toastEvent.setParams({
               "title": "Success!",
               "message": "The record has been deleted successfully.",
               "type": "success"
           });
           toastEvent.fire();
       },

       showToastDeleteFail : function(cmp, event) {
                  var toastEvent = $A.get("e.force:showToast");
                  toastEvent.setParams({
                      "title": "Error!",
                      "message": "Error occurred during deletion.",
                      "type": "error"
                  });
                  toastEvent.fire();
        },

     handlerShowDetails: function(cmp, event){
          var spinner = cmp.find("mySpinner");
          $A.util.toggleClass(spinner, "slds-show");
        var id = cmp.get("v.accounts")[event.currentTarget.rowIndex - 1].Id;
        var account;
        var accounts = cmp.get("v.accounts")
        for (var i = 0; i < accounts.length; i++) {
            if(accounts[i].Id == id){
                 account = accounts[i];
                 break;
            }
        }

        var appEvent = $A.get("e.c:AE_PassAccount");
        appEvent.setParams({"accountId" : account.Id});
        appEvent.fire();
        $A.util.toggleClass(spinner, "slds-hide");
     },

     handlerEditAccount: function(cmp, event){
            var accountId = event.target.id;

             var appEvent = $A.get("e.c:AE_OpenEditPopup");
             appEvent.setParams({"accountId" : accountId});
             appEvent.fire();
          }
});

({
    getEmptyAccount: function(cmp){
        let action = cmp.get("c.getEmptyAccount");
       action.setCallback(this, function(response){
             console.log(response.getReturnValue());
           cmp.set("v.newAccounts", response.getReturnValue());
            console.log('AAAA'+  cmp.get("v.newAccounts").typeof)
         });
        $A.enqueueAction(action);

    },

    saveAccounts: function(cmp, drafts){
        let missing = false;
        for(let i = 0; i < drafts.length; i++){
            if(drafts[i].Name == ''){
                missing = true;
            }

        }
        if(missing){
            this.showToast("warning", "Missing field: Name", "Warning!");
        }
        else{
             let action = cmp.get("c.insertAccounts");
            action.setParams({ accounts : JSON.stringify(drafts) });
            action.setCallback(this, function(response){
                     if(response.getReturnValue()){
                         cmp.set("v.createPopupOpened", false);
                          this.showToast("success", "Records created successfully", "Success!");
                     }
                     else{
                         cmp.set("v.createPopupOpened", false);
                          this.showToast("error", "Error occurred during creating records", "Error!");
                     }
                     cmp.set("v.createPopupOpened", false);
             });
             $A.enqueueAction(action);
        }

    },

    showToast: function(type, message, title){
        var toastEvent = $A.get("e.force:showToast");
                     toastEvent.setParams({
                         "title": title,
                         "message": message,
                         "type": type
                     });
                     toastEvent.fire();
    },

    close: function(cmp){
        cmp.set("v.createPopupOpened", false);
    }
});
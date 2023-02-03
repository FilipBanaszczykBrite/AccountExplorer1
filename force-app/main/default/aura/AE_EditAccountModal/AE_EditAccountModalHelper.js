
({
       showToastEditSuccess: function() {
              console.log('toast');
            var toastEvent = $A.get("e.force:showToast");
             toastEvent.setParams({
                 "title": "Success!",
                 "message": "The record has been edited successfully.",
                 "type": "success"
             });
             toastEvent.fire();

         }
});

({
    getRatios: function(cmp){
        let action = cmp.get("c.getCurrencyRatios");
        var spinner = cmp.find("mySpinner");
        action.setCallback(this, function(response){
             var matrix = new Map(Object.entries(JSON.parse(response.getReturnValue())));
             var currencies = Array.from(matrix.keys())
            cmp.set("v.currenciesRatios", response.getReturnValue());
            cmp.set("v.currencies", currencies);
            cmp.set("v.ownedCurrency", currencies[0]);
            cmp.set("v.targetCurrency", 'EUR');
            if(currencies.includes('PLN')){
                cmp.set("v.ownedCurrency", 'PLN');
            }
            cmp.find('selectOwned').set('v.value', cmp.get("v.ownedCurrency"));
            cmp.find('selectTarget').set('v.value', cmp.get("v.targetCurrency"));
            $A.util.toggleClass(spinner, "slds-hide");
            this.calculate(cmp)
          });
         $A.enqueueAction(action);
        $A.util.toggleClass(spinner, "slds-show");
    },

    changeClearButton: function(cmp){
         var amount = cmp.get("v.amountEntered");
         if(amount == ''){
             cmp.set("v.isAmountEntered", false);
         }
         else{
             cmp.set("v.isAmountEntered", true);
         }
     },

     calculate: function(cmp){
          var json = cmp.get("v.currenciesRatios");
         var owned = cmp.get("v.amountEntered");
          if(owned != ''){
              if(Number(owned) < 0){
                  this.showToast(cmp, "warning", "Entered amount must be a positive number", "Warning!");
              }
              else{
                  var matrix = new Map(Object.entries(JSON.parse(json)));
                            var targetMap = new Map(Object.entries(matrix.get(cmp.get("v.ownedCurrency"))));
                            var rate = targetMap.get(cmp.get("v.targetCurrency"));
                            console.log('RATE ' + rate + ' ' + cmp.get("v.ownedCurrency") + ' ' + cmp.get("v.targetCurrency"))
                            cmp.set("v.ownedCurrencyDisplay", cmp.get("v.ownedCurrency"));
                            cmp.set("v.targetCurrencyDisplay", cmp.get("v.targetCurrency"));
                           cmp.set("v.amount", parseFloat(owned).toFixed(2));
                           cmp.set("v.calculatedResult", (parseFloat(owned) * rate).toFixed(2));

                            cmp.set("v.ratio", 1 + ' ' + cmp.get("v.ownedCurrency") + ' = ' + rate.toFixed(4) + ' ' + cmp.get("v.targetCurrency") +
                             ', according to average NPB rate, of the day: ');
                             cmp.set("v.todayDate", this.getFormattedDate(new Date));
              }
         }
     },

     clearAmount: function(cmp){
         var owned = cmp.set("v.amountEntered", '');
         this.changeClearButton(cmp);
     },

     changeOwnedCurrency: function(cmp){
         console.log('AAA'+cmp.find('selectOwned').get('v.value'));
         cmp.set("v.ownedCurrency", cmp.find('selectOwned').get('v.value'));
     },

     changeTargetCurrency: function(cmp){
              cmp.set("v.targetCurrency", cmp.find('selectTarget').get('v.value'));
     },

     getFormattedDate: function(date){
         return [
             date.getFullYear(),
             (date.getMonth() + 1).toString().padStart(2, '0'),
             date.getDate().toString().padStart(2, '0')
           ].join('-');
     },

     showToast: function(cmp, type, message, title) {
                   var toastEvent = $A.get("e.force:showToast");
                   toastEvent.setParams({
                       "title": title,
                       "message": message,
                       "type": type
                   });
                   toastEvent.fire();
         },

    invertCurrencies: function(cmp){
        const temp  = cmp.get("v.ownedCurrency");
        cmp.set("v.ownedCurrency", cmp.get("v.targetCurrency"));
        cmp.find('selectOwned').set('v.value', cmp.get("v.targetCurrency"));
        cmp.find('selectTarget').set('v.value',temp);
        cmp.set("v.targetCurrency", temp);
    }
});
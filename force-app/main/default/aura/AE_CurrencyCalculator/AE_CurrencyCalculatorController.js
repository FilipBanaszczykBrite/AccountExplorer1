
({
    doInit: function(cmp, event, helper){
        helper.getRatios(cmp);
    },

    checkAmountEntered: function(cmp, event, helper){
        helper.changeClearButton(cmp);
    },

    calculateClick: function(cmp, event, helper){
        helper.calculate(cmp);
    },

    clearClick: function(cmp, event, helper){
        helper.clearAmount(cmp);
    },

    onChangeOwned: function(cmp, event, helper){
        helper.changeOwnedCurrency(cmp);
    },

    onChangeTarget: function(cmp, event, helper){
            helper.changeTargetCurrency(cmp);
    },

    invertClick: function(cmp, event, helper){
        helper.invertCurrencies(cmp);
    }
});
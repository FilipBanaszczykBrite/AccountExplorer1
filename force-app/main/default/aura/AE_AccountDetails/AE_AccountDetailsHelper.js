
({

    setDetailFields: function(cmp, event){
        let fields = ['Name', 'Industry', 'AnnualRevenue', 'Phone', 'YearStarted', 'Active__c'];
        cmp.set('v.fields', fields);
    }
});
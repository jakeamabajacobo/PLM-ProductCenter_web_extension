chrome.browserAction.onClicked.addListener(function(tab) {
        var newURL =  "http://erpdevsvr/?db=LINNEMANData#id=1946&view_type=form&model=hr_timesheet_sheet.sheet&menu_id=291";
    chrome.tabs.create({ url: newURL });
});

//
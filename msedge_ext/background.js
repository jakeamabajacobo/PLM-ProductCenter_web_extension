function openPage() {
  browser.tabs.create({
    url: "http://erpdevsvr/?db=LINNEMANData#id=1946&view_type=form&model=hr_timesheet_sheet.sheet&menu_id=291"
  });
}



browser.browserAction.onClicked.addListener(openPage);
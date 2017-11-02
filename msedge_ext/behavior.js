document.addEventListener('DOMContentLoaded', () => {
    
        document.getElementById('timesheet').addEventListener("click", function(){                
            var newURL = "http://erpdevsvr/?db=LINNEMANData#id=1946&view_type=form&model=hr_timesheet_sheet.sheet&menu_id=291";
            browser.tabs.create({ url: newURL });
        });

         document.getElementById('timesheetactivity').addEventListener("click", function(){                
                    var newURL = "http://erpdevsvr/?db=LINNEMANData#page=0&limit=1000&view_type=list&model=hr.analytic.timesheet&menu_id=282&action=326";
                    browser.tabs.create({ url: newURL });
          });

         document.getElementById('attendance').addEventListener("click", function(){                
                    var newURL =  "http://erpdevsvr/?db=LINNEMANData#menu_id=314&action=331";
                    browser.tabs.create({ url: newURL });
        });  
    
    
        document.getElementById('signInBtn').addEventListener("click", function(){                
                var r = confirm("This Part Still inprogress,Do you want to suggest?");
                if (r == true) {
                    alert("Then Contact the Developer!");
                }
        });  
});



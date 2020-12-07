

        /* Create new Object: DepartmentButtonHandler  */
        var DepartmentButtonHandler = {
            /* Properties */
            selectedDepartment: "management",
            departmentOptionsHidden: true,

            /* Methods  */
            showDepartmentList: function() {
         //  alert("in showDepartmentList");
                if(this.departmentOptionsHidden){
             //   alert("this.departmentOptionsHidden: " + this.departmentOptionsHidden);
                    document.getElementById("deptListId").classList.replace("hideDeptOptions", "showDeptOptions");
                    this.departmentOptionsHidden = false;
                }else{ 
                    document.getElementById("deptListId").classList.replace("showDeptOptions","hideDeptOptions");
                    this.departmentOptionsHidden = true;
                }  
            },  // End of Method: showDepartmentList()

            changeDepartment: function(evt) {
                let newDepartment = evt.target.innerHTML;
                // update 'deptLabelId'
                document.getElementById("currentDeptLabelId").innerHTML = newDepartment;
                /*  change to lower case and eliminate 'Time' from "Ordinary Time" */
                newDepartment = newDepartment.toLowerCase();
           //   alert("newDepartment: " + newDepartment);
                /* TODO 
                *     1.) remove 'color' from this.selectedDepartment
                *     2.) add 'color' to newDepartment 
                *     3.) this.selectedDepartment = newDepartment
                *     4.) Change Department Label with the new Department name
                *     5.) close <ul id="seasonOptionsId" class="seasonOptions hideControls">
                */
                document.getElementById(this.selectedDepartment + "Id").classList.replace("selectedDept", "unSelectedDept");
                document.getElementById(newDepartment + "Id").classList.replace("unSelectedDept", "selectedDept");
                this.selectedDepartment = newDepartment;
             //   VideoData.selectedSeason = this.selectedDepartment;
                document.getElementById("deptListId").classList.replace("showDeptOptions", "hideDeptOptions");
                this.departmentOptionsHidden = true;
                //show the Division selector for the new Dept
            alert("newDepartmentId: " + newDepartment + "Id");
                document.getElementById(newDepartment + "Id").classList.replace("hideDeptOptions", "showDeptOptions");
        //      alert("VideoData.selectedSeason: " + VideoData.selectedSeason);
            }  // End of Method: changeDepartment()

        }  // End of Object: DepartmentButtonHandler  


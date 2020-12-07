
 



    // Create new Class(object): SelectorHandler 

    var SelectorHandler = {
        //Properties
        selectedDepartment: "management",
        selectedDivision: {
            management: "ceo",
            engineering: "alu",
            technician: "alu",
            computer: "architect",
            education: "training",
            media: "photography"
        }, 
        optionsHidden: true,

        //Methods
        showHide: function() {
    //    alert("in showHide");
   //   alert("this.selectedDivision.engineering: " + this.selectedDivision.engineering);
            //TODO either 'show' or 'hide' optionsCntnr
            if(this.optionsHidden) {
          //  alert("in this.optionsHidden is true");
                InitializeDOMelements.optionsCntnr.classList.remove("hideOptions");
                InitializeDOMelements.optionsCntnr.classList.add("z2");
                this.optionsHidden = false;   
            }else{
                InitializeDOMelements.optionsCntnr.classList.remove("z2");
                InitializeDOMelements.optionsCntnr.classList.add("hideOptions");
                this.optionsHidden = true;   
            }  
        },

        changeDepartment: function(evt) {
                let newDepartment = evt.target.innerHTML;
         //   alert("newDept: " + newDepartment);
                this.loadNewDivision(newDepartment);
                // update 'deptLabelId'
         //       InitializeDOMelements.deptLabel.innerHTML = newDepartment;
                //  change to lower case  
                newDepartment = newDepartment.toLowerCase();
                // TODO 
                //     1.) remove 'color' from this.selected_Department
                //     2.) add 'color' to newDepartment 
                //     3.) Change Department Label with the new Department name
                //     4.) hide 
                //     3.) update this.selected_Department to newDepartment
                //
                document.getElementById(this.selectedDepartment + "Id").classList.remove("selectedDept");
                document.getElementById(newDepartment + "Id").classList.add("selectedDept");
             //   InitializeDOMelements.divLabel.innerHTML = this.selectedEngineeringDivision;
             //   this.switchDivList(this.selectedDepartment,newDepartment);
                this.selectedDepartment = newDepartment;
         //       this.showDivisionList();
          //      divListCntnrEle.classList.replace("hideDivOptions", "showDivOptions");
        },

        changeDivision: function(evt) {
            let evtTrgId = evt.target.id;
            let targetObj = IdExecObjHashTable.getObj(evtTrgId);
            InitializeDOMelements.execPlanCntnr.innerHTML = targetObj.load();

        },


        loadNewDivision: function(dept) {
    //    alert("dept: " + dept);
           switch (dept){
                case "Management":
       //     alert("in case 'Management'");
                  //  InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.management;
                    InitializeDOMelements.divOptions.innerHTML = ManagementData.load();
           //     alert("after ManagementData.load");
                    break
                case "Engineering":
        //    alert("in case 'Engineering'");
                 //   InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.engineering;
                    InitializeDOMelements.divOptions.innerHTML = EngineeringData.load();
        //        alert("after EngineeringData.load");
                    break
                case "Technician":
                //    InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.technician;
                    InitializeDOMelements.divOptions.innerHTML = TechnicianData.load();
                    break
                case "Computer":
                 //   InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.computer;
                    InitializeDOMelements.divOptions.innerHTML = ComputerData.load();
                    break
                case "Education":
                 //   InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.education;
                    InitializeDOMelements.divOptions.innerHTML = EducationData.load();
                    break
                case "Media": 
                 //   InitializeDOMelements.divLabel.innerHTML = this.selectedDivision.media;
                    InitializeDOMelements.divOptions.innerHTML = MediaData.load();
                    break
                default: 
             //       alert("No Division for: " + dept);  
            } //End of Switch 
        }, //End of function: getDivision(dept)


        mouseOut: function(evt) {
            evt.stopPropagation(); //cancel bubbling
            let ele = evt.target || evt.srcElement;
       //     document.getElementById("mouseOutId").innerHTML = "before if return " + ele.id;
            if(this.optionsHidden || (ele.id != "optionsCntnrId") ) {
                return;
            }
          //  document.getElementById("currentId").innerHTML = "after if return " + ele.id;
                if (ele.id === "optionsCntnrId"){
            //    alert("ele.id === 'optionsCntnrId'");
                    this.showHide();
                }
        }

    } //End of Class: SelectorHandler


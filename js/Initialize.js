   // Create new Class(Object): Initialize

    var InitializeDOMelements = {
        // Properties

        optionsCntnr: new Object,
        deptList: new Object,
        divOptions: new Object,
        execPlanCntnr: new Object,
    /*    deptLabel: new Object,
        divLabel: new Object,
         mngrList: new Object,
       engrList: new Object,
        techList: new Object,
        compList: new Object,
        educList: new Object,
        mediList: new Object,  */

        // Methods

        initialize: function() {
      //  alert("in initialize");
            this.optionsCntnr = document.getElementById("optionsCntnrId");
      //  alert("this.optionsCntnr.id: " + this.optionsCntnr.id);
            this.deptList = document.getElementById("deptListId");
            this.divOptions = document.getElementById("divOptionsId");
            this.divOptions.innerHTML = ManagementData.load();
            this.execPlanCntnr = document.getElementById("execPlanCntnrId");
            this.execPlanCntnr.innerHTML = ManagementCeo.load();
         //   this.deptLabel = document.getElementById("currentDeptLabelId");
        //    this.divLabel = document.getElementById("currentDivLabelId");
        //    this.initializeDeptList();
        },

        initializeDeptList: function() {
       /*      this.mngrList = document.getElementById("mngrListId");
         //   this.mngrList.innerHTML = ManagementData.load();
           this.engrList = document.getElementById("engrListId");
            this.engrList.innerHTML = EngineeringData.load();
            this.techList = document.getElementById("techListId");
            this.techList.innerHTML = TechnicianData.load();
            this.compList = document.getElementById("compListId");
            this.compList.innerHTML = ComputerData.load();
            this.educList = document.getElementById("educListId");
            this.educList.innerHTML = EducationData.load();
            this.mediList = document.getElementById("mediListId");
            this.mediList.innerHTML = MediaData.load();
        alert("just before");
            let engrDataEle = document.getElementById("engrMngrId");
            engrDataEle.style.color = "red";
        alert("engrDataEle.id: " + engrDataEle.id) */
        //    mngrDataEle.style.color = "red";
        }
    } //End of Class: Initialize


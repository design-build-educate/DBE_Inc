/* HTML Data  */

var Goals = {
    //Properties
    heading: '<div class="labelCntnr"><label><u>To Provide "A Group Of Students" The Opportunity To Form<br>A Company And Experience Being:</u></label></div>',
    li_Ele: [ "<li>1.)<span class='spanIndent'>...</span>A Manager (eg CEO, Dept. Head etc.)</li>",
            "<li>2.)<span class='spanIndent'>..</span> An Electrical Engineer</li>",
            "<li>3.)<span class='spanIndent'>..</span> An Electronic Technician</li>",
            "<li>4.)<span class='spanIndent'>..</span> A Computer Programmer (eg Web Developer)</li>",
            "<li>5.)<span class='spanIndent'>..</span> A Teacher</li>",
            "<li>6.)<span class='spanIndent'>..</span> A Photographer - Videographer - Graphic Artist</li>",
            "<li>7.)<span class='spanIndent'>..</span> An Architect</li>",
            "<li>8.)<span class='spanIndent'>..</span> A Draftsman</li>"
            ],

    //Methods
    load_HTML: function() {
    //  alert("In Goals.load_HTML");
        let goal_HTML = "<div class='divCntnr'>" + this.heading + "<ul class='ulCntnr'>";
        for (var i = 0; i < this.li_Ele.length; i++) {
            goal_HTML += this.li_Ele[i];
        }
        goal_HTML += "</ul></div>";
     // alert("HTML: " + goal_HTML);
        return goal_HTML;
    }
}  //End of Class: Goals



var Guidlines = {
    //Properties
    heading: '<div class="labelCntnr"><label><u>Some Guidelines for Proposed Project:</u></label></div>',
    li_Ele: [ "<li>1.)<span class='spanIndent'>..</span>Involves such a variety of skills and interests so as to<br><span class='spanIndent'>......</span>require a fairly large group of students for its completion.</li>",
            "<li>2.)<span class='spanIndent'>..</span>Challenges the brightest students yet remains<br><span class='spanIndent'>......</span>within the capabilities of the less talented students.</li>",
            "<li>3.)<span class='spanIndent'>..</span>Can be completed outside the structured<br><span class='spanIndent'>......</span>school environment (e.g. at home).</li>",
            "<li>4.)<span class='spanIndent'>..</span>Has adult support-(School employees, Parents etc.<br><span class='spanIndent'>......</span>who, inturn, have connections with a group of consultants).</li>"
            ],

    //Methods
    load_HTML: function() {
  //  alert("loading Guidlines");
        let guidelines_HTML = "<div class='divCntnr'>" + this.heading + "<ul class='ulCntnr'>";
        for (var i = 0; i < this.li_Ele.length; i++) {
            guidelines_HTML += this.li_Ele[i];
        }
        guidelines_HTML += "</ul></div>";
        return guidelines_HTML;
    }
}  //End of Class: Guidlines



var Project = {
    //Properties
    heading: '<div class="labelCntnr"><label><u>The Company Will:</u></label></div>',
    li_Ele: ["<li>1.)<span class='spanIndent'>..</span>Design An 8-bit Computer From<br><span class='spanIndent'>......</span>Basic Logic Gates (AND, OR, NOT).</li>",
            "<li>2.)<span class='spanIndent'>..</span>Build An 8-bit Computer From<br><span class='spanIndent'>......</span>74LS-- series Integrated Circuits (IC's).</li>",
            "<li>3.)<span class='spanIndent'>..</span>Create Animated Architectural Drawings For<br><span class='spanIndent'>......</span>The 8-bit Computer And The Instruction Set (ISA).</li>",
            "<li>4.)<span class='spanIndent'>..</span>Provide/Create All Needed Educational Material.</li>",
            "<li>5.)<span class='spanIndent'>..</span>Design And Create A Company Website.</li>",
            "<li>6.)<span class='spanIndent'>..</span>Manage The Company So As To<br><span class='spanIndent'>......</span>Complete The Project Within One Year.</li>"
            ],

    //Methods
    load_HTML: function() {
        let project_HTML = "<div class='divCntnr'>" + this.heading + "<ul class='ulCntnr'>";
        for (var i = 0; i < this.li_Ele.length; i++) {
            project_HTML += this.li_Ele[i];
        }
        project_HTML += "</ul></div>";
        return project_HTML;
    }
}  //End of Class: Project




//  DepartmentData

var DepartmentData = {
    //Properties
 //   heading: '<label id="deptId" class="deptButton" onclick="SelectorHandler.showDepartmentList()" >Check In</label>',
    liEle: ['<li id="managementId" class="selectedDept" onclick="SelectorHandler.changeDepartment(event)">Management</li>',
                '<li id="engineeringId" class="unSelectedDept" onclick="SelectorHandler.changeDepartment(event)">Engineering</li>',
                '<li id="technicianId" class="unSelectedDept" onclick="SelectorHandler.changeDepartment(event)">Technician</li>',
                '<li id="computerId" class="unSelectedDept" onclick="SelectorHandler.changeDepartment(event)">Computer</li>',
                '<li id="educationId" class="unSelectedDept" onclick="SelectorHandler.changeDepartment(event)">Education</li>',
                '<li id="mediaId" class="unSelectedDept" onclick="SelectorHandler.changeDepartment(event)">Media</li>' 
            ],

    //Methods
 //   load_Label: function() {
  //      return this.heading;
 //   },
    //  SelectorHandler.onMouseOut(event)---class='deptOptions hideDeptOptions' onmouseout=''    <span class="spanIndent">----</span>
    load: function() {
 //   alert("in DepartmentData.load()");
        let departmentList = "<ul class='deptOptions'>";
        for (var i = 0; i < this.liEle.length; i++) {
            departmentList += this.liEle[i];
        }
        departmentList += "</ul>";
        return departmentList;
    }
} // End of Class: DepartmentData 

 




// Class(Object) ManagementData

var ManagementData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="ceoId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">CEO</li>',
                '<li id="engrMngrId" onclick="SelectorHandler.changeDivision(event)">Engineering Mngr</li>',
                '<li id="techMngrId" onclick="SelectorHandler.changeDivision(event)">Technician Mngr</li>',
                '<li id="compMngrId" onclick="SelectorHandler.changeDivision(event)">Computer Mngr</li>',
                '<li id="eduMngrlId" onclick="SelectorHandler.changeDivision(event)">Education Mngr</li>',
                '<li id="mediaMngrId" onclick="SelectorHandler.changeDivision(event)">Media Mngr</li>'
            ],

    //Methods
    load: function() {
  //  alert("in ManagementData.load()");
        let department_HTML = "";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
    //    department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: ManagementData




// Class(Object) EngineeringData

var EngineeringData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="aluEngrId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">ALU</li>',
                '<li id="memoryEngrId" onclick="SelectorHandler.changeDivision(event)">Memory</li>',
                '<li id="counterEngrId" onclick="SelectorHandler.changeDivision(event)">Counter</li>',
                '<li id="busEngrId" onclick="SelectorHandler.changeDivision(event)">BUS</li>',
                '<li id="controlEngrId" onclick="SelectorHandler.changeDivision(event)">Control</li>',
                '<li id="input-outputEngrId" onclick="SelectorHandler.changeDivision(event)">Input-Output</li>',
                '<li id="timingEngrId" onclick="SelectorHandler.changeDivision(event)">Timing</li>',
                '<li id="testingEngrId" onclick="SelectorHandler.changeDivision(event)">Testing</li>'   
            ],

    //Methods
    load: function() {
  //  alert("in EngineeringData.load()");
        let department_HTML = "";  //"<ul id='divOptionsId' class='divOptions hideDivOptions'>";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
   //     department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: EngineeringData




// Class(Object) TechnicianData

var TechnicianData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="aluTechId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">ALU</li>',
                '<li id="memoryTechId" onclick="SelectorHandler.changeDivision(event)">Memory</li>',
                '<li id="counterTechId" onclick="SelectorHandler.changeDivision(event)">Counter</li>',
                '<li id="busTechId" onclick="SelectorHandler.changeDivision(event)">BUS</li>',
                '<li id="controlTechId" onclick="SelectorHandler.changeDivision(event)">Control</li>',
                '<li id="input-outputTechId" onclick="SelectorHandler.changeDivision(event)">Input-Output</li>',
                '<li id="timingTechId" onclick="SelectorHandler.changeDivision(event)">Timing</li>',
                '<li id="testingTechId" onclick="SelectorHandler.changeDivision(event)">Testing</li>'   
            ],

    //Methods
    load: function() {
        let department_HTML = "";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
   //     department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: TechnicianData




                   
// Class(Object) ComputerData

var ComputerData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="archCompId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">Architect</li>',
                '<li id="isaCompId" onclick="SelectorHandler.changeDivision(event)">ISA</li>',
                '<li id="webCompId" onclick="SelectorHandler.changeDivision(event)">Web Development</li>',
                '<li id="langCompId" onclick="SelectorHandler.changeDivision(event)">C++ (Arduino)</li>'  
            ],

    //Methods
    load: function() {
        let department_HTML = "";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
    //    department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: ComputerData
                   





                   
// Class(Object) EducationData

var EducationData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="trainEducId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">Training</li>',
                '<li id="testEducId" onclick="SelectorHandler.changeDivision(event)">Testing</li>',
                '<li id="matEducId" onclick="SelectorHandler.changeDivision(event)">Material: Acq/Dev</li>',
                '<li id="romEducId" onclick="SelectorHandler.changeDivision(event)">Prog. ROM (Arduino)</li>'  
            ],

    //Methods
    load: function() {
        let department_HTML = "";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
    //    department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: EducationData
                   
                   





                   
// Class(Object) MediaData

var MediaData = {
    //Properties
 //   heading: '<label id="engrLabelId" class="engrButton" onclick="SelectorHandler.showDivisionList(\'show\')" >Division</label>',
    li_Ele: ['<li id="photoMediaId" class="selectedDept" onclick="SelectorHandler.changeDivision(event)">Photography</li>',
                '<li id="videoMediaId" onclick="SelectorHandler.changeDivision(event)">Videography</li>',
                '<li id="lightMediaId" onclick="SelectorHandler.changeDivision(event)">Lighting</li>',   
                '<li id="audMediaId" onclick="SelectorHandler.changeDivision(event)">Audio</li>',
                '<li id="graMediaId" onclick="SelectorHandler.changeDivision(event)">Graphic Art</li>'
            ],

    //Methods
    load: function() {
        let department_HTML = "";
        for (var i = 0; i < this.li_Ele.length; i++) {
            department_HTML += this.li_Ele[i];
        }
  //      department_HTML += "</ul>";
        return department_HTML;
    }
} // End of Class: MediaData
                   

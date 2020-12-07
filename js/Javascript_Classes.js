/* Javascript Classes */



        var LoadData = {
            //Properties
            HTML_loaded: false,

            //Methods
            load: function() {
              //  alert("projectHTML: " + projectHTML);
                document.getElementById("pageA").innerHTML = Goals.load_HTML();
                document.getElementById("pageB").innerHTML = Guidlines.load_HTML();
                document.getElementById("pageC").innerHTML = Project.load_HTML();
                document.getElementById("deptLabelId").innerHTML = DepartmentData.load_Label();
                document.getElementById("deptListId").innerHTML = DepartmentData.load_List();
                document.getElementById("engrListId").innerHTML = EngineeringData.load_List();
                this.HTML_loaded = true;
            }
        }



/*
*   Class: DisplayCompany
*       //Properties
*       loaded: 
*       
*       // Methods 
*       load:
*
*   Called By Class: PageManager
*   Calls function: createST()  
*/ 

    var DisplayCompany = {
        //Properties
        loaded: false,

        //Methods
        load: function() {
        // alert("load ST");
        //  alert("cNode4.name: " + cNode4.name);
            createST("companyVis", cNode4);
            this.loaded = true;
        }	
    }    



/*   PageMngr class
*       1.) Called By <nav> buttons
*
*/

    var PageMngr = {
        // Properties
        pages: ["Home","About","Company"/*,"Project"*/,"Execute"],
        subPages: ["Project","Guidlines","Goals"],
        activePg: 0,
        activeSubPg: "A",
        clickedPg: null,
        clickedSubPg: null,
        companyPgLoaded: false,

        // Methods 
        changePage: function (evt) {
        	let pageId_ = evt.target.id.charAt(3);
        // alert("charAt(3):  " + pageId_);

            this.clickedPg = pageId_;
            this.hideAndShow(this.activePg, this.clickedPg);
            // change color for appropriate nav ids
            document.getElementById("nav" + this.activePg).classList.remove("selNav");
            document.getElementById("nav" + this.activePg).classList.add("blur");
      //  alert("add 'selNav'");
            document.getElementById("nav" + this.clickedPg).classList.add("selNav");
            document.getElementById("nav" + this.clickedPg).classList.remove("blur");
            // reset activePg to the new clickedPg
            this.activePg = this.clickedPg;

            // showHide subNav (eg if this.activePg == 1 'show' else 'hide' )
            let subNavEle = document.getElementById("subNavId");
            if( parseInt(this.activePg)  == 1 ) {
                this.addRemoveClass(subNavEle,"show");
             //   alert("before loadData");
                if(!LoadData.HTML_loaded){
               // alert("in LoadData");
                    LoadData.load();
                }
            }else{
                this.addRemoveClass(subNavEle,"hide");
            }
            if( (!DisplayCompany.loaded) && (parseInt(this.activePg)  == 2) ) {
        //    alert("Loading Company Vis"); 
               DisplayCompany.load();
           }
	    },

        changeSubPage: function(evt) {
            let pageId_ = evt.target.id.charAt(3);
        // alert("charAt(3):  " + pageId_);
        //    alert("letter: " + pageId_);
            this.clickedSubPg = pageId_;
            this.hideAndShow(this.activeSubPg, this.clickedSubPg);
            // change color for appropriate nav ids
            document.getElementById("nav" + this.activeSubPg).classList.remove("selNav");
            document.getElementById("nav" + this.activeSubPg).classList.add("blur");
            document.getElementById("nav" + this.clickedSubPg).classList.add("selNav");
            document.getElementById("nav" + this.clickedSubPg).classList.remove("blur");
            // reset activePg to the new clickedPg
            this.activeSubPg = this.clickedSubPg;

        },

        hideAndShow: function(hideThis,showThis) {
          //  alert("Hide: " + "page" + hideThis);
          //  alert("Show: " + "page" + showThis);
            let hideEle = document.getElementById("page" + hideThis);
            this.addRemoveClass(hideEle,"hide");
            let showEle = document.getElementById("page" + showThis);
            this.addRemoveClass(showEle,"show");
                   //       if ( (showThis == 3)  && !this.companyPgLoaded) {
                  //      alert("co. pg load");
                  //          createScriptureST(sNode0);
                  //          this.companyPgLoaded = true;
                   //       }
        },

        addRemoveClass: function(ele,showHide){
            if (showHide == "hide") {
                ele.classList.remove("show"/*,"z5"*/);
                ele.classList.add("hide");
            }else{
                ele.classList.remove("hide");
                ele.classList.add("show"/*,"z5"*/);
            }
        }  



    } // End of Class: PageMngr
/* Javascript classes  */






/* DisplayCompany class:
*    1.) is called by the PageMngr class when the Company <nav> button is clicked
*/
      
    var DisplayCompanyST = {
      //Properties
      loaded: false,

      //Methods
      load: function() {
  //      alert("load ST");
  //      alert("sNode01.name: " + sNode01.name);
              createST("companyVis",cNode4);
            }
    };



/*   PageMngr class
*       1.) Manages the <nav> buttons
*
*/

      var PageMngr = {
          // Properties
          pages: ["Home","About","Company","Project","Execute"],
          activePg: 0,
          clickedPg:null,
          companyPgLoaded: false,
           // Methods
           changePage: function (evt) {
              //  alert("charAt(3):  " + evt.target.id.charAt(3));
                          // let this.clickedPg = evt.target.id.charAt(4);
                          this.clickedPg = evt.target.id.charAt(3);
                        // hide "this.activePg" and show "this.clickedPg"
                  //    alert("this.clickedPg: " + this.clickedPg);
                        this.hideAndShow(this.activePg, this.clickedPg);
                        // change color for appropriate nav ids
                        document.getElementById("nav" + this.activePg).classList.remove("selPg");
                        document.getElementById("nav" + this.clickedPg).classList.add("selPg");
                        // reset activePg to the new clickedPg
                        this.activePg = this.clickedPg;
             //       alert("this.activePg" + this.activePg);
             //       alert("DisplayCompanyST.loaded: " + DisplayCompanyST.loaded);
                        if( (this.activePg == 3) && !DisplayCompanyST.loaded ){
              //      alert("ready to display");
                          let visEle = document.getElementById("companyVis");
                          visEle.style.width = "100%";
               //           visEle.style.height = 100%;
         //      alert("before DisplayCompanyST.load()");
                          DisplayCompanyST.load();  
                          DisplayCompanyST.loaded = true;
                        }
           },

           hideAndShow: function(hideThis,showThis) {
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
                                  ele.classList.remove("show","z5");
                                  ele.classList.add("hide");
                             }else{
                                  ele.classList.remove("hide");
                                  ele.classList.add("show","z5");
                             }
           }  

    }
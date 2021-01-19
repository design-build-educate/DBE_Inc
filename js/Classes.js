/* Javascript Classes (Objects) */


        var FormHandler = {
            //Methods
            onclick: function(evt) {
        		evt.stopPropagation();
                alert("Id: " + evt.target.id);
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
*   Called By Class: NavHandler
*   Calls function: createST()  
*/ 

    var DisplayCompany = {
        //Properties
        loaded: false,

        //Methods
        load: function() {
        // alert("this.loaded: " + this.loaded);
        //  alert("cNode4.name: " + cNode4.name);
        	if(!this.loaded) {
        		createST("companyVis", cNode4);
            	this.loaded = true;
        	}
        }	
    }    







/* Create a new Class to handle the Main Navigation */

var NavHandler = {
	//Properties
	hidden: true,
	changingPg: false,
	selectedNavId: "home-nav-id",
	selectedPgId: "home-pg-id",
	navCntnrId: {},
	navOptsCntnrId: {},
//	mouseActionEle: {},


	//Methods
	mouseLeave: function(){
	//	this.mouseActionEle.innerHTML += 'leaving: ' + evt.target.id + '<br>';
		if(this.hidden == true){ return };
		this.showHide();
	},

	showHide: function() {
	//	alert("in showHide");
//	alert("changingPg: " + this.changingPg);
	//	this.mouseActionEle.innerHTML += 'changingPg:  ' + this.changingPg + '<br>';
	//	if (this.changingPg) {return};
	//	this.mouseActionEle.innerHTML += 'hidden:  ' + this.hidden + '<br>';
		/* TODO
		*	1.) if (hidden is true)
		*			remove class='hideNav'
		*		else
		*			add cladd='hideNav'
		*/
		if(this.hidden) {
		//	alert('this.hidden: ' + this.hidden);
		//	this.navImgId.classList.replace('nav-img-start','nav-img-end');
		//	setTimeout(this.displayOpts,10);
		//	this.navCntnrId.classList.remove('hide-nav');
		    this.navCntnrId.classList.remove('hide-nav-cntnr');
		//  alert("hide-options removed");
		//	document.getElementById('nav-options-cntnr-id').classList.remove('hide-nav');
		//    setTimeout(this.displayNav,50);
			this.hidden = false; 
		//	alert('this.hidden: ' + this.hidden);
		}else{
		//	alert('close Nav');
		//	this.navImgId.classList.replace('nav-img-end','nav-img-start');
			this.navCntnrId.classList.add('hide-nav-cntnr');
		//	setTimeout(this.hideNav,700);
		//    this.navCntnrId.classList.remove('display-nav');
		//	this.navCntnrId.classList.add('hide-nav');
			this.hidden = true;
		}
	}, //End of Mehod: showHide()

	hideNav: function(){
		document.getElementById('nav-cntnr-id').classList.remove('display-nav')
	    this.hidden = true;
	},

	displayNav: function(){
	//	alert("in displayNav");
	/*	this.navOptsCntnrId.classList.remove('hide-nav'); */
		this.navCntnrId.classList.remove('hide-nav');
	    this.hidden = false;
	},

	changePg: function(evt) {
		this.changingPg = true;
	//	alert("in changePg()");
		let navId = evt.target.id;
	//	alert("evt.target.id: " + navId + "  old.id: " + this.selectedNavId);
		/*TODO
		*   1.) remove class 'sel-nav' from the present selected navId(ie this.selectedNavId) 
		*   2.) add class 'selNav' to the newly clicked Id(ie navId)
		*	3.) Change Pages 
		*		a.) add class 'hidePg' to the present page
		*		b.) remove class 'hidePg' from the newly clicked Id
		*   4.) update: this.selectedNavId = navId 
		*	5.) hide navOptionsCntnr and update this.hidden
		*/
		// 1.) and 2.)
//	alert("adding 'sel-nav' to " + navId);
		document.getElementById(navId).classList.add("sel-nav");
//	alert("removing 'sel-nav' from " + this.selectedNavId);
		document.getElementById(this.selectedNavId).classList.remove("sel-nav");
//	alert("add & remove 'sel-nav' completed");
		// 3.a)
		document.getElementById(this.selectedPgId).classList.replace('show-pg','hide-pg');
		// 3.b)
		switch(navId){
			case "home-nav-id":
				document.getElementById("home-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "home-pg-id";
				break;
			case "about-nav-id":
				document.getElementById("about-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "about-pg-id";
				break;
			case "company-nav-id": 
                DisplayCompany.load();
				document.getElementById("company-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "company-pg-id";
        //    alert("Calling DisplayCompany.load()");
				break;
			case "resource-nav-id":
				document.getElementById("resource-pg-id").classList.replace('hide-pg','show-pg');
				this.selectedPgId = "resource-pg-id";
				break;
			default:
				alert(navId + " does not exist");
		}
		//4.)
//	alert("navId: " + navId);
		this.selectedNavId = navId;
		this.showHide();
		//5.) 
		//this.navCntnrId.classList.add('hide-nav');
		setTimeout(this.hideOpts,400);
		this.hidden = true;
	}, //End of Method: changePg()

	hideOpts: function() {
		this.changingPg = false;
	},

	init: function(){
		this.navCntnrId = document.getElementById("nav-cntnr-id");
	/*	this.mouseActionEle = document.getElementById('mouseActionId'); */
		this.navOptsCntnrId = document.getElementById("nav-options-cntnr-id");
//	alert("NavHandler.init() finished");
	}

} //End of Class(Object): NavHandler
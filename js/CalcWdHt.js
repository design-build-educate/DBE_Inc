/* class  DataNode
*      Properties
*        nodePrefix: (e.g. 's' or 'dl' or 'ch') user supplied
*        nodeId:  (e.g. '2104')  User supplied
*        nodeName: User supplied
*        nmbrOfChildren:  user supplied (Max = 10)
*        nodeWidth:  internally determined from 'nodeName'
*        nodeHeight: internally determined from 'nodeName'
*        
*
*      Methods
*        create:  
*           (will create a JSON string)
*   e.g.   ' {
*	            id: "s2104",
*		        name: this.NodeName,
*               data:{"width": this.NodeWidth,"height": this.NodeHeight},
*		        children:[sNode21040,sNode21041, . . . sNode2104_]
*            }'	
*/

var CalcWdHt = {
    // Properties
    nodeName: '',
    nodeWidth: 0,
    nodeHeight: 0,
    htValues: ["22","38","55","70","80","95","105","125","140","155"],
    widthPerLtr: 8.0, //TODO other options for longer phrases
    nmbrLns: 0,
    maxPhraseLength: 0,  // to be calculated


    // Methods

        reset: function() {
            this.nodeName = '';
            this.nodeWidth = 0;
            this.nodeHeight = 0;
            this.nmbrLns = 0;
            this.maxPhraseLength = 0;
        }, // end of method reset

        calcWd: function() {
 //              alert('in calc wd method');
                    // create new var subPhrasee = this.nodeName to begin with & will be modified later ( we don't want to alter this.nodeName)
                    var subPhrase = this.nodeName;
                    //TODO check for '<br>'
                    do {
                        var lnBrkLoc = subPhrase.indexOf("<br>");
                        if (lnBrkLoc < 0){
                            this.maxPhraseLength = Math.max(this.maxPhraseLength,subPhrase.length);
                            this.nmbrLns += 1
                            /*TODO adjust "this.widthPerLtr" vs "this.maxPhraseLength" 7.8 is ok for shorter phrases
                            * but is too large for longer phrases
                            * try this.widthPerLtr = 7 when this.maxPhraseLength > 20
                            */
                            this.nodeWidth =  Math.round(this.nodeName.length * this.widthPerLtr);
                        }else{
   //            alert('lnBrkLoc: '+ lnBrkLoc);
                            this.maxPhraseLength = Math.max(this.maxPhraseLength,subPhrase.slice(0,lnBrkLoc).length);
     //            alert('this line is ' + subPhrase.slice(0,lnBrkLoc));
    //             alert('new max Lngth is ' + this.maxPhraseLength);
                            subPhrase = subPhrase.slice(lnBrkLoc + 4,subPhrase.length);
    //            alert('subPhrase length: '+ subPhrase.length);
                            this.nmbrLns += 1;
                        }
                    } while(lnBrkLoc > 0);

                    /*TODO adjust "this.widthPerLtr" vs "this.maxPhraseLength" 8 is ok for shorter phrases
                    * but is too large for longer phrases
                    * try this.widthPerLtr = 7 when this.maxPhraseLength > 20
                    */
                    if(this.maxPhraseLength < 15){
                        this.widthPerLtr = 9.5;
                    }else{
                        if(this.maxPhraseLength < 30){
                            this.widthPerLtr = 8.2;
                        }else{
                            this.widthPerLtr = 7.8;
                        }
                    }
                    this.nodeWidth =  Math.round(this.maxPhraseLength * this.widthPerLtr);
 //       alert('node width: ' + this.nodeWidth);
                }, // end of method calcWd

        calcHt: function() {
                    this.nodeHeight = this.htValues[this.nmbrLns - 1];
                }, // end of method calcHt
        
   

        calc: function(nodeObj){
         //   alert('in calc');
         //   alert('node name:' + nodeObj.name);
                    //TODO reset all this.properties
                    this.reset();
                    //TODO get the node name
                    this.nodeName = nodeObj.name;
                    //TODO calculate the width for this node 
                    this.calcWd();
                    nodeObj.data.width = this.nodeWidth;
    //       alert('nodeObj.data.width: '+ nodeObj.data.width);
                    //TODO  calculate the height 
                    this.calcHt();
                    nodeObj.data.height = this.nodeHeight;
        } // end of method calc

    }; // end of class CalcWdHt


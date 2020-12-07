

function createST(visId,selectedNode){
 	alert("in createST");
// alert("selectedNode.id:  " + selectedNode.id);
 //TODO if <div id="monasticVis-canvaswidget"> exists it must be removed from DOM in order to create a new one for the next requested data
/*	if(document.getElementById(genericVis + "-canvaswidget")){
	    var infoEle = document.getElementById(genericVis + "-canvaswidget");
	    infoEle.remove();
	}
*/
 //   var fontSize = '0.8em';

 /*   var selectedNode = sNode01;  
    var mode = "study";    */
    var jsonObj = selectedNode;
    var thisId = jsonObj.id;
/*	if(thisId.slice(0,4)=="s021"){
		levelDist = 150;
	} else {  
		levelDist = 25;
	};   */
//	alert("levelDist: " + levelDist);
    //init Spacetree
    //Create a new ST instance
    var genericST = new $jit.ST({
        //id of viz container element
        injectInto: visId,
		//set orientation
		orientation:'top',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set The number of levels to show for a subtree
        levelsToShow: 1,
        //set distance between node and its children
        levelDistance: 25,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
			autoHeight:true,
			autoWidth:true,
//            width: 60,
//              height:40,
//            type: 'rectangle',
            color: '#aaa',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        },
        
        onBeforeCompute: function(node){
            genericLog.write("loading "); //+ node.name);
        },
        
        onAfterCompute: function(){
            genericLog.write("click on nodes<br>to expand tree");
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
 //	alert("node.id: " + node.id);			
            label.id = node.id;            
   //  alert("nodeId: "+ node.id.slice(0,4));

            // fill label.innerHTML
			// 2 Options 1.)Psalms(contains ul) 2.) all the rest Note: for all psalm nodes, ID starts with "s021" 
		/*	if(node.id.slice(0,4) != "s021"){
			    // option 2.)
			    if(mode == "study"){  */
	       label.innerHTML = node.name;			
		/*	    } else {
			        label.innerHTML = "<div style='width:100%;height:100%;' onclick='divClkHndlr(event)'>?</div>";	
			    }
			} else {
			    // all children of psalms but not root psalm node itself
				// for main node only
				if(node.id.length == 6){
			        if(mode == "study"){
	                    label.innerHTML = node.name;			
			        } else {
			            label.innerHTML = "<div style='width:100%;height:100%;' onclick='divClkHndlr(event)'>?</div>";	
			        }
				// for all children nodes (ie nodes with ul and li's)
				} else {
					var vs1Id = parseInt(psalmInfo[node.id].firstVs) + 1;
	//			alert(vs1Id);
					var vss = parseInt(psalmInfo[node.id].vss);
	//			alert(vss);
					var src = psalmInfo[node.id].src;
	//			alert(src[0]);
				    var ulString = "<ul>";
	//			alert(ulString);
					for(var i=vs1Id;i <= vs1Id + vss - 1;i++){
						ulString += "<li id='vs" + i + "' onclick='liClkHndlr(event)'>";
	//			alert(ulString);
						if(mode == "study"){
							ulString += src[i-1];
	//			alert(ulString);
						} else {
							ulString += i + ".) ?";
						}
						ulString += "</li>"
	//			alert(ulString);
					}
					ulString += "</ul>"
	//			alert(ulString);
					label.innerHTML = ulString;
				}	
			}  */
			
            label.onclick = function(){
           // 	if(normal.checked) {
            	  genericST.onClick(node.id);
           // 	} else {
           //     scriptureST.setRoot(node.id, 'animate');
           // 	}
            };
            //set label styles
            var style = label.style;
            style.width = node.data.width + 'px';
            style.height = node.data.height + 'px';            
            style.cursor = 'pointer';
            style.color = 'blue';  //'#333';
            style.fontSize = '0.8em'; //fontSize;
            style.textAlign= 'center';
            style.paddingTop = '3px';
            style.fontWeight = 'bold'; 
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
			
			node.data.$width = node.data.width;
			node.data.$height = node.data.height;
			
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#ff0";
            }
            else {
                delete node.data.$color;
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0;
                    node.eachSubnode(function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = '#aaa';  //['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                }
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
	
 alert("jsonObj.id:  " + jsonObj.id);
    //load json data
    genericST.loadJSON(jsonObj);
    //compute node positions and layout
    genericST.compute();
    //optional: make a translation of the tree
    genericST.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    genericST.onClick(genericST.root);
    //end
    //Add event handlers to switch spacetree orientation.
	

	
/*   var top =  $jit.id('r-top'), 
        left = $jit.id('r-left'), 
        bottom = $jit.id('r-bottom'), 
        right = $jit.id('r-right'),  
        normal = $jit.id('s-normal');*/
       
    
 /*   function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };   */
    
 /*   top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler; */
    //end

}
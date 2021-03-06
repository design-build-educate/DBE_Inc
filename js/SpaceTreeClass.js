

function createST(visId,selectedNode){
 //	alert("in createST");
// alert("selectedNode.id:  " + selectedNode.id);
 //TODO if <div id="monasticVis-canvaswidget"> exists it must be removed from DOM in order to create a new one for the next requested data
	if(document.getElementById(visId + "-canvaswidget")){
	    var infoEle = document.getElementById(genericVis + "-canvaswidget");
	    infoEle.remove();
	}  

    var jsonObj = selectedNode;
    var thisId = jsonObj.id;
		levelDist = 25;
//	alert("levelDist: " + levelDist);
    //init Spacetree
    //Create a new ST instance
    var genericST = new $jit.ST({
        //id of viz container element
        injectInto: visId,
		//set orientation
		orientation:'top',
        //set duration for the animation
        duration: 700,
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
            color: '#FF0', //'#aaa',
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
            genericLog.write("Click: 'NODES' to expand tree<br>Click: 'Purple Circle' for information ");
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
 //	alert("node.id: " + node.id);			
            label.id = node.id;            
   //  alert("nodeId: "+ node.id.slice(0,4));

           // fill label.innerHTML
            let lblInnerHTML =  "<div id=\"" + "Id-" + node.id + "\" onclick=\"FormHandler.onclick(event)\" class=\"form\"></div>"
         //   alert("lblInnerHTML: " + lblInnerHTML);
            label.innerHTML = lblInnerHTML + node.name; 
			
            label.onclick = function(){
              //  alert("node.id: " + node.id)
            	genericST.onClick(node.id);
            };

            //set label styles
            var style = label.style;
            style.width = node.data.width + 'px'; //'em';
            style.height = node.data.height + 'px'; //'em';            
            style.cursor = 'pointer';
            style.color = 'black';  //'#333';
            style.fontSize = "0.85em"; //'0.8em';
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
                    node.data.$color = 'yellow'; //'#aaa';  //['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
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
                adj.data.$color = "#00F" //"#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
	
 //alert("jsonObj.id:  " + jsonObj.id);
    //load json data
    genericST.loadJSON(jsonObj);
    //compute node positions and layout
    genericST.compute();
    //optional: make a translation of the tree
    genericST.geom.translate(new $jit.Complex(-200, 0), "current");
    //emulate a click on the root node.
    genericST.onClick(genericST.root);
    //end

}
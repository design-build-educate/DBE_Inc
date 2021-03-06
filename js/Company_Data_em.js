
// "width":"120","height":"2.3",

/* Data for all Company  */

        // Children of cNode0 (Company<br>Manager (CEO))
    
        var cNode00 =  {
            id: "c00",
            name: "Media<br>Department",
            data:{"width":"5.6","height":"2.3"},
            children:[]           
        };

            // Children of cNode01 (Education<br>Department)

                // Children of cNode010 (Training)  

                    // Children of cNode0100 (Fundamentals)   

                    var cNode01000 =  {
                        id: "c01000",
                        name: "World of<br>Boolean",
                        data:{"width":"4.7","height":"2.3"},
                        children:[]         
                    }; 

                var cNode0100 = {
                    id: "c0100",
                    name: "Fundamentals",
                    data:{"width":"6.6","height":"1.5"},
                    children:[cNode01000]           
                };

                    // Children of cNode011 (Tools)   

                    var cNode01010 =  {
                        id: "c01010",
                        name: "LogicCircuit<br>Program",
                        data:{"width":"5.9","height":"2.3"},
                        children:[]         
                    };

                        
                var cNode0101 =  {
                    id: "c0101",
                    name: "Tools",
                    data:{"width":"2.8","height":"1.5"},
                    children:[cNode01010]           
                };

                    
            var cNode010 =  {
                id: "c010",
                name: "Training",
                data:{"width":"4.4","height":"1.5"},
                children:[cNode0100,cNode0101]          
            };

                    
            var cNode011 =  {
                id: "c011",
                name: "Testing",
                data:{"width":"4.1","height":"1.5"},
                children:[]         
            };
            
        var cNode01 =  {
            id: "c01",
            name: "Education<br>Department",
            data:{"width":"5.6","height":"2.3"},
            children:[cNode010,cNode011]            
        };

            // Children of cNode02 (Computer<br>Department)   

            var cNode020 =  {
                id: "c020",
                name: "Architecture<br>Division",
                data:{"width":"5.9","height":"2.3"},
                children:[]         
            };

                    
            var cNode021 =  {
                id: "c021",
                name: "Software<br>Division",
                data:{"height":"4.4","height":"2.3"},
                children:[]         
            };
            
        var cNode02 =  {
            id: "c02",
            name: "Computer<br>Department",
            data:{"height":"5.9","height":"2.3"},
            children:[cNode020,cNode021]            
        };

            // Children of cNode03 (Engineering<br>Department)     
          
            var cNode030 =  {
                id: "c030",
                name: "Timing<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };

                    
            var cNode031 =  {
                id: "c031",
                name: "ALU<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };

                /* children of cNode032 "Memory Division" */           
          
                var cNode0320 =  {
                    id: "c0320",
                    name: "RAM",
                    data:{"height":"2.8","height":"1.5"},
                    children:[]         
                };        
          
                var cNode0321 =  {
                    id: "c0321",
                    name: "ROM",
                    data:{"height":"2.8","height":"1.5"},
                    children:[]         
                };          
          
                var cNode0322 =  {
                    id: "c0322",
                    name: "Regisrters",
                    data:{"height":"5.3","height":"1.5"},
                    children:[]         
                };    
        
                    
            var cNode032 =  {
                id: "c032",
                name: "Memory<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[cNode0320,cNode0321,cNode0322]            
            };

                /* children of cNode033 "I/O Division" */          
          
                var cNode0330 =  {
                    id: "c0330",
                    name: "Input",
                    data:{"height":"3.1","height":"1.5"},
                    children:[]         
                };     
          
                var cNode0331 =  {
                    id: "c0331",
                    name: "Output",
                    data:{"height":"3.4","height":"1.5"},
                    children:[]         
                };        
          
            var cNode033 =  {
                id: "c033",
                name: "I/O<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[cNode0330,cNode0331]          
            };

                    
            var cNode034 =  {
                id: "c034",
                name: "Control<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };
        
                    
            var cNode035 =  {
                id: "c035",
                name: "Bus<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };
            
        var cNode03 = {
            id: "c03",
            name: "Engineering<br>Department",
            data:{"height":"5.6","height":"2.3"},
            children:[cNode030,cNode031,cNode032,cNode033,cNode034,cNode035]
        };

            // Children of cNode04 (Technology<br>Department)      
          
            var cNode040 =  {
                id: "c040",
                name: "Timing<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };

                    
            var cNode041 =  {
                id: "c041",
                name: "ALU<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };

                /* children of cNode042 "Memory Division" */           
          
                var cNode0420 =  {
                    id: "c0420",
                    name: "RAM",
                    data:{"height":"2.8","height":"1.5"},
                    children:[]         
                };    
          
                var cNode0421 =  {
                    id: "c0421",
                    name: "ROM",
                    data:{"height":"2.8","height":"1.5"},
                    children:[]         
                };          
          
                var cNode0422 =  {
                    id: "c0422",
                    name: "Regisrters",
                    data:{"height":"5.0","height":"1.5"},
                    children:[]         
                };       
        
                    
            var cNode042 =  {
                id: "c042",
                name: "Memory<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[cNode0420,cNode0421,cNode0422]            
            };

                /* children of cNode043 "I/O Division" */          
          
                var cNode0430 =  {
                    id: "c0430",
                    name: "Input",
                    data:{"height":"3.1","height":"1.5"},
                    children:[]         
                };     
          
                var cNode0431 =  {
                    id: "c0431",
                    name: "Output",
                    data:{"height":"3.4","height":"1.5"},
                    children:[]         
                };
          
            var cNode043 =  {
                id: "c043",
                name: "I/O<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[cNode0430,cNode0431]          
            };

                    
            var cNode044 =  {
                id: "c044",
                name: "Control<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };
        
                    
            var cNode045 =  {
                id: "c045",
                name: "Bus<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };
        
                    
            var cNode046 =  {
                id: "c046",
                name: "Drafting<br>Division",
                data:{"height":"4.1","height":"2.3"},
                children:[]         
            };
    
        var cNode04 =  {
            id: "c04",
            name: "Technology<br>Department",
            data:{"height":"5.6","height":"2.3"},
            children:[cNode040,cNode041,cNode042,cNode043,cNode044,cNode045,cNode046]           
        };
        
    var cNode0 =  {
        id: "c0",
        name: "Company<br>Manager (CEO)",
        data:{"height":"7.2","height":"2.3"},
        children:[cNode00,cNode01,cNode02,cNode03,cNode04]          
    };

    var cNode1=  {
        id: "c1",
        name: "Board of<br>Directors",
        data:{"height":"4.7","height":"2.3"},
        children:[]         
    };
        
    var cNode2 =  {
        id: "c2",
        name: "Consultants",
        data:{"height":"5.6","height":"1.5"},
        children:[]         
    };
        
var cNode4 =  {
    id: "c4",
    name: "Educate, Design & Build Inc.",
    data:{"width":"11.9","height":"1.5"},
    children:[cNode0,cNode1,cNode2]         
};


// Data for all Company
	
	    // Children of sNode01 (CEO)
		
	    var sNode010 = {
	        id: "s010",
		    name: "Personnel<br>Department",
		    data:{},
		    children:[]
        };

        CalcWdHt.calc(sNode010);

	        // Children of sNode011 (Media<br>Department)	   
		  
			var sNode0110 =  {
			    id: "s0110",
				name: "Photography &<br>Videography<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0110);

					
			var sNode0111 =  {
			    id: "s0111",
				name: "Website<br>Development<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0111);
			
	    var sNode011 =  {
	        id: "s011",
		    name: "Media<br>Department",
		    data:{},
		    children:[sNode0110,sNode0111]
        };

        CalcWdHt.calc(sNode011);

	        // Children of sNode012 (Computer<br>Department)	   
		  
			var sNode0120 =  {
			    id: "s0120",
				name: "Architecture<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0120);

					
			var sNode0121 =  {
			    id: "s0121",
				name: "Software<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0121);
			
	    var sNode012 =  {
	        id: "s012",
		    name: "Computer<br>Department",
		    data:{},
		    children:[sNode0120,sNode0121]			
	    };

        CalcWdHt.calc(sNode012);

	        // Children of sNode013 (Engineering<br>Department)	   
		  
			var sNode0130 =  {
			    id: "s0130",
				name: "Timing<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0130);

					
			var sNode0131 =  {
			    id: "s0131",
				name: "ALU<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0131);

                /* children of sNode0132 "Memory Division" */		   
		  
				var sNode01320 =  {
				    id: "s01320",
					name: "RAM",
					data:{"width":"45","height":"20"},
					children:[]			
				};

	    //        CalcWdHt.calc(sNode01320); 		   
		  
				var sNode01321 =  {
				    id: "s01321",
					name: "ROM",
					data:{"width":"45","height":"20"},
					children:[]			
				};

	   //         CalcWdHt.calc(sNode01321); 		   
		  
				var sNode01322 =  {
				    id: "s01322",
					name: "Regisrters",
					data:{},
					children:[]			
				};

	            CalcWdHt.calc(sNode01322);          
		
					
			var sNode0132 =  {
			    id: "s0132",
				name: "Memory<br>Division",
				data:{},
			    children:[sNode01320,sNode01321,sNode01322]			
			};

            CalcWdHt.calc(sNode0132);

                /* children of sNode0133 "I/O Division" */		   
		  
				var sNode01330 =  {
				    id: "s01330",
					name: "Input",
					data:{},
					children:[]			
				};

	            CalcWdHt.calc(sNode01330); 		   
		  
				var sNode01331 =  {
				    id: "s01331",
					name: "Output",
					data:{},
					children:[]			
				};

	            CalcWdHt.calc(sNode01331);     	   
		  
			var sNode0133 =  {
			    id: "s0133",
				name: "I/O<br>Division",
				data:{},
				children:[sNode01330,sNode01331]			
			};

            CalcWdHt.calc(sNode0133);

					
			var sNode0134 =  {
			    id: "s0134",
				name: "Control<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0134);
		
					
			var sNode0135 =  {
			    id: "s0135",
				name: "Bus<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0135);
			
	    var sNode013 = {
	        id: "s013",
		    name: "Engineering<br>Department",
		    data:{},
		    children:[sNode0130,sNode0131,sNode0132,sNode0133,sNode0134,sNode0135]
        };

        CalcWdHt.calc(sNode013);

	        // Children of sNode014 (Technology<br>Department)	   
		  
			var sNode0140 =  {
			    id: "s0140",
				name: "Timing<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0140);

					
			var sNode0141 =  {
			    id: "s0141",
				name: "ALU<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0141);
		
					
			var sNode0142 =  {
			    id: "s0142",
				name: "Memory<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0142);

                /* children of sNode0143 "I/O Division" */		   
		  
				var sNode01430 =  {
				    id: "s01430",
					name: "Input",
					data:{},
					children:[]			
				};

	            CalcWdHt.calc(sNode01430); 		   
		  
				var sNode01431 =  {
				    id: "s01431",
					name: "Output",
					data:{},
					children:[]			
				};

	            CalcWdHt.calc(sNode01431);     
		  
			var sNode0143 =  {
			    id: "s0143",
				name: "I/O<br>Division",
				data:{},
				children:[sNode01430,sNode01431]			
			};

            CalcWdHt.calc(sNode0143);

					
			var sNode0144 =  {
			    id: "s0144",
				name: "Control<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0144);
		
					
			var sNode0145 =  {
			    id: "s0145",
				name: "Bus<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0145);
		
					
			var sNode0146 =  {
			    id: "s0146",
				name: "Drafting<br>Division",
				data:{},
			    children:[]			
			};

            CalcWdHt.calc(sNode0146);
	
        var sNode014 =  {
	        id: "s014",
	        name: "Technology<br>Department",
	        data:{},
	        children:[sNode0140,sNode0141,sNode0142,sNode0143,sNode0144,sNode0145,sNode0146]			
        };

        CalcWdHt.calc(sNode014);

	        // Children of sNode016 (Education<br>Department)
	
			 var sNode0150 = {
				id: "s0150",
				name: "Training<br>Division",
				data:{},
				children:[] 
			 };

			 CalcWdHt.calc(sNode0150);

			var sNode0151 = {
				id: "s0151",
				name: "Testing<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0151);

			var sNode0152 = {
				id: "s0152",
				name: "Math<br>Division",
				data:{},
				children:[]			
			};

            CalcWdHt.calc(sNode0152);
	
        var sNode015 =  {
	        id: "s015",
	        name: "Education<br>Department",
	        data:{},
	        children:[sNode0150,sNode0151,sNode0152]			
        };

        CalcWdHt.calc(sNode015);
		
	var sNode01 =  {
	    id: "s01",
		name: "Company<br>Manager (CEO)",
		data:{},
		children:[sNode010,sNode011,sNode012,sNode013,sNode014,sNode015]			
	};

    CalcWdHt.calc(sNode01);

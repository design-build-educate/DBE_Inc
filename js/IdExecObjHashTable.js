
var IdExecObjHashTable = {
	//Properties
/*	ceoId: ManagementCeo,
    engrMngrId: ManagementEngineering,
    techMngrId: ManagementTechnician,
    compMngrId: ManagementComputer,
    eduMngrlId: ManagementEducation,
    mediaMngrId: ManagementMedia,  */

    //Methods
    getObj: function(id) {
            switch (id) {
            	// Management Dept Divisions
                case "ceoId":
                    return ManagementCeo;
                break
                case "engrMngrId":
               // alert(ManagementCeo.test);
                    return ManagementEngineering;
                break
                case "techMngrId":
               // alert(ManagementCeo.test);
                    return ManagementTechnician;
                break
                case "compMngrId":
               // alert(ManagementCeo.test);
                    return ManagementComputer;
                break
                case "eduMngrlId":
               // alert(ManagementCeo.test);
                    return ManagementEducation;
                break
                case "mediaMngrId":
               // alert(ManagementCeo.test);
                    return ManagementMedia;
                break

                // Engineering Dept Divisions
                case "aluEngrId":
                    return EngineeringAlu;
                break
                case "memoryEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringMemory;
                break
                case "counterEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringCounter;
                break
                case "busEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringBus;
                break
                case "controlEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringControl;
                break
                case "input-outputEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringIO;
                break
                case "timingEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringTiming;
                break
                case "testingEngrId":
               // alert(ManagementCeo.test);
                    return EngineeringTesting;
                break


                // Technician Dept Divisions
                case "aluTechId":
                    return TechnicianAlu;
                break
                case "memoryTechId":
               // alert(ManagementCeo.test);
                    return TechnicianMemory;
                break
                case "counterTechId":
               // alert(ManagementCeo.test);
                    return TechnicianCounter;
                break
                case "busTechId":
               // alert(ManagementCeo.test);
                    return TechnicianBus;
                break
                case "controlTechId":
               // alert(ManagementCeo.test);
                    return TechnicianControl;
                break
                case "input-outputTechId":
               // alert(ManagementCeo.test);
                    return TechnicianIO;
                break
                case "timingTechId":
               // alert(ManagementCeo.test);
                    return TechnicianTiming;
                break
                case "testingTechId":
               // alert(ManagementCeo.test);
                    return TechnicianTesting;
                break


                // Computer Dept Divisions
                case "archCompId":
                    return ComputerArchitect;
                break
                case "isaCompId":
               // alert(ManagementCeo.test);
                    return ComputerISA;
                break
                case "webCompId":
               // alert(ManagementCeo.test);
                    return ComputerWebDev;
                break
                case "langCompId":
               // alert(ManagementCeo.test);
                    return ComputerLang;
                break


                // Education Dept Divisions
                case "trainEducId":
                    return EducationTraining;
                break
                case "testEducId":
               // alert(ManagementCeo.test);
                    return EducationTesting;
                break
                case "matEducId":
               // alert(ManagementCeo.test);
                    return EducationMatAcqDev;
                break
                case "romEducId":
               // alert(ManagementCeo.test);
                    return EducationRom;
                break


                // Media Dept Divisions
                case "photoMediaId":
                    return MediaPhotography;
                break
                case "videoMediaId":
               // alert(ManagementCeo.test);
                    return MediaVideography;
                break
                case "audMediaId":
               // alert(ManagementCeo.test);
                    return MediaAudio;
                break
                case "graMediaId":
               // alert(ManagementCeo.test);
                    return MediaGraphicArt;
                break
                case "lightMediaId":
               // alert(ManagementCeo.test);
                    return MediaLighting;
                break

                default:
                alert("No Such Division As " + id);
            }
    } //End of Method: getDeptObj

} // End of Class: IdExecObjHashTable

 var APP  = { title:"RU VOICE TEST",
		  trial_screen:[],          	
          trial_screen2:
          [		
		  {name:"Contact Information",  inputs: ["e-mail","phone"]},
		  {name: "Birthdate", inputs: ["dd","mm","yyyy"]},
		  {name: "Login Info", inputs: ["UserName","Password"]}		  
          ],
		  trial:
		  [
		   {context:"Les  profs se plaignent tous que les élèves ne travaillent pas pendant les cours d’été",
			target:"Marie va venir ce soir." ,
			verification:"Jean n'est pas sûr qui va venir à la soirée. V"
		   },
		   {context:"Jean ne sait pas quand sa soeur va venir, mais moi si. Je lui dis:",
			target:"Françoise a téléphoné ce matin?" ,
			verification:"Jean sait quand sa soeur va venir. F"
		   }
		  ],
		  blocks:
		  [ {context: "C1",
		     target : "T1",
			 audio1 : "bafe.s_424.wav.mp3",
			 audio2 : "bafe_420.wav.mp3" 
			},
			{context: "C2",
		     target : "T2",
			 audio1 : "baudge.i_618.wav.mp3",
			 audio2 : "baudge.z_616.wav.mp3" 
			}
		  ]
		   
		 
        }
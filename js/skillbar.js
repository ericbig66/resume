//Set Skill value below at SV (in percentage)[note: do not include unit]
		//console.log("load successful");
		var SV= new Array(undefined,60,70,80,75);
		// for(var ii=1;ii<5;ii++){
		// 	//SV[ii]=parseInt(document.getElementById("getskill-"+ii).innerHTML);
		// 	SV[ii]=ii*10;
		// }
		var SkillValue= new Array(undefined,0,0,0,0);
		var t = setTimeout('SkillGrow()',80);
		console.log("still on");
		SkillGrow();
		function SkillGrow(){
			for(var i=1;i<5 ;i++){
				SkillValue[i]++;
				if(SkillValue[i]<=SV[i]){
					document.getElementById("SkillBar-"+i).innerHTML=SkillValue[i]+"%";
					console.log("SV"+i+"="+SV[i]+"  SkillValue"+i+"="+SkillValue[i]);
					if(SkillValue[i]==2){document.getElementById("SkillBar-"+i).style.width=SV[i]+"%";}
				}
				
				clearTimeout(t);
				if(SkillValue[i]<SV[i]){t=setTimeout('SkillGrow()',20);}
			//console.log("done");
			}
			
		}
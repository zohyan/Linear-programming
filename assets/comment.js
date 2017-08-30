

	/*function solutionBas(coo1, coo2){
		for (var i = 0; i < 800; i++) {
			coo1.y--;
			coo2.y--;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - i/1000) + ")";
			ctx.stroke();
		}
		for (var i = 800; i < 1200; i++) {
			coo1.y--;
			coo2.y--;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - 800/1000) + ")";
			ctx.stroke();
		}
	}

	function solutionHaut(coo1, coo2){
		for (var i = 0; i < 800; i++) {
			coo1.y++;
			coo2.y++;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - i/1000) + ")";
			ctx.stroke();
		}
		for (var i = 800; i < 1200; i++) {
			coo1.y++;
			coo2.y++;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - 800/1000) + ")";
			ctx.stroke();
		}
	}

	function solutionGauche(coo1, coo2){
		for (var i = 0; i < 800; i++) {
			coo1.x++;
			coo2.x++;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - i/1000) + ")";
			ctx.stroke();
		}
		for (var i = 800; i < 1200; i++) {
			coo1.x++;
			coo2.x++;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - 800/1000) + ")";
			ctx.stroke();
		}
	}

	function solutionDroite(coo1, coo2){
		for (var i = 0; i < 800; i++) {
			coo1.x--;
			coo2.x--;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - i/1000) + ")";
			ctx.stroke();
		}
		for (var i = 800; i < 1200; i++) {
			coo1.x--;
			coo2.x--;
			ctx.beginPath();
			ctx.moveTo(coo1.x, coo1.y);
			ctx.lineTo(coo2.x, coo2.y);
			ctx.strokeStyle = "rgba(255,100,100," + (1 - 800/1000) + ")";
			ctx.stroke();
		}
	}*/


/*if(){
		ctx.beginPath();
		ctx.moveTo(coo1_tmp.x, coo1_tmp.y);
		ctx.lineTo(coo2_tmp.x, coo2_tmp.y);
		ctx.strokeStyle = "rgba(255, 100, 100, 0.8)";
		ctx.stroke();
	}*/

	// Oblique ou Horizontal
	/*if(b != 0){
		if(inf){
			if(c != 0){
				if(Math.abs(a) > Math.abs(b)) solutionGauche(coo1, coo2);
				else solutionGauche(coo1, coo2);
				/*if(0 < c){
					if(c/b > 0)
						solutionBas(coo1, coo2);
					else
						solutionHaut(coo1, coo2);
				}else{
					if(c/b > 0)
						solutionHaut(coo1, coo2);
					else
						solutionBas(coo1, coo2);
				}*/
	/*		}
			else{
				if(Math.abs(a) > Math.abs(b)) solutionBas(coo1, coo2);
				else solutionGauche(coo1, coo2);
			}
		}
		else{
			if(c!=0){
				if(0 > c){
					if(c/b > 0)
						solutionBas(coo1, coo2);
					else
						solutionHaut(coo1, coo2);					
				}else{
					if(c/b > 0)
						solutionHaut(coo1, coo2);
					else
						solutionBas(coo1, coo2);
				}
			}
			else{
				if(a>b) solutionHaut(coo1, coo2);
				else solutionDroite(coo1, coo2);
			}
		}
	}

	// Vertical
	else{
		if(inf){
			if(0 < c){
				if(-c/a > 0)
					solutionDroite(coo1, coo2);
				else
					solutionGauche(coo1, coo2);					
			}else{
				if(-c/a > 0)
					solutionGauche(coo1, coo2);
				else
					solutionDroite(coo1, coo2);
			}

		}else{
			if(0 > c){
				if(-c/a > 0)
					solutionDroite(coo1, coo2);
				else
					solutionGauche(coo1, coo2);					
			}else{
				if(-c/a > 0)
					solutionGauche(coo1, coo2);
				else
					solutionDroite(coo1, coo2);
			}
		}
	}
}

//Signe de l'inéquation
switch(sign){
	case '<':
		setStrike(true, false, coo1, coo2);
		break;
	case '<=':
		setStrike(true, true, coo1, coo2);
		break;
	case '>':
		setStrike(false, false, coo1, coo2);
		break;
	case '>=':
		setStrike(false, true, coo1, coo2);
		break;
}*/
// Author: aronoom

$(function(){

	$('.result').hide();
	var unite = 20;
	var cMax = 20;
	var origin = 400;
	var d = {'GAUCHE': 1, 'DROITE': 2, 'HAUT': 3, 'BAS': 4};

	var inequation = '<div class="inequation">' + $('.inequation').html() + '</div>';

	var canvas = document.getElementById('cnv');
	var ctx = canvas.getContext('2d');
	
	function Coordonnee(x, y){
		this.x = (origin + x * unite);
		this.y = (origin - y * unite);
	}

	function setRepere(){
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;

		//Axe x
		ctx.beginPath();
		ctx.moveTo(0, 400);
		ctx.lineTo(800, 400);
		ctx.stroke();

		// Pointe x
		ctx.beginPath();
		ctx.moveTo(790, 395);
		ctx.lineTo(800, 400);
		ctx.lineTo(790, 405);
		ctx.stroke();

		//Axe y
		ctx.beginPath();
		ctx.moveTo(400, 0);
		ctx.lineTo(400, 800);
		ctx.stroke();

		// Pointe y
		ctx.beginPath();
		ctx.moveTo(395, 10);
		ctx.lineTo(400, 0);
		ctx.lineTo(405, 10);
		ctx.stroke();

		//Pointillé x;
		var i = 0;
		while((i * unite) < 400 ){
			var currentCoo = new Coordonnee(i, 0);
			ctx.beginPath();
			ctx.moveTo(currentCoo.x, 397);
			ctx.lineTo(currentCoo.x, 403);
			ctx.stroke();

			var currentCooMoins = new Coordonnee(-i, 0);
			ctx.beginPath();
			ctx.moveTo(currentCooMoins.x, 397);
			ctx.lineTo(currentCooMoins.x, 403);
			ctx.stroke();
			i++;
		}

		var j = 0;
		while((j * unite) < 400 ){
			var currentCoo = new Coordonnee(0, j);
			ctx.beginPath();
			ctx.moveTo(397, currentCoo.y);
			ctx.lineTo(403, currentCoo.y);
			ctx.stroke();

			var currentCooMoins = new Coordonnee(0, -j);
			ctx.beginPath();
			ctx.moveTo(397, currentCooMoins.y);
			ctx.lineTo(403, currentCooMoins.y);
			ctx.stroke();
			j++;
		}
	}


	function setInequation(a, b, c, sign){
		var coo1, coo2;

		if(a == 0 && b == 0)
			alert('Erreur!');

		else{
			//Parallele à Y
			if(a == 0){
				coo1 = new Coordonnee(-cMax, c/b);
				coo2 = new Coordonnee(cMax, c/b);
			}
			else{
				coo1 = new Coordonnee((c + cMax * b)/a, -cMax);
				coo2 = new Coordonnee((c - cMax * b)/a, cMax)
			}

			ctx.beginPath();
			ctx.moveTo(coo2.x, coo2.y);
			ctx.lineTo(coo1.x, coo1.y);
			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			ctx.stroke();
		}

		function solution(direction){
			for (var i = 0; i < 800; i++) {
				switch(direction){
					case d.BAS:
						coo1.y--;
						coo2.y--;
						break;
					case d.HAUT:
						coo1.y++;
						coo2.y++;
						break;
					case d.GAUCHE:
						coo1.x++;
						coo2.x++;
						break;
					case d.DROITE:
						coo1.x--;
						coo2.x--;
						break;
				}
				ctx.beginPath();
				ctx.moveTo(coo1.x, coo1.y);
				ctx.lineTo(coo2.x, coo2.y);
				ctx.strokeStyle = "rgba(137, 157, 156," + (1 - i/1000)/2 + ")";
				ctx.stroke();
			}
			for (var i = 1; i < 12000; i++) {
				switch(direction){
					case d.BAS:
						coo1.y--;
						coo2.y--;
						break;
					case d.HAUT:
						coo1.y++;
						coo2.y++;
						break;
					case d.GAUCHE:
						coo1.x++;
						coo2.x++;
						break;
					case d.DROITE:
						coo1.x--;
						coo2.x--;
						break;
				}
				ctx.beginPath();
				ctx.moveTo(coo1.x, coo1.y);
				ctx.lineTo(coo2.x, coo2.y);
				ctx.strokeStyle = "rgba(137, 157, 156," + (1 - 800/1000)/2 + ")";
				ctx.stroke();
			}
		}

		switch(sign){
			case '<': case '<=':
				if(c > 0){
					if(Math.abs(a) <= Math.abs(b)){ // Horizontale
						if(0 < c/b)  solution(d.BAS);
						else solution(d.HAUT);
					}
					else{ //Verticale
						//condition vao2 tokony ho appliquer-na amin cas sasany raha mis b == 0 no olana
						if(b!=0){
							if(0 < c/b)
								solution(d.DROITE);
							else solution(d.GAUCHE);
						} 
						else{
							if(a>0)
								solution(d.GAUCHE);
							else
								solution(d.DROITE);
						}
					}
				}
				else if(c < 0){
					if(Math.abs(a) <= Math.abs(b)){ // Horizontale
						if(0 > c/b)  solution(d.BAS);
						else solution(d.HAUT);
					}
					else{ //Verticale
						if(0 > c/a) solution(d.GAUCHE);
						else solution(d.DROITE);
					}
				}
				else if(a!=1 && b!=1){ // pour les droites passants par O
					if(Math.abs(a) <= Math.abs(b)){
						if(1<-a/b) solution(d.BAS);
						else solution(d.HAUT);
					}
					else{
						if(1<-b/a) solution(d.GAUCHE);
						else solution(d.DROITE);
					}
				}
				else{
					if(Math.abs(a) <= Math.abs(b)){
						if(-1 < a/b) solution(d.BAS);
						else solution(d.HAUT);
					}
					else{
						if(-1 < b/a) solution(d.GAUCHE);
						else solution(d.DROITE); 
					}
				}
				break;
			case '>': case '>=':
				if(c > 0){
					if(Math.abs(a) <= Math.abs(b)){ // Horizontale
						if(0 > c/b)  solution(d.BAS);
						else solution(d.HAUT);
					}
					else{ //Verticale
						if(b!=0){
							if(0 < c/b)
								solution(d.GAUCHE);
							else solution(d.DROITE);
						} 
						else{
							if(a>0)
								solution(d.DROITE);
							else
								solution(d.GAUCHE);
						}
					}
				}
				else if(c < 0){
					if(Math.abs(a) <= Math.abs(b)){ // Horizontale
						if(0 < c/b)  solution(d.BAS);
						else solution(d.HAUT);
					}
					else{ //Verticale
						if(0 < c/a) solution(d.GAUCHE);
						else solution(d.DROITE);
					}
				}
				else if(a!=1 && b!=1){ // pour les droites passants par O
					if(Math.abs(a) <= Math.abs(b)){
						if(1 > -a/b) solution(d.BAS);
						else solution(d.HAUT);
					}
					else{
						if(1 > -b/a) solution(d.GAUCHE);
						else solution(d.DROITE);
					}
				}
				else{
					if(Math.abs(a) <= Math.abs(b)){
						if(-1 > a/b) solution(d.BAS);
						else solution(d.HAUT);
					}
					else{
						if(-1 > b/a) solution(d.GAUCHE);
						else solution(d.DROITE); 
					}
				}
				break;
		}
	}


	//Intersection courbe
	function getIntersection(){
		var x, y, i, j = 0;
		var a1, b1, c1, a1, b1, c1;
		var tabIntersection = [];
		while(j < $('.inequation').length - 1){
			i = j+1;
			a1 = parseFloat($('.a:eq(' + j + ')').val());
			b1 = parseFloat($('.b:eq(' + j + ')').val());
			c1 = parseFloat($('.c:eq(' + j + ')').val());
			while(i < $('.inequation').length){
				a2 = parseFloat($('.a:eq(' + i + ')').val());
				b2 = parseFloat($('.b:eq(' + i + ')').val());
				c2 = parseFloat($('.c:eq(' + i + ')').val());
				if(b1*a2 - b2*a1 != 0){
					x = (b1*c2 - b2*c1)/(b1*a2 - b2*a1);
					if(b1 != 0)
						y = (-a1*x + c1) / b1;
					else
						y = (-a2*x + c2) / b2;
					tabIntersection.push({'x': x, 'y': y});
					console.log('x: ' + x + ', y: ' + y);
				}
				i++;
			}
			j++;
		}
		return tabIntersection;
	}
	//Verification intersection
	function verifIntersection(coo){
		for (var i = 0; i < $('.inequation').length; i++) {	
			var a = parseFloat($('.a:eq(' + i + ')').val());
			var b = parseFloat($('.b:eq(' + i + ')').val());
			var c = parseFloat($('.c:eq(' + i + ')').val());
			var sign = $('.sign:eq(' + i + ')').val();
			if(sign == '<' || sign == '<=')
				if(a*coo.x + b*coo.y > c) return false;
			if(sign == '>' || sign == '>=')
				if(a*coo.x + b*coo.y < c) return false;
		}
		return true;
	}

	// Trace la droite d'optimisation
	function setOptimisation(tabD){
		if(tabD.length > 0){
			var a = tabD[0].a, b = tabD[0].b, c = tabD[0].c;
			
			console.log('a = ' + a + ', b = ' + b + ', c = ' + c);
			
			for (var i = 1; i < tabD.length; i++) {
				if($('#optimisation').val() == 'min'){
					if(b!=0){
						if(c/b > tabD[i].c/tabD[i].b){
							a = tabD[i].a;
							b = tabD[i].b;
							c = tabD[i].c;
						}
					}
					else{
						if(c/a > tabD[i].c/tabD[i].a){
							a = tabD[i].a;
							b = tabD[i].b;
							c = tabD[i].c;
						}
					}
				}
				if($('#optimisation').val() == 'max'){
					if(b!=0){
						if(c/b < tabD[i].c/tabD[i].b){
							a = tabD[i].a;
							b = tabD[i].b;
							c = tabD[i].c;
						}
					}
					else{
						if(c/a < tabD[i].c/tabD[i].a){
							a = tabD[i].a;
							b = tabD[i].b;
							c = tabD[i].c;
						}
					}
				}

			}
			if(a == 0 && b == 0)
				alert('Erreur!');

			else{
				//Parallele à X
				if(a == 0){
					coo2 = new Coordonnee(-cMax, c/b);
					coo1 = new Coordonnee( cMax, c/b);
				}

				//Parallele à Y
				if(b == 0){
					coo2 = new Coordonnee(c/a, -cMax);
					coo1 = new Coordonnee(c/a,  cMax);
				}
				if(a !=0 && b != 0){
					coo2 = new Coordonnee(cMax, (c - cMax * a)/b)
					coo1 = new Coordonnee(-cMax, (c + cMax * a)/b);
				}
				ctx.beginPath();
				ctx.moveTo(coo1.x, coo1.y);
				ctx.lineTo(coo2.x, coo2.y);
				ctx.strokeStyle = "darkred";
				ctx.stroke();
			}
		}
		return {'a': a, 'b': b, 'c': c};
	}

	//Ajouter inéquation
	$('#add').click(function(){
		$('#system').append(inequation);
		$('.inequation:last').hide().show(200);
	});
	$('#remove').click(function(){
		if($('.inequation').length > 1){
			$('.inequation:last').hide(200, function(){
				this.remove();
			});
		}
	});
	
	//Click bouton affiche
	$('#affiche').click(function(){
		setRepere();
		for (var i = 0; i < $('.inequation').length; i++) {
			var a = parseFloat($('.a:eq(' + i + ')').val());
			var b = parseFloat($('.b:eq(' + i + ')').val());
			var c = parseFloat($('.c:eq(' + i + ')').val());
			var sign = $('.sign:eq(' + i + ')').val();
			setInequation(a, b, c, sign);
		}
		var intersection = getIntersection();
		var tabDroite = [];	
		var a_opt = parseFloat($('#a').val());
		var b_opt = parseFloat($('#b').val());
		var c_opt;
		for (var i = 0; i < intersection.length; i++) {
			c_opt = a_opt*intersection[i].x + b_opt*intersection[i].y;
			if(verifIntersection(intersection[i])) tabDroite.push({'a': a_opt, 'b': b_opt, 'c': c_opt});
		}
		console.log(intersection.length);
		//if(tabDroite.length > 2)
		var droiteOptimal = setOptimisation(tabDroite);

		console.log(droiteOptimal);
		for (var i = 0; i < intersection.length; i++) {
			if(droiteOptimal.a * intersection[i].x + droiteOptimal.b * intersection[i].y == droiteOptimal.c){	
				document.getElementById('x1').innerHTML = intersection[i].x;
				document.getElementById('x2').innerHTML = intersection[i].y;
				document.getElementById('z').innerHTML  = droiteOptimal.c;
				$('.result').show();
			}
		}

	});
});

window.addEventListener('load', function(){
    /*
        //////Masque la page avec popup au démarrage  
        var bodyMasque = document.getElementById('masqueMoi');
        bodyMasque.addEventListener('load',masqueMoi );

        function masqueMoi(){
            document.getElementById('enTete').style.display="none";
            document.getElementById('titreh1').style.display="none";
            document.getElementById('flags').style.display="none";
            document.getElementById('cook').style.display="none";
            document.querySelector('.para').style.display="none";
        }
        ///////////////////////////////////////////////////////////////
        */
        
        //Déclaration des Variables globales
        var partieGauche = document.getElementById('flagLeft');
        var partieCentre = document.getElementById('flagCentre');
        var partieDroite = document.getElementById('flagRight');
        
        var palette = ['green','red','white','blue'];//palette par défaut
        var paletteColorsByFlag = ['paletteFrance','paletteBelgique','paletteAllemagne','paletteHolland'];
        var paletteFrance = ['green','red','white','blue','purple','orange'];
        var paletteBelgique=['orange','red','yellow','black'];
        var paletteTchad=['orange','red','yellow','blue'];
        var paletteAllemagne=['green','red','black','yellow'];
        var paletteHolland=['purple','red','white','blue'];
        var palettePologne=['green','blue','white','red'];
        var paletteTcheque=['orange','blue','white','red'];

        //var drapeaux = ['blue/white/red', 'black/yellow/red','red/yellow/blue','black,red,yellow'];
        var pays = ['France','Belgique','Allemagne','Hollande','Pologne','Tcheque'];
        ////////////////////////////////////////////////////////////////////

        //EventListener
        partieGauche.addEventListener('click', changeCouleur);
        partieCentre.addEventListener('click', changeCouleur);
        partieDroite.addEventListener('click', changeCouleur);
        ///////////////////////////////////////////////////////
        
        
        var nextColor=palette[0];
        function changeCouleur(){
            this.style.backgroundColor = nextColor;
            verificationDrapeauSansBtnValider();
            updateColor();
            compteurTour;
            console.log(compteurTour());
                
        }
        function updateColor(){
 
                 if(nextColor==palette[0]){nextColor=palette[1];}
            else if(nextColor==palette[1]){nextColor=palette[2];}
            else if(nextColor==palette[2]){nextColor=palette[3];}
            else if(nextColor==palette[3]){nextColor=palette[0];}
            //on pourra ajouter de la difficulté plus tard via le nombre de cpuleur par Drapeau
            else if(nextColor==palette[4]){nextColor=palette[5];}
            else if(nextColor==palette[5]){nextColor=palette[0];}
            //return nextColor;
        }


        function compteurClick(){
            var i=1;
            return function(){
                return i++;
            }
        }
        function compteurScore(){
            var i=0;
            return function(){
                return i++;
            }
        }
        var compteurTour=compteurClick();
        var compteScoreActuel=compteurScore();


        function isFlagValidFrance(){
            if(partieGauche.style.backgroundColor==='blue' && 
               partieCentre.style.backgroundColor==='white'&&
               partieDroite.style.backgroundColor==='red'){
                console.log('Couleur trouvée');
                lireSon();
                changerDrapeauBelgique();
                

            }else{
                
            }
        }
        function isFlagValidBelgique(){

            
            if(partieGauche.style.backgroundColor==='black' && 
            partieCentre.style.backgroundColor==='yellow'&&
            partieDroite.style.backgroundColor==='red'
                ){
                    console.log('Couleur trouvée');
                   
                    changerDrapeauAllemagne();
                    document.getElementById('flags').style.display='inline-grid';
                    document.getElementById('flags').style.width= '-webkit-fill-available';
                    partieGauche.style.height='50px';
                    partieGauche.style.width='90%';

                    partieCentre.style.height='50px';
                    partieCentre.style.width='90%';

                    partieDroite.style.height='50px';
                    partieDroite.style.width='90%';
                

            }else{
                
            }
        }
        function isFlagValidTchad(){

            
            if(partieGauche.style.backgroundColor==='blue' && 
            partieCentre.style.backgroundColor==='yellow'&&
            partieDroite.style.backgroundColor==='red'
                ){
                    console.log(' Fin');
                    
                    changerDrapeauAllemagne();
                    document.getElementById('flags').style.display='inline-grid';
                    document.getElementById('flags').style.width= '-webkit-fill-available';
                    partieGauche.style.height='50px';
                    partieGauche.style.width='90%';

                    partieCentre.style.height='50px';
                    partieCentre.style.width='90%';

                    partieDroite.style.height='50px';
                    partieDroite.style.width='90%';
                    

                

            }else{
                
            }
        }
        function isFlagValidAllemagne(){

            
            if(partieGauche.style.backgroundColor==='black' && 
            partieCentre.style.backgroundColor==='red'&&
            partieDroite.style.backgroundColor==='yellow'
                ){
                changerDrapeauHolland();
                                   
            }else{                   
            }
        }
        function isFlagValidHolland(){

            
            if(partieGauche.style.backgroundColor==='red' && 
            partieCentre.style.backgroundColor==='yellow'&&
            partieDroite.style.backgroundColor==='blue'
                ){
                console.log(' Fin');
                
                changerDrapeauFrance();       

            }else{
                
            }
        }
        ///////////Verifications sur Pologne et Tcheque Dessiner
        


        function isLASTFLAGVALID(){
            if( partieGauche.style.backgroundColor==='red' && 
                partieCentre.style.backgroundColor==='white'&&
                partieDroite.style.backgroundColor==='blue'
                ){
                    console.log(' Fin');
                    score++;
                    document.getElementById('spanRight').textContent = "Score : "+score;
                    
                }
            
        }

       function verificationDrapeauSansBtnValider(){
        if(level ==1){setInterval(isFlagValidFrance,4000); }
        if(level ==2){setInterval(isFlagValidBelgique, 4000);}
        if(level ==3){setInterval(isFlagValidAllemagne,4000);}
        if(level ==4){setInterval(isFlagValidHolland,4000);}
        if(level ==5){setInterval(isFlagValidPologne,4000);}
        if(level ==6){setInterval(isFlagValidTcheque,4000); isLASTFLAGVALID();}
        
        else{console.log('Erreur aucun des cas level n\'est soulevé');}

    }


        var score=0;
        var level=1;
        function changerDrapeauBelgique(){
            ++score;
            ++level;
                    palette=paletteBelgique;
                    document.getElementById('titreh1').textContent='Belgique';
                    nextColor=palette[0];
                    partieGauche.style.backgroundColor=palette[0];
                    partieCentre.style.backgroundColor=palette[0];
                    partieDroite.style.backgroundColor=palette[0];

                    document.getElementById('spanRight').textContent = "Score : "+score;                  
                    document.getElementById('spanLeft').textContent = "Level "+level +'/'+pays.length;


        }

        function changerDrapeauTchad(){
            ++score;
            ++level;

               
                palette=paletteTchad;
                document.getElementById('titreh1').textContent='Tchad';
                nextColor=palette[0];
                partieGauche.style.backgroundColor=palette[0];
                partieCentre.style.backgroundColor=palette[1];
                partieDroite.style.backgroundColor=palette[2];


                document.getElementById('spanRight').textContent = "Score : "+score;                  
                document.getElementById('spanLeft').textContent = "Level "+level +'/'+pays.length;



        }
        function changerDrapeauAllemagne(){
            ++score;
            ++level;

                ////////////////Rotation de la Div Flag via css
                document.getElementById('flags').style.display='inline-grid';
                document.getElementById('flags').style.width= '-webkit-fill-available';
                partieGauche.style.height='50px';
                partieGauche.style.width='90%';

                partieCentre.style.height='50px';
                partieCentre.style.width='90%';

                partieDroite.style.height='50px';
                partieDroite.style.width='90%';
                ///////////////////////////////////////////////////
                palette=paletteAllemagne;
                document.getElementById('titreh1').textContent='Allemagne';
                nextColor=palette[0];
                partieGauche.style.backgroundColor=palette[0];
                partieCentre.style.backgroundColor=palette[1];
                partieDroite.style.backgroundColor=palette[2];



                document.getElementById('spanRight').textContent = "Score : "+score;                  
                document.getElementById('spanLeft').textContent = "Level "+level +'/'+pays.length;



        }
        function changerDrapeauHolland(){
            ++score;
            ++level;

               
                palette=paletteHolland;
                document.getElementById('titreh1').textContent='Pays-Bas';
                nextColor=palette[0];
                partieGauche.style.backgroundColor=palette[0];
                partieCentre.style.backgroundColor=palette[1];
                partieDroite.style.backgroundColor=palette[2];

                
                document.getElementById('spanRight').textContent = "Score : "+score;                  
                document.getElementById('spanLeft').textContent = "Level "+level +'/'+pays.length;

        }

        //////////////////////////////////Fonction Chrono
        function chronometre(){
            var seconde = 0;
            var minute = 0;
            var heure = 0;
            function chrono(){
                if (seconde<59) {
                    seconde ++;
                }else{
                    seconde =0;
                    minute++;
                }
                document.getElementById('spanCentre').textContent = heure+':'+minute+':'+ seconde;
            }setInterval(chrono, 1000);
        }
        //////////////////////////////////////////

        
     //Bouton popup commencer//
     document.getElementById('button_modal').addEventListener('click',openModal);
     function openModal(){
        document.getElementById('popup').style.marginTop='-800px';
        chronometre();
        document.getElementById('enTete').style.display="block";
        document.getElementById('titreh1').style.display="block";
        document.getElementById('flags').style.display="block";
        document.getElementById('cook').style.display="block";
        document.querySelector('.para').style.display="block";

         /*
        document.getElementById('popup').innerHTML='<div id="popup"> <div class="button_container"> <button id="button_modal"><p id="p1">Commencer</p></button></div><div id="modal"><h1>Hello World!</h1><h3>Bienvenue dans ce jeu!</h3></div></div>';
        */

     }
     ///////////////////////////////////////////////////////////////////
     


     /////////////////////////////////Méthode pour Dessiner sur les canvas
     
     let canvas = document.getElementById('flagLeft');
     let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(275, 25);
        ctx.lineTo(275, 125);
        ctx.lineTo(175, 125);
        ctx.lineTo(275, 25);
        ctx.fillStyle = 'red'; 
        ctx.fill();
    ///////////////////////////////////////////////////////////////////////////////
    
    //Fonction pour lire le son à la validation d'un drapeau
    function lireSon()
        {
            sonValidation=document.getElementById('gestionSon');
            //sonValidation.type="audio/wave";
            //soundfile=(libsoundWAV[numstyle])?libsoundWAV[numstyle]:"toto.wav"
            //sonValidation.src="UIAlert_Notification.wav";
            //sonValidation.load();
            sonValidation.play();
        }
        

     });

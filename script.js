
//window.addEventListener('load', function(){
 


            //Déclaration des Variables globales
            var partieGauche = document.getElementById('flagLeft');
            var partieCentre = document.getElementById('flagCentre');
            var partieDroite = document.getElementById('flagRight');

            var canvas1 = document.getElementById('flagLeft');
            var canvas2 = document.getElementById('flagCentre');
            var canvas3 = document.getElementById('flagRight');
            
            //Variables stockant differentes couleurs pour chaque pays
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
            //var Drapeaux pour la factorisation plus tard avec Regex pour associer les bonnes couleurs au tableau des pays

            var pays = ['France','Belgique','Allemagne','Hollande'];
            //var pays = ['France','Belgique','Allemagne','Hollande','Pologne','Tcheque']; //Etape9 sera réactivée lorsque le dessin des drapeaux sera fonctionnel
            ////////////////////////////////////////////////////////////////////

            //EventListener
            partieGauche.addEventListener('click', changeCouleur);
            partieCentre.addEventListener('click', changeCouleur);
            partieDroite.addEventListener('click', changeCouleur);
            //EventListener des Canvas seront activés lorsqu'on arrivera sur les Drapeaux Polonais et Tcheques qui seront dessinés


            ///////////////////////////////////////////////////////
            
            
            var nextColor=palette[0];
            function changeCouleur(){
                
                this.style.backgroundColor = nextColor;
                verificationDrapeauSansBtnValider();
                updateColor();

                document.getElementById('spanRight').textContent = "Nombre de clics : "+compteurTour();  
  
            }
            function updateColor(){
     
                     if(nextColor==palette[0]){nextColor=palette[1];}
                else if(nextColor==palette[1]){nextColor=palette[2];}
                else if(nextColor==palette[2]){nextColor=palette[3];}
                else if(nextColor==palette[3]){nextColor=palette[0];}
                //on pourra ajouter de la difficulté plus tard via le nombre de couleur par Drapeau
                else if(nextColor==palette[4]){nextColor=palette[5];}
                else if(nextColor==palette[5]){nextColor=palette[0];}
                return nextColor;
            }

            //cette fonction désactive les EventListener précédents sur les 3 Zones et en crée de nouveaux dédiés au dessin pointant toujours sur les 3 zones
            function activerDessin(){
                partieGauche.removeEventListener('click', changeCouleur);
                partieCentre.removeEventListener('click', changeCouleur);
                partieDroite.removeEventListener('click', changeCouleur);
                //utilisation des canvas poo dessiner les Drapeaux polonais et Tcheques
                canvas1.addEventListener('click', changeDessin);
                canvas2.addEventListener('click', changeDessin);
                canvas3.addEventListener('click', changeDessin);
            }
            
            function changeDessin(){
                this.style.backgroundColor = nextDessin; 
                document.getElementById('spanRight').textContent = "Nombre de clics : "+compteurTour();                  
                document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;
                verificationDrapeauDessiner();
                updateDessin();
  
            }
            function updateDessin(){                          

                
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
                    console.log('Couleur trouvée France');
                    lireSon();
                    changerDrapeauBelgique();
                    

                                     
                    document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;
                    

                }else{
                    
                }
            }
            function isFlagValidBelgique(){

                
                if(partieGauche.style.backgroundColor==='black' && 
                partieCentre.style.backgroundColor==='yellow'&&
                partieDroite.style.backgroundColor==='red'
                    ){
                        console.log('Couleur trouvée Belgique');
                        lireSon();
                        changerDrapeauAllemagne();

                                          
                        document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;

                        document.getElementById('flags').style.display='inline-grid';
                        document.getElementById('flags').style.width= '-webkit-fill-available';
                        partieGauche.style.height='50px';
                        partieGauche.style.width='100%';

                        partieCentre.style.height='50px';
                        partieCentre.style.width='100%';

                        partieDroite.style.height='50px';
                        partieDroite.style.width='100%';
                    

                }else{
                    
                }
            }
            function isFlagValidTchad(){

                
                if(partieGauche.style.backgroundColor==='blue' && 
                partieCentre.style.backgroundColor==='yellow'&&
                partieDroite.style.backgroundColor==='red'
                    ){
                        console.log(' Couleur Trouvée Tchad');
                        lireSon();
                        changerDrapeauAllemagne();
                                          
                        document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;

                        document.getElementById('flags').style.display='inline-grid';
                        document.getElementById('flags').style.width= '-webkit-fill-available';
                        partieGauche.style.height='50px';
                        partieGauche.style.width='100%';

                        partieCentre.style.height='50px';
                        partieCentre.style.width='100%';

                        partieDroite.style.height='50px';
                        partieDroite.style.width='100%';
                        

                    

                }else{
                    
                }
            }
            function isFlagValidAllemagne(){

                
                if(partieGauche.style.backgroundColor==='black' && 
                partieCentre.style.backgroundColor==='red'&&
                partieDroite.style.backgroundColor==='yellow'
                    ){
                    console.log(' Couleur Trouvée Allemagne');
                    lireSon();
                    changerDrapeauHolland();

                                     
                    document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;
                                       
                }else{                   
                }
            }
            function isFlagValidHolland(){

                
                if(partieGauche.style.backgroundColor==='red' && 
                partieCentre.style.backgroundColor==='white'&&
                partieDroite.style.backgroundColor==='blue'
                    ){
                    lireSon();
                    activerDessin();
                    changerDrapeauFinal();
                    
                    JeuTermine=true;                
                    document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;

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
                        lireSon();
                        score++;
                        
                        
                    }
                
            }

            //Cette fonction remplace le bouton 'Valider' qui vérifiait si les couleurs correspondaient au pays en cours
           function verificationDrapeauSansBtnValider(){
            if(level ==1){setInterval(isFlagValidFrance,4000); }
            if(level ==2){setInterval(isFlagValidBelgique, 4000);}
            if(level ==3){setInterval(isFlagValidAllemagne,4000);}
            if(level ==4){setInterval(isFlagValidHolland,4000);}

            
            else{console.log('Vérification sans Bouton valider est active');}
            }
            //Suite de la fonction de Vérification mais pour les deux nouveaux Drapeaux Polonais et Tcheques
            function verificationDrapeauDessiner(){

                if(level ==5){setInterval(isFlagValidPologne,4000);}
                if(level ==6){setInterval(isFlagValidTcheque,4000); isLASTFLAGVALID();}           
                
            }


            var score=0;
            var level=1;
            var niveau=1;//le premier level est déja affiché dans le HTML
            function changerDrapeauBelgique(){
                ++score;
                ++level;
                niveau++;

                        palette=paletteBelgique;
                        document.getElementById('titreh1').textContent='Belgique';
                        nextColor=palette[0];
                        partieGauche.style.backgroundColor=palette[0];
                        partieCentre.style.backgroundColor=palette[0];
                        partieDroite.style.backgroundColor=palette[0];

                        


            }

            function changerDrapeauAllemagne(){
                ++score;
                ++level;
                ++niveau;

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



                    



            }
            function changerDrapeauHolland(){
                ++score;
                ++level;
                ++niveau;

                   
                    palette=paletteHolland;
                    document.getElementById('titreh1').textContent='Pays-Bas';
                    nextColor=palette[0];
                    partieGauche.style.backgroundColor=palette[0];
                    partieCentre.style.backgroundColor=palette[1];
                    partieDroite.style.backgroundColor=palette[2];

                    
                    

            }
            ///////////////////////////////////////////////////////////////////////////////////////////////
            //Dessiner le Drapeau Polonais et Tcheque
             
            function changerDrapeauPologne(){
                ++score;
                ++level;
                ++niveau;

                    
                    palette=paletteHolland;
                    document.getElementById('titreh1').textContent="Merci d'avoir Joué";
                    ////////////////Rotation de la Div Flag via css
                    document.getElementById('flags').style.display='inline-flex';
                    document.getElementById('flags').style.width= '-webkit-fill-available';
                    partieGauche.style.height='';
                    partieGauche.style.width='';

                    partieCentre.style.height='';
                    partieCentre.style.width='';

                    partieDroite.style.height='';
                    partieDroite.style.width='';
                    //nextColor=palette[0];
                    partieGauche.style.backgroundColor=palette[0];
                    partieCentre.style.backgroundColor=palette[0];
                    partieDroite.style.backgroundColor=palette[0];

            }

            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //Besoin du Drapeau Final 
            function changerDrapeauFinal(){
                ++score;
                ++level;
                ++niveau;
                
                
                    JeuTermine=true;
                    stopChrono();
                    document.getElementById('popup2').style.display='block';
                

                    
                    palette=paletteHolland;
                    document.getElementById('titreh1').textContent="Merci d'avoir Joué";
                    ////////////////Rotation de la Div Flag via css
                    document.getElementById('flags').style.display='inline-flex';
                    document.getElementById('flags').style.width= '-webkit-fill-available';

                    partieGauche.style.height='';
                    //document.getElementById('timer').textContent='score';
                    partieGauche.style.width='';

                    var resultatTemps =compteurTour;
                    //Message dans la fenetre principale en fonction du score 
                    if(resultatTemps=37){
                        document.getElementById('flags').textContent=
                        "Bravo vous avez atteint"+
                        "\n le Score Maximum en 37 clics";

                    }else{
                        document.getElementById('flags').textContent="peu mieux faire";
                    }
                    

                    partieCentre.style.height='';
                    partieCentre.style.width='';

                    partieDroite.style.height='';
                    partieDroite.style.width='';
                    
                    partieGauche.style.backgroundColor=palette[0];
                    partieCentre.style.backgroundColor=palette[0];
                    partieDroite.style.backgroundColor=palette[0];

                    

            }




            

            //////////////////////////////////Fonction Chrono/////////////////////////////////////////////
            var horlogeTimer;
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
                }
                horlogeTimer=setInterval(chrono, 1000);

            
            }
            
            function stopChrono() {
                clearInterval(horlogeTimer);
            }
            //////////////////////////////////////////////////////////////////////////////////////////////

            
         //Bouton popup commencer/////////////////////////////////////////////////////
         document.getElementById('button_modal').addEventListener('click',openModal);
         var JeuTermine=false;
         function openModal(){
            document.getElementById('popup').style.marginTop='-800px';
            if(!JeuTermine){
                chronometre();
            
            }else{
                stopChrono();
            }
                      

         }
         /////////////////////////////////////////////////////////////////////////////
         


         /////////////////////////////////Méthode pour Dessiner sur les canvas à considérer comme le tableau de Palette pour les Drapeaux
         function drapeauPolonais(){
            var emplacementDrapeauPolonais1 = function(){
                var canvasleft = document.getElementById('flagLeft');
                var ctx1 = canvasleft.getContext('2d');
                ctx1.beginPath();
                ctx1.fillStyle = 'red'; 
                ctx1.fillRect(0, 75, 300, 75);
    
                ctx1.fillStyle = 'white'; 
                ctx1.fillRect(0, 0, 300, 75);
    
                ctx1.moveTo(0, 0);
                ctx1.lineTo(300, 75);
                ctx1.lineTo(0, 150);
                ctx1.lineTo(0, 300);
                ctx1.fillStyle = 'blue'; 
                ctx1.fill();
            
                var canvasCentre = document.getElementById('flagCentre');
                var ctx2 = canvasCentre.getContext('2d');
                ctx2.beginPath();
                ctx2.fillStyle = 'red'; 
                ctx2.fillRect(0, 75, 300, 75);
                ctx2.fillStyle = 'white'; 
                ctx2.fillRect(0, 0, 300, 75);
    
    
                var canvasRight = document.getElementById('flagRight');
                var ctx3 = canvasRight.getContext('2d');
                ctx3.beginPath();
                ctx3.fillStyle = 'white'; 
                ctx3.fillRect(0, 0, 300, 75);
    
                ctx3.fillStyle = 'red'; 
                ctx3.fillRect(0, 75, 300, 75);

            };
 
            
         }
         
         
         
        /////////////////////////////////////////////////////////////////////////

        
        //Fonction pour lire le son à la validation d'un drapeau///////////////////////////
        function lireSon()
            {
                sonValidation=document.getElementById('gestionSon');
                //sonValidation.type="audio/wave";
                //soundfile=(libsoundWAV[numstyle])?libsoundWAV[numstyle]:"toto.wav"
                //sonValidation.src="UIAlert_Notification.wav";
                //sonValidation.load();
                sonValidation.play();
            }
        //////////////////////////////////////////////////////////////////////////////////
            

 //        });//windows on load fonction

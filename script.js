window.addEventListener('load', function(){
    //DÃ©claration des Variables globales
    var partieGauche = document.getElementById('flagLeft');
    var partieCentre = document.getElementById('flagCentre');
    var partieDroite = document.getElementById('flagRight');
    //les 3 canvas ci dessous pour dessiner les Drapeaux Polonais et Tcheques(dÃ©sactivÃ©s)
         
    //Variables stockant differentes couleurs pour chaque pays
    var palette = ['blue','red','orange','white'];//palette par défaut
    var nextColor=palette[0];
    document.getElementById('RepTcheque').display="none";//on masque la vue du Drapeau RepTcheque

    var paletteFrance = ['black','red','white','blue'];
    var paletteBelgique=['orange','red','yellow','black'];
    var paletteAllemagne=['white','red','black','yellow'];
    var paletteHolland=['green','red','white','blue'];
    var palettePologne=['green','blue','white','red'];
    var paletteTcheque=['black','blue','white','red'];
    var pays = ['France','Belgique','Allemagne','Hollande','Pologne','Republique Tcheque'];
    //var pays = ['France','Belgique','Allemagne','Hollande','Pologne','Tcheque']; //Etape9 sera rÃ©activÃ©e lorsque le dessin des drapeaux sera fonctionnel
    var NbdeClic=0;
    var level=1;
    ////////////////////////////////////////////////////////////////////
    //EventListener
    partieGauche.addEventListener('click', updateColor);
    partieCentre.addEventListener('click', updateColor);
    partieDroite.addEventListener('click', updateColor);
    /////////////////Compteurs
    function compteurClick(){var i=1;return function(){return i++;}}
    function compteurScore(){var i=0;return function(){return i++;}}
    var NbClickCumule=compteurClick();
    var compteClicDrapeauActuel=compteurScore();//utilisé pour les scores individuels au Drapeaux
    
    function updateColor(){
        
        this.style.backgroundColor = nextColor;//toujours associer à la fonction addeventListener 'click'             
        if(nextColor==palette[0]){nextColor=palette[1];}
        else if(nextColor==palette[1]){nextColor=palette[2];}
        else if(nextColor==palette[2]){nextColor=palette[3];}
        else if(nextColor==palette[3]){nextColor=palette[0];}
        //on pourra ajouter de la difficulté plus tard via le nombre de couleur par Drapeau
        else if(nextColor==palette[4]){nextColor=palette[5];}
        else if(nextColor==palette[5]){nextColor=palette[0];}
        else{}
        document.getElementById('spanRight').textContent = "Nombre de clics : "+NbClickCumule();
        verifDrapeauValid();
    }
  

    function updateAffichageLevel(){
        document.getElementById('spanLeft').textContent = "Niveau "+level +'/'+pays.length;
    }

    function verifDrapeauValid(){      
        
        if(level ==1){isFlagValidFrance();}/////////////////////////////////ici on insere les Timers
        else if(level ==2){isFlagValidBelgique();}
        else if(level ==3){isFlagValidAllemagne();}
        else if(level ==4){isFlagValidHolland();}
        else if(level ==5){isFlagValidPologne();}
        else if(level ==6){isFlagValidTcheque();}

        else{console.log('Vérification Couleurs du Drapeau en cours');}
        
        }

    //cette fonction dÃ©sactive les EventListener prÃ©cÃ©dents sur les 3 Zones et en crÃ©e de nouveaux dÃ©diÃ©s au dessin pointant aussi sur les 3 zones
    function activerDessin(){
        partieGauche.removeEventListener('click', updateColor);
        partieCentre.removeEventListener('click', updateColor);
        partieDroite.removeEventListener('click', updateColor);
        //utilisation des canvas poo dessiner les Drapeaux polonais et Tcheques
        canvasleft.addEventListener('click', updateColor);
        canvasCentre.addEventListener('click', updateColor);
        canvasRight.addEventListener('click', updateColor);
        
    }            
    
    var score=0;  
    function isFlagValidFrance(){        
        if(partieGauche.style.backgroundColor==='blue' && 
            partieCentre.style.backgroundColor==='white'&&
           partieDroite.style.backgroundColor==='red'){
            document.getElementById('spanTimer').display='none';
            console.log('Couleur trouvée France');
            lireSon();
            changerDrapeauBelgique();            
            startChronometreBelgique();            
            updateAffichageLevel();
            //on retire le player et on coupe le son de l'hymne en cours
            document.getElementById('musicPlayerFrance').style.display='none';
            document.getElementById('HymneFrance').pause();
            document.getElementById('musicPlayerBelgique').style.display='grid';

            NbdeClicFrance=NbClickCumule() -1;
            tempsRealiseFrance =document.getElementById('spanTimerFrance').textContent;
            calculScoreFrance();
            stopChronoFrance();                        
        }else{                    
        }
    }

    

       


    function isFlagValidBelgique(){
         
           
        if(partieGauche.style.backgroundColor==='black' && 
           partieCentre.style.backgroundColor==='yellow'&&
           partieDroite.style.backgroundColor==='red'){
        console.log('Couleur trouvée Belgique');
        lireSon();
        changerDrapeauAllemagne();                                          
        updateAffichageLevel();
        stopChronoBelgique();
        startChronometreAllemagne();
        //on retire le player et on coupe le son de l'hymne en cours + ajoute le display player du drapeau suivant
        document.getElementById('musicPlayerBelgique').style.display='none';
        document.getElementById('HymneBelgique').pause();
        document.getElementById('musicPlayerAllemagne').style.display='grid';

        NbdeClicBelgique=NbClickCumule() -1;
        tempsRealiseBelgique =document.getElementById('spanTimerBelgique').textContent;
        calculScoreBelgique();
        stopChronoBelgique();   

        }
        else{                    
        }
    }


    function isFlagValidAllemagne(){       
                 
        if(partieGauche.style.backgroundColor==='black' && 
          partieCentre.style.backgroundColor==='red'&&
          partieDroite.style.backgroundColor==='yellow'){
        console.log(' Couleur Trouvée Allemagne');
        lireSon();
        changerDrapeauHolland();                                     
        updateAffichageLevel();
        stopChronoAllemagne();
        startChronometrePaysBas();
        //on retire le player et on coupe le son de l'hymne en cours
        document.getElementById('musicPlayerAllemagne').style.display='none';
        document.getElementById('HymneAllemagne').pause();
        document.getElementById('musicPlayerPayBas').style.display='grid';

        NbdeClicAllemagne=NbClickCumule() -1;
        tempsRealiseAllemagne =document.getElementById('spanTimerAllemagne').textContent;
        calculScoreAllemagne();
        stopChronoAllemagne(); 
        
                                             
        }else{                   
        }
    }

    function isFlagValidHolland(){       
               
        if(partieGauche.style.backgroundColor==='red' && 
          partieCentre.style.backgroundColor==='white'&&
          partieDroite.style.backgroundColor==='blue'){
        updateAffichageLevel();         
        lireSon();
        changerDrapeauPologne();
        stopChronoPaysBas();
        startChronometrePologne();
        //on retire le player et on coupe le son de l'hymne en cours
        document.getElementById('musicPlayerPayBas').style.display='none';
        document.getElementById('HymnePaysBas').pause();
        document.getElementById('musicPlayerPologne').style.display='grid';

        NbdeClicHolland=NbClickCumule() -1;
        tempsRealiseHolland =document.getElementById('spanTimerPaysBas').textContent;
        calculScoreHolland();
        stopChronoPaysBas(); 

        }else{
        }
    }

 

    function isFlagValidPologne(){
        
               
        if(partieGauche.style.display="none"&&
        partieCentre.style.backgroundColor==='white'&&
        partieDroite.style.backgroundColor==='red'){
        changerDrapeauTcheque();    
        updateAffichageLevel();
        stopChronoPologne();
        startChronometreTcheque();
        //on retire le player et on coupe le son de l'hymne en cours
        document.getElementById('musicPlayerPologne').style.display='none';
        document.getElementById('HymnePologne').pause();
        document.getElementById('musicPlayerTcheque').style.display='grid';
        
        lireSon();

        NbdeClicPologne=NbClickCumule() -1;
        tempsRealisePologne =document.getElementById('spanTimerPologne').textContent;
        calculScorePologne();
        stopChronoPologne(); 
     
        
        }else{                    
        }
    }

    function isFlagValidTcheque(){               
        if(canvasleft.style.backgroundColor==='blue' && 
        canvasCentre.style.backgroundColor==='white'&&
        canvasRight.style.backgroundColor==='red'){
        updateAffichageLevel();
        
        lireSon();
        //on retire le player et on coupe le son de l'hymne en cours
        document.getElementById('musicPlayerTcheque').style.display='none';
        document.getElementById('HymneTcheque').pause();


        NbdeClicTcheque=NbClickCumule() -1;
        tempsRealiseTcheque =document.getElementById('spanTimerTcheque').textContent;
        calculScoreTcheque();
        stopChronoTcheque();    

        //////////////////////////////Fin de Partie
        changerDrapeauFinal();//Pour mettre fin à la partie et Chrono
        
        JeuTermine=true;//Pour mettre fin à la partie et Chrono     
    
        
        }else{                    
        }
    }



    //////////////////////////////////////////////////////////////////////////////////////////
    //Suite de fonctions pour changer les couleurs des Drapeaux(MÃ©thodes non factorisÃ©es)
    function changerDrapeauBelgique(){
        palette=paletteBelgique;
        ++NbdeClic;
        ++level;
        document.getElementById('titreh1').textContent='Belgique';
        nextColor=palette[0];
        partieGauche.style.backgroundColor=palette[0];
        partieCentre.style.backgroundColor=palette[1];
        partieDroite.style.backgroundColor=palette[2];
    }

    function changerDrapeauAllemagne(){
        palette=paletteAllemagne;
        ++NbdeClic;
        ++level;
        ////////////////Rotation de la Div Flag via css
        document.getElementById('flags').style.display='inline-grid';
        document.getElementById('flags').style.width= '-webkit-fill-available';
        partieGauche.style.height='50px';
        partieGauche.style.width='85%';
        partieGauche.style.justifySelf='center';
        partieCentre.style.height='50px';
        partieCentre.style.width='85%';
        partieCentre.style.justifySelf='center';
        partieDroite.style.height='50px';
        partieDroite.style.width='85%';
        partieDroite.style.justifySelf='center';

        ///////////////////////////////////////////////////
        palette=paletteAllemagne;
        document.getElementById('titreh1').textContent='Allemagne';
        nextColor=palette[0];
        partieGauche.style.backgroundColor=palette[0];
        partieCentre.style.backgroundColor=palette[1];
        partieDroite.style.backgroundColor=palette[2];
    }

    function changerDrapeauHolland(){
        palette=paletteHolland;
        ++NbdeClic;
        ++level;
        document.getElementById('titreh1').textContent='Pays-Bas';
        nextColor=palette[0];
        partieGauche.style.backgroundColor=palette[0];
        partieCentre.style.backgroundColor=palette[1];
        partieDroite.style.backgroundColor=palette[2];
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //Dessiner le Drapeau Polonais et Tcheque
     
    function changerDrapeauPologne(){
        palette=palettePologne;
        ++NbdeClic;
        ++level;       
        document.getElementById('titreh1').textContent='Pologne';
        nextColor=palette[0];
        partieGauche.style.display="none";//reset to for Czech display: inline-flex;
        partieCentre.style.backgroundColor=palette[1];
        partieDroite.style.backgroundColor=palette[2];
    }
    function changerDrapeauTcheque(){
        palette=paletteTcheque;
        ++NbdeClic;
        //++level;///////////////////////////////////////TEST
        level=6;/////////////////////////////////////////       
        document.getElementById('titreh1').textContent='Republique Tcheque';
        document.getElementById('RepTcheque').style.display="block";


        
        nextColor=palette[0];
        partieGauche.style.display='none';
        partieCentre.style.display='none';
        partieDroite.style.display='none';
        canvasleft.style.display='inline-flex';
        canvasCentre.style.display='inline-flex';
        canvasRight.style.display='inline-flex';
        
        
        activerDessin();////////////////////////////////////////////////////////TEST
        canvasleft.style.backgroundColor=palette[0];
        canvasCentre.style.backgroundColor=palette[0];
        canvasRight.style.backgroundColor=palette[2];
    }
    /////////////////////////////////////////////////////////////////////////////
 /////////////////////////////////MÃ©thode pour Dessiner sur les canvas Ã  considÃ©rer comme le tableau de Palette pour les Drapeaux
 var canvasleft = document.getElementById('triangleTcheque');
 var canvasCentre = document.getElementById('HautTcheque');
 var canvasRight = document.getElementById('BasTcheque'); 
 canvasleft.style.display='none';
 canvasCentre.style.display='none';
 canvasRight.style.display='none';
 
 var ctx1 = canvasleft.getContext('2d');
 var ctx2 = canvasCentre.getContext('2d');
 var ctx3 = canvasRight.getContext('2d');
 function drapeauPolonais(){
    return function(){
       
        
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
        
        ctx2.beginPath();
        ctx2.fillStyle = 'red'; 
        ctx2.fillRect(0, 75, 300, 75);
        ctx2.fillStyle = 'white'; 
        ctx2.fillRect(0, 0, 300, 75);       
        
        ctx3.beginPath();
        ctx3.fillStyle = 'white'; 
        ctx3.fillRect(0, 0, 300, 75);    
        ctx3.fillStyle = 'red'; 
        ctx3.fillRect(0, 75, 300, 75);
    };            
 }

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    //Besoin du Drapeau Final 
    function changerDrapeauFinal(){
        ////////////////Rotation de la Div Flag via css
        document.getElementById('flags').style.display='inline-flex';
        document.getElementById('flags').style.width= '-webkit-fill-available';
        partieGauche.style.height='';
        partieGauche.style.width='';
        partieCentre.style.height='';
        partieCentre.style.width='';
        partieDroite.style.height='';
        partieDroite.style.width='';
              
       
        document.getElementById('popup2').style.display='block';
        var FinalScore= document.getElementById('ScoreFinale');
        var FinalTime= document.getElementById('DureeTotale');
        var FinalClic= document.getElementById('TotalClic');
        var NombreClicMinimum =53;
        var AfficheNBClicFinal = NbClickCumule() -1;
        var scoreTotal = score;

        FinalScore.textContent="Score :" + Math.round(scoreTotal) + " points";
        FinalTime.textContent="Durée :"+horlogeTimer+' secondes';
        FinalClic.textContent="Nombre de Clics :"+(AfficheNBClicFinal);                
        
        document.getElementById('titreh1').textContent="Merci d'avoir Joué";
        ////////////////Rotation de la Div Flag via css
        document.getElementById('flags').style.display='inline-flex';
        document.getElementById('flags').style.width= '-webkit-fill-available';
        partieGauche.style.height='';
        //document.getElementById('timer').textContent='score';
        partieGauche.style.width='';                    
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
    

    //////////////////////////////////Fonction Chrono////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        document.getElementById('spanTimer').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimer=setInterval(chrono, 1000);
    }
    
    function stopChrono() {
        clearInterval(horlogeTimer);
    }
    ///////////////////////////////////////France
    var horlogeTimerFrance;
    function startChronometreFrance(){
        document.getElementById('spanTimerFrance').style.display='block';
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
        document.getElementById('spanTimerFrance').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerFrance=setInterval(chrono, 1000);            
    }            
    function stopChronoFrance() {
        clearInterval(horlogeTimerFrance);
        document.getElementById('spanTimerFrance').style.display='none';
    }
    var horlogeTimerBelgique;
    function startChronometreBelgique(){
        document.getElementById('spanTimerBelgique').style.display='block';
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
        document.getElementById('spanTimerBelgique').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerBelgique=setInterval(chrono, 1000);            
    }            
    function stopChronoBelgique() {
        clearInterval(horlogeTimerBelgique);
        document.getElementById('spanTimerBelgique').style.display='none';
    }
    var horlogeTimerAllemagne;
    function startChronometreAllemagne(){
        document.getElementById('spanTimerAllemagne').style.display='block';
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
        document.getElementById('spanTimerAllemagne').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerAllemagne=setInterval(chrono, 1000);            
    }            
    function stopChronoAllemagne() {
        clearInterval(horlogeTimerAllemagne);
        document.getElementById('spanTimerAllemagne').style.display='none';
    }
    var horlogeTimerPaysBas;
    function startChronometrePaysBas(){
        document.getElementById('spanTimerPaysBas').style.display='block';
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
        document.getElementById('spanTimerPaysBas').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerPaysBas=setInterval(chrono, 1000);            
    }            
    function stopChronoPaysBas() {
        clearInterval(horlogeTimerPaysBas);
        document.getElementById('spanTimerPaysBas').style.display='none';
    }
    var horlogeTimerPologne;
    function startChronometrePologne(){
        document.getElementById('spanTimerPologne').style.display='block';
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
        document.getElementById('spanTimerPologne').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerPologne=setInterval(chrono, 1000);            
    }            
    function stopChronoPologne() {
        clearInterval(horlogeTimerPologne);
        document.getElementById('spanTimerPologne').style.display='none';
    }
    var horlogeTimerTcheque;
    function startChronometreTcheque(){
        document.getElementById('spanTimerTcheque').style.display='block';
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
        document.getElementById('spanTimerTcheque').textContent = heure+':'+minute+':'+ seconde;
        }
        horlogeTimerTcheque=setInterval(chrono, 1000);            
    }            
    function stopChronoTcheque() {
        clearInterval(horlogeTimerTcheque);
        document.getElementById('spanTimerTcheque').style.display='none';
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //Bouton popup commencer/////////////////////////////////////////////////////
 document.getElementById('button_modal').addEventListener('click',openModal);

 var JeuTermine=false;
 function openModal(){
    document.getElementById('popup').style.marginTop='-800px';
    if(JeuTermine){
        stopChrono();
        document.getElementById('spanTimer').style.display='none';
    }else{
        chronometre();
        document.getElementById('spanTimer').style.display='none';
        document.getElementById('spanTimerFrance').style.display='block';
        startChronometreFrance();            
    }
 }         
/////////////////////////////////////////////////////////////////////////        
//Fonction pour lire le son Ã  la validation d'un drapeau///////////////////////////
function lireSon(){
        sonValidation=document.getElementById('applause');
        sonValidation.play();
}
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//FONCTION CALCUL SCORE POUR CHAQUE PAYS///////////////////////////////////////////
var NbdeClicFrance=0;         
var tempsOptimalFrance="0:0:8";
var tempsRealiseFrance ;
function calculScoreFrance(){
    if(tempsRealiseFrance<tempsOptimalFrance && NbdeClicFrance<10){score+=3;}
    else if(tempsRealiseFrance+''<tempsOptimalFrance){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}
var NbdeClicBelgique=0;         
var tempsOptimalBelgique="0:0:7";
var tempsRealiseBelgique ;
function calculScoreBelgique(){
    if(tempsRealiseBelgique<tempsOptimalBelgique && NbdeClicBelgique<9){score+=3;}
    else if(tempsRealiseBelgique+''<tempsOptimalBelgique){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}
var NbdeClicAllemagne=0;         
var tempsOptimalAllemagne="0:0:5";
var tempsRealiseAllemagne ;
function calculScoreAllemagne(){
    if(tempsRealiseAllemagne<tempsOptimalAllemagne && NbdeClicAllemagne<7){score+=3;}
    else if(tempsRealiseAllemagne+''<tempsOptimalAllemagne){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}
var NbdeClicHolland=0;         
var tempsOptimalHolland="0:0:8";
var tempsRealiseHolland ;
function calculScoreHolland(){
    if(tempsRealiseHolland<tempsOptimalHolland && NbdeClicHolland<10){score+=3;}
    else if(tempsRealiseHolland+''<tempsOptimalHolland){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}
var NbdeClicPologne=0;         
var tempsOptimalPologne="0:0:5";
var tempsRealisePologne ;
function calculScorePologne(){
    if(tempsRealisePologne<tempsOptimalPologne && NbdeClicPologne<7){score+=3;}
    else if(tempsRealisePologne+''<tempsOptimalPologne){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}
var NbdeClicTcheque=0;         
var tempsOptimalTcheque="0:0:5";
var tempsRealiseTcheque ;
function calculScoreTcheque(){
    if(tempsRealiseTcheque<tempsOptimalTcheque && NbdeClicTcheque<7){score+=3;}
    else if(tempsRealiseTcheque+''<tempsOptimalTcheque){score+=2;}
    else{score+=1;}
    document.getElementById('spanScore').textContent="Score : "+score;       
}

///////////////////////////////////////////////////////////////////////////////////////////
});//windows on load fonction
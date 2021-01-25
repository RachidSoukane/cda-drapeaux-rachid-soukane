
window.addEventListener('load', function(){
            
    //Déclaration des Variables globales
    var partieGauche = document.getElementById('flagLeft');
    var partieCentre = document.getElementById('flagCentre');
    var partieDroite = document.getElementById('flagRight');

    var canvas1 = document.getElementById('flagLeft');
    var canvas2 = document.getElementById('flagCentre');
    var canvas3 = document.getElementById('flagRight');
    
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

        
        document.getElementById('spanRight').textContent = "Nombre de clics : "+compteurTour();                  
        document.getElementById('spanLeft').textContent = "Niveau "+niveau +'/'+pays.length;

            
    }
    function updateColor(){

             if(nextColor==palette[0]){nextColor=palette[1];}
        else if(nextColor==palette[1]){nextColor=palette[2];}
        else if(nextColor==palette[2]){nextColor=palette[3];}
        else if(nextColor==palette[3]){nextColor=palette[0];}
        //on pourra ajouter de la difficulté plus tard via le nombre de couleur par Drapeau
        else if(nextColor==palette[4]){nextColor=palette[5];}
        else if(nextColor==palette[5]){nextColor=palette[0];}
        //return nextColor;
    }
    function activerDessin(){
        partieGauche.removeEventListener(this);
        partieCentre.removeEventListener(this);
        partieDroite.removeEventListener();

        canvas1.addEventListener('click', changeDessin);
        canvas2.addEventListener('click', changeDessin);
        canvas3.addEventListener('click', changeDessin);

        


    }
    function changeDessin(){
        this.style.backgroundColor = nextColor;
        verificationDrapeauSansBtnValider();
        updateDessin();
        compteurTour;
        console.log(compteurTour());
            
    }
    function updateDessin(){
        alert('dessinons');
        compteurTour;
        console.log('compteur dessin' +compteurTour());

        

        
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
                console.log(' Couleur Trouvée Tchad');
                lireSon();
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
            console.log(' Couleur Trouvée Allemagne');
            lireSon();
            changerDrapeauHolland();
                               
        }else{                   
        }
    }
    function isFlagValidHolland(){

        
        if(partieGauche.style.backgroundColor==='red' && 
        partieCentre.style.backgroundColor==='white'&&
        partieDroite.style.backgroundColor==='blue'
            ){
            lireSon();
            console.log(' Couleur Trouvée Hollande');
            activerDessin();
            changerDrapeauPologne();       

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

   function verificationDrapeauSansBtnValider(){
    if(level ==1){setInterval(isFlagValidFrance,4000); }
    if(level ==2){setInterval(isFlagValidBelgique, 4000);}
    if(level ==3){setInterval(isFlagValidAllemagne,4000);}
    if(level ==4){setInterval(isFlagValidHolland,4000);}
    if(level ==5){setInterval(isFlagValidPologne,4000);}
    if(level ==6){setInterval(isFlagValidTcheque,4000); isLASTFLAGVALID();}
    
    else{console.log('Vérification sans Bouton valider est active');}

}


    var score=0;
    var level=1;
    var niveau=2;//le premier level est déja affiché dans le HTML
    function changerDrapeauBelgique(){
        ++score;
        ++level;
        ++niveau;

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

           
            palette=palettePologne;
            document.getElementById('titreh1').textContent='Pologne';
            nextColor=palette[0];
            partieGauche.style.backgroundColor=palette[0];
            partieCentre.style.backgroundColor=palette[1];
            partieDroite.style.backgroundColor=palette[1];

    }




    

    //////////////////////////////////Fonction Chrono/////////////////////////////////////////////
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
    //////////////////////////////////////////////////////////////////////////////////////////////

    
 //Bouton popup commencer/////////////////////////////////////////////////////
 document.getElementById('button_modal').addEventListener('click',openModal);
 function openModal(){
    document.getElementById('popup').style.marginTop='-800px';
    chronometre();


 }
 /////////////////////////////////////////////////////////////////////////////
 


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
    

 });

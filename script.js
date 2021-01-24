
window.addEventListener('load', function(){
    var partieGauche = document.getElementById('flagLeft');
    var partieCentre = document.getElementById('flagCentre');
    var partieDroite = document.getElementById('flagRight');
    
    var palette = ['green','red','white','blue'];//palette par défaut
    var paletteColorsByFlag = ['paletteFrance','paletteBelgique','paletteAllemagne','paletteHolland'];
    var paletteFrance = ['green','red','white','blue'];
    var paletteBelgique=['orange','red','yellow','black'];
    var paletteTchad=['orange','red','yellow','blue'];
    var paletteAllemagne=['green','red','black','yellow'];
    var paletteHolland=['purple','red','white','blue'];
    var drapeaux = ['blue/white/red', 'black/yellow/red','red/yellow/blue','black,red,yellow'];
    var pays = ['France','Belgique','Allemagne','Hollande'];

    partieGauche.addEventListener('click', changeCouleur);
    partieCentre.addEventListener('click', changeCouleur);
    partieDroite.addEventListener('click', changeCouleur);
    
    
    var nextColor=palette[0];
    function changeCouleur(){
        this.style.backgroundColor = nextColor;
        updateColor();
        compteurTour;
        console.log(compteurTour());
            
    }
    function updateColor(){

        if(nextColor==palette[0]){
            nextColor=palette[1];
        }
        else if(nextColor==palette[1]){
            nextColor=palette[2];
        }else if(nextColor==palette[2]){
            nextColor=palette[3];
        }else if(nextColor==palette[3]){
            nextColor=palette[0];
        }
        return nextColor;
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
            partieDroite.style.backgroundColor==='red'
            ){
            console.log('Couleur trouvée');
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

    ////////////////CHANGEMENT DRAPEAUX APRES VERIFICATIONS
    var validationFrance =document.getElementById('valider');
    var validationBelgique =document.getElementById('valider');
    var validationTchad =document.getElementById('valider');
    var validationAllemagne =document.getElementById('valider');
    var validationHolland =document.getElementById('valider');
    //à placer sur le dernier Drapeau 
    var validationScoreFinal=document.getElementById('valider');

    validationFrance.addEventListener('click', isFlagValidFrance);
    validationBelgique.addEventListener('click', isFlagValidBelgique);
    validationTchad.addEventListener('click', isFlagValidTchad);
    validationAllemagne.addEventListener('click', isFlagValidAllemagne);
    validationHolland.addEventListener('click', isFlagValidHolland);

    validationScoreFinal.addEventListener('click', isLASTFLAGVALID);
    
    var score=0;
    var level=1;
    function changerDrapeauBelgique(){
        ++score;
        ++level;
        

           
                palette=paletteBelgique;
                document.getElementById('titreh1').textContent='Belgique';
                nextColor=palette[0];
                partieGauche.style.backgroundColor=palette[0];
                partieCentre.style.backgroundColor=palette[1];
                partieDroite.style.backgroundColor=palette[2];

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

 

    

 });

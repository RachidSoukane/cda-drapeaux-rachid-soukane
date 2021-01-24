
window.addEventListener('load', function(){
    var partieGauche = document.getElementById('flagLeft');
    var partieCentre = document.getElementById('flagCentre');
    var partieDroite = document.getElementById('flagRight');
    
    var palette = ['green','red','white','blue'];

    var paletteFrance = ['green','red','white','blue'];
    var paletteBelgique=['orange','red','yellow','black'];
    var paletteTchad=['orange','red','yellow','blue'];
    var paletteAllemagne=['green','red','black','yellow'];
    var paletteHolland=['purple','red','white','blue'];

    partieGauche.addEventListener('click', changeCouleur);
    partieCentre.addEventListener('click', changeCouleur);
    partieDroite.addEventListener('click', changeCouleur);
    
    
    var nextColor=palette[0];
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
    var compteurTour=compteurClick();
    var compteurTour2=compteurClick();

    function changeCouleur(){
        this.style.backgroundColor = nextColor;
        updateColor();
        compteurTour;
        console.log(compteurTour());
            
    }

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
            console.log(' Fin');
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
            changerDrapeauHolland();
            

        }else{
            
        }
    }

    /*
    ////Factorisation des methodess changement drapeaux
    var drapeaux = ['blue/white/red', 'black/red/yellow', 'blue/yellow/red'];
    var pays = ['France','Belgique','Tchad','Hollande','Allemagne'];
    function isFlagValid(){

        if(partieGauche.style.backgroundColor==='blue' && 
            partieCentre.style.backgroundColor==='white'&&
            partieDroite.style.backgroundColor==='red'
            ){
            alert('Couleur trouvée');
            changerDrapeau();
            

        }else{
            
        }
    }
    function changerDrapeau(){
        if(isFlagValid){
           
            palette=paletteTchad;
            document.getElementById('titreh1').textContent='';
            nextColor=palette[0];
            partieGauche.style.backgroundColor=palette[0];
            partieCentre.style.backgroundColor=palette[1];
            partieDroite.style.backgroundColor=palette[2];

        }

    }
*/


    ////////////////CHANGEMENT DRAPEAUX APRES VERIFICATIONS
    var validationFrance =document.getElementById('valider');
    var validationBelgique =document.getElementById('valider');
    var validationTchad =document.getElementById('valider');
    var validationAllemagne =document.getElementById('valider');
    var validationHolland =document.getElementById('valider');

    validationFrance.addEventListener('click', isFlagValidFrance);
    validationBelgique.addEventListener('click', isFlagValidBelgique);
    validationTchad.addEventListener('click', isFlagValidTchad);
    validationAllemagne.addEventListener('click', isFlagValidAllemagne);
    validationHolland.addEventListener('click', isFlagValidHolland);

    function changerDrapeauBelgique(){
        if(isFlagValidFrance){
           
                palette=paletteBelgique;
                document.getElementById('titreh1').textContent='Belgique';
                nextColor=palette[0];
                partieGauche.style.backgroundColor=palette[0];
                partieCentre.style.backgroundColor=palette[1];
                partieDroite.style.backgroundColor=palette[2];

        }

    }

    function changerDrapeauTchad(){
        if(isFlagValidBelgique){
           
            palette=paletteTchad;
            document.getElementById('titreh1').textContent='Tchad';
            nextColor=palette[0];
            partieGauche.style.backgroundColor=palette[0];
            partieCentre.style.backgroundColor=palette[1];
            partieDroite.style.backgroundColor=palette[2];

        }

    }
    function changerDrapeauAllemagne(){
        if(isFlagValidBelgique){
           
            palette=paletteAllemagne;
            document.getElementById('titreh1').textContent='Allemagne';
            nextColor=palette[0];
            partieGauche.style.backgroundColor=palette[0];
            partieCentre.style.backgroundColor=palette[1];
            partieDroite.style.backgroundColor=palette[2];

        }

    }
    function changerDrapeauHolland(){
        if(isFlagValidBelgique){
           
            palette=paletteHolland;
            document.getElementById('titreh1').textContent='Pays-Bas';
            nextColor=palette[0];
            partieGauche.style.backgroundColor=palette[0];
            partieCentre.style.backgroundColor=palette[1];
            partieDroite.style.backgroundColor=palette[2];

        }

    }

    


    

 });


window.addEventListener('load', function(){
    var partieGauche = document.getElementById('flagLeft');
    var partieCentre = document.getElementById('flagCentre');
    var partieDroite = document.getElementById('flagRight');
    
    var palette = ['green','red','white','blue'];

    var paletteFrance = ['green','red','white','blue'];
    var paletteBelgique=['orange','red','yellow','black'];
    var paletteTchad=['orange','red','yellow','blue'];
    var paletteHolland=['green','red','white','blue'];

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
            changerDrapeauHolland();
            

        }else{
            
        }
    }
    function isFlagValidTchad(){

        
        if(partieGauche.style.backgroundColor==='blue' && 
        partieCentre.style.backgroundColor==='yellow'&&
        partieDroite.style.backgroundColor==='red'
            ){
                console.log(' Fin');
            changerDrapeauTchad();
            

        }else{
            
        }
    }
    function isFlagValidHolland(){

        
        if(partieGauche.style.backgroundColor==='red' && 
        partieCentre.style.backgroundColor==='yellow'&&
        partieDroite.style.backgroundColor==='blue'
            ){
            console.log(' Fin');
            changerDrapeauTchad();
            

        }else{
            
        }
    }

    /*
    ////Factorisation des methodess changement drapeaux
    var drapeaux = ['blue/white/red', 'black/yellow/red', 'blue/yellow/red'];
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
    var validationHollande =document.getElementById('valider');

    validationFrance.addEventListener('click', isFlagValidFrance);
    validationBelgique.addEventListener('click', isFlagValidBelgique);
    validationTchad.addEventListener('click', isFlagValidTchad);
    validationHollande.addEventListener('click', isFlagValidHolland);

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

    


    

 });

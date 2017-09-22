
document.write("<script type='text/javascript'></script>");


/********************************************************************************************************************
Version:    1.0
Fecha:      31-03-2016
Permite capturar los valores y el id de todos los elementos de un formulario que pertenezcan a  una clase especifica.
********************************************************************************************************************/

function dataFormToJson(NombreJSON,clase){
    var elementsForm = new Array();
    elementsForm = document.getElementsByClassName(clase);
        if(elementsForm.length>0){  
            var returnJSON  ='{"'+NombreJSON+'":[';                
            for(var i=0; i<elementsForm.length; i++) {
                returnJSON  += '{';         
                returnJSON  +=  '"'+elementsForm[i].id+'":"'+elementsForm[i].value+'",';                                     
                returnJSON = returnJSON.substring(0,returnJSON.length-1)+'},'; 
            }       
                
            returnJSON = returnJSON.substring(0,returnJSON.length-1)+']}';        
            return(JSON.parse(returnJSON));
    }        
}

function dataFormToJsonTwo(NombreJSON,clase){
    var elementsForm = new Array();
    elementsForm = document.getElementsByClassName(clase);
        if(elementsForm.length>0){  
            var returnJSON  ='{';
            for(var i=0; i<elementsForm.length; i++) {                  
                returnJSON  +=  '"'+elementsForm[i].id+'":"'+elementsForm[i].value+'",';                                     
                returnJSON = returnJSON.substring(0,returnJSON.length-1)+','; 
            }       
                
            returnJSON = returnJSON.substring(0,returnJSON.length-1)+'}';        
            return(JSON.parse(returnJSON));
        }        
}

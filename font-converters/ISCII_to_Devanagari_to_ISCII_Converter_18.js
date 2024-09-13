<html>

<head> 

<script type="text/javascript">

function ISCII_to_Devanagari()

{

var array_one = new Array( 
 
'\xA1' ,    'ँ' ,
'\xA2' ,    'ं' ,
'\xA3' ,    'ः' ,
'\xA4'  ,   'अ' ,
'\xA5'  ,   'आ' ,
'\xA6'  ,   'इ' ,
'\xA7'  ,   'ई' ,
'\xA8'  ,   'उ' ,
'\xA9'  ,   'ऊ' ,
'\xAA'  ,   'ऋ' , 
'\xAB'  ,   'ऎ' , //southern scripts
'\xAC'  ,   'ए' ,
'\xAD'  ,   'ऐ' ,
'\xAE'  ,   'ऍ' , //  AYE of Devanagari  
'\xAF'  ,   'ऒ' , // southern scripts
'\xB0'  ,   'ओ' ,
'\xB1'  ,   'औ' ,
'\xB2'  ,   'ऑ' ,

'\xB3' + '\xE9'  ,   'क़' ,
'\xB4' + '\xE9'  ,   'ख़' ,
'\xB5' + '\xE9'  ,   'ग़' ,
'\xBA' + '\xE9'  ,   'ज़' ,
'\xBF' + '\xE9'  ,   'ड़' ,
'\xC0' + '\xE9'  ,   'ढ़' ,
'\xC9' + '\xE9'  ,   'फ़' ,

'\xB3'  ,   'क' ,
'\xB4'  ,   'ख' ,
'\xB5'  ,   'ग' ,
'\xB6'  ,   'घ' ,
'\xB7'  ,   'ङ' ,
'\xB8'  ,   'च' ,
'\xB9'  ,   'छ' , 
'\xBA'  ,   'ज' ,
'\xBB'  ,   'झ' ,
'\xBC'  ,   'ञ' , 
'\xBD'  ,   'ट' , 
'\xBE'  ,   'ठ' ,
'\xBF'  ,   'ड' , 

'\xC0'  ,   'ढ' ,
'\xC1'  ,   'ण' ,
'\xC2'  ,   'त' ,
'\xC3'  ,   'थ' , 
'\xC4'  ,   'द' ,
'\xC5'  ,   'ध' , 
'\xC6'  ,   'न' ,
'\xC7'  ,   'ऩ' ,
'\xC8'  ,   'प' ,
'\xC9'  ,   'फ' ,
'\xCA'  ,   'ब' ,
'\xCB'  ,   'भ' ,
'\xCC'  ,   'म' ,
'\xCD'  ,   'य' ,  
'\xCE'  ,   'य़' ,
'\xCF'  ,   'र' ,

'\xD0' ,    'ऱ' ,  
'\xD1' ,    'ल' ,
'\xD2' ,    'ळ' ,    
'\xD3' ,    'ऴ' ,
'\xD4' ,   'व' ,
'\xD5' ,   'श' , 
'\xD6' ,   'ष' ,
'\xD7' ,   'स' ,
'\xD8' ,   'ह' ,

'\xDA'  ,   'ा' ,
'\xDB'  ,   'ि' ,
'\xDC'  ,   'ी' ,
'\xDD'  ,   'ु' ,
'\xDE'  ,   'ू' , 
'\xDF'  ,   'ृ' ,
'\xE0'  ,   'ॆ' ,  // southern scripts 
'\xE1'  ,   'े' ,
'\xE2'  ,   'ै' ,
'\xE3'  ,   'ॅ' ,  // Vovel sign AYE  or Chandra E.
'\xE4'  ,   'ॊ' ,  // short o of southern scripts
'\xE5'  ,   'ो' , 
'\xE6'  ,   'ौ' , 
'\xE7'  ,   'ॉ' ,  // Vovel sign AWE  or Chandra O.
'\xE8' + '\xE8'  ,   '्' + '\x200C' ,   //double Halant used to NOT allow complex conjuct formation ; Actualy in Unicode it is equivalent to (Halant + ZWNJ)
'\xE8' + '\xE9'  ,   '्' + '\x200D' ,   // Actualy this should be eqvt to (Halant + ZWJ) (useful for Malayalam)
'\xE8'  ,   '्' ,
'\xE9'  ,   '़' ,  //Nukta  ; Nukta can appear after vovels also in special cases
'\xEA'  ,   '।' ,  //Full stop or DaNDaa

// extra charecters
'\xD9'  ,   '' , //INV = Consonant invisible ; Actualy it is eqvt to 'Combining grapheme joiner' (CGJ) whose unicode is \u034F .
// '\xEF' , '\#' ,  //ATR
// '\xF0' , '\@' ,  //EXT

//        'ॐ' , 


'\xF1'  ,   '०' ,
'\xF2'  ,   '१' ,
'\xF3'  ,   '२' ,
'\xF4'  ,   '३' ,
'\xF5'  ,   '४' ,
'\xF6'  ,   '५' ,
'\xF7'  ,   '६' ,
'\xF8'  ,   '७' ,
'\xF9'  ,   '८' ,
'\xFA'  ,   '९'       )


var array_one_length = array_one.length ;

document.getElementById("Unicode_text").value = "Conversion in progress.."  ;  

//****************************************************
//  Break the long text into small bunches of chunk_size  characters each.
//****************************************************
    var text_size = document.getElementById("ISCII_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var chunk_size = 6000; // this charecter long text will be processed in one go.

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - chunk_size ) )  
     { 
      sthiti2 +=  chunk_size ;
//      while (document.getElementById("ISCII_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;} 
//This was making problem if there is no 'space' in the whole document.
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

  var modified_substring = document.getElementById("ISCII_text").value.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;

//  Breaking part code over

//     document.getElementById("Unicode_text").value = processed_text  ;
	  
document.getElementById("Unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + sthiti2 + ' charecters out of ' + text_size + ' completed.' ; 

    }
  
document.getElementById("Unicode_text").value = processed_text  ;  

 //--------------------------------------------------

 function Replace_Symbols( )
    {

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length ;    input_symbol_idx = input_symbol_idx + 2 )

            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
                 indx = modified_substring.indexOf( array_one[input_symbol_idx] )

                } // end of while-00 loop
            } // end of for loop


        } //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols
	
 } // end of ISCII_to_Devanagari function 
 
 
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
  
function Devanagari_to_ISCII ()

{

var array_one = new Array( 

'\xA1' ,    'ँ' ,
'\xA2' ,    'ं' ,
'\xA3' ,    'ः' ,
'\xA4'  ,   'अ' ,
'\xA5'  ,   'आ' ,
'\xA6'  ,   'इ' ,
'\xA7'  ,   'ई' ,
'\xA8'  ,   'उ' ,
'\xA9'  ,   'ऊ' ,
'\xAA'  ,   'ऋ' , 
'\xAB'  ,   'ऎ' , //southern scripts
'\xAC'  ,   'ए' ,
'\xAD'  ,   'ऐ' ,
'\xAE'  ,   'ऍ' , //  AYE of Devanagari  
'\xAF'  ,   'ऒ' , // southern scripts
'\xB0'  ,   'ओ' ,
'\xB1'  ,   'औ' ,
'\xB2'  ,   'ऑ' ,

'\xB3' + '\xE9'  ,   'क़' ,
'\xB4' + '\xE9'  ,   'ख़' ,
'\xB5' + '\xE9'  ,   'ग़' ,
'\xBA' + '\xE9'  ,   'ज़' ,
'\xBF' + '\xE9'  ,   'ड़' ,
'\xC0' + '\xE9'  ,   'ढ़' ,
'\xC9' + '\xE9'  ,   'फ़' ,

'\xB3'  ,   'क' ,
'\xB4'  ,   'ख' ,
'\xB5'  ,   'ग' ,
'\xB6'  ,   'घ' ,
'\xB7'  ,   'ङ' ,
'\xB8'  ,   'च' ,
'\xB9'  ,   'छ' , 
'\xBA'  ,   'ज' ,
'\xBB'  ,   'झ' ,
'\xBC'  ,   'ञ' , 
'\xBD'  ,   'ट' , 
'\xBE'  ,   'ठ' ,
'\xBF'  ,   'ड' , 
'\xC0'  ,   'ढ' ,
'\xC1'  ,   'ण' ,

'\xC2'  ,   'त' ,
'\xC3'  ,   'थ' , 
'\xC4'  ,   'द' ,
'\xC5'  ,   'ध' , 
'\xC6'  ,   'न' ,
'\xC7'  ,   'ऩ' ,
'\xC8'  ,   'प' ,
'\xC9'  ,   'फ' ,
'\xCA'  ,   'ब' ,
'\xCB'  ,   'भ' ,
'\xCC'  ,   'म' ,
'\xCD'  ,   'य' ,  
'\xCE'  ,   'य़' ,
'\xCF'  ,   'र' ,
'\xD0' ,    'ऱ' ,  
'\xD1' ,    'ल' ,
'\xD2' ,    'ळ' ,    
'\xD3' ,    'ऴ' ,
'\xD4' ,   'व' ,
'\xD5' ,   'श' , 
'\xD6' ,   'ष' ,
'\xD7' ,   'स' ,
'\xD8' ,   'ह' ,


'\xDA'  ,   'ा' ,
'\xDB'  ,   'ि' ,
'\xDC'  ,   'ी' ,
'\xDD'  ,   'ु' ,
'\xDE'  ,   'ू' , 
'\xDF'  ,   'ृ' ,
'\xE0'  ,   'ॆ' ,  // southern scripts 
'\xE1'  ,   'े' ,
'\xE2'  ,   'ै' ,
'\xE3'  ,   'ॅ' ,  // Vovel sign AYE  or Chandra E.
'\xE4'  ,   'ॊ' ,  // short o of southern scripts
'\xE5'  ,   'ो' , 
'\xE6'  ,   'ौ' , 
'\xE7'  ,   'ॉ' ,  // Vovel sign AWE  or Chandra O.
'\xE8' + '\xE8'  ,   '्' + '\x200C' ,   //double Halant used to NOT allow complex conjuct formation ; Actualy in Unicode it is equivalent to (Halant + ZWNJ)
'\xE8' + '\xE9'  ,   '्' + '\x200D' ,   // Actualy this should be eqvt to (Halant + ZWJ) (useful for Malayalam)
'\xE8'  ,   '्' ,
'\xE9'  ,   '़' ,  //Nukta  ; Nukta can appear after vovels also in special cases
'\xEA'  ,   '।' ,  //Full stop or DaNDaa

// extra charecters
// '\xD9'  ,   '' , //INV = Consonant invisible ; Actualy it is eqvt to 'Combining grapheme joiner' (CGJ) whose unicode is \u034F .
// '\xEF' , '\#' ,  //ATR
// '\xF0' , '\@' ,  //EXT
//        'ॐ' , 


'\xF1'  ,   '०' ,
'\xF2'  ,   '१' ,
'\xF3'  ,   '२' ,
'\xF4'  ,   '३' ,
'\xF5'  ,   '४' ,
'\xF6'  ,   '५' ,
'\xF7'  ,   '६' ,
'\xF8'  ,   '७' ,
'\xF9'  ,   '८' ,
'\xFA'  ,   '९'       )


var array_one_length = array_one.length ;

document.getElementById("ISCII_text").value = "Conversion in progress.."  ;  

//****************************************************
//  Break the long text into small bunches of chunk_size  characters each.
//****************************************************
    var text_size = document.getElementById("Unicode_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var chunk_size = 6000; // this charecter long text will be processed in one go.

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - chunk_size ) )  
     { 
      sthiti2 +=  chunk_size ;
//      while (document.getElementById("Unicode_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;} 
//This was making problem if there is no 'space' in the whole document.
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

var    modified_substring = document.getElementById("Unicode_text").value.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;

//  Breaking part code over

 // document.getElementById("ISCII_text").value = processed_text  ;
	  
 document.getElementById("ISCII_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + sthiti2 + ' charecters out of ' + text_size + ' completed.' ; 

    }
  
document.getElementById("ISCII_text").value = processed_text  ;  

 
 
 //--------------------------------------------------

 function Replace_Symbols( )
    {

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for(input_symbol_idx = 1;   input_symbol_idx < array_one_length ;    input_symbol_idx = input_symbol_idx + 2 )

            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx - 1] )
                 indx = modified_substring.indexOf( array_one[input_symbol_idx] )

                } // end of while-00 loop
            } // end of for loop


        } //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols
	
 } // end of Devanagari_to_ISCII function 
 
 
</script>
</head>

<!-- ------------------------------------------------
      body of the HTML starts here. one text box is provided each for input and output. 
-->

<body>
<center>
<h2>ISCII <==> यूनिकोडित देवनागरी परिवर्तक 21_08_2010</h2> 
</center>
<form name="form1">
<b>ISCII</b> टेक्स्ट का बक्सा<br/>
<textarea name="TextBox2" id="ISCII_text" cols="75" rows="5"></textarea>
<br />

<div align="middle">
<input  type="button" name="converter" id="converter1"  value="यूनिकोडित देवनागरी में बदलें >> " onClick="ISCII_to_Devanagari();" >
</div>

यूनिकोडित <b>देवनागरी</b> टेक्स्ट का बक्सा<br/>
<textarea name="TextBox1" id="Unicode_text" cols="84" rows="7"></textarea> <br>

<div align="middle">
<input  type="button" name="converter" id="converter2"  value="ISCII में बदलें >> " onClick="Devanagari_to_ISCII();" >
</div>

<b>यूनिकोड, विश्व की गैर-रोमन भाषाओं के लिये वरदान है।</b>

</form>
</body>

</html>


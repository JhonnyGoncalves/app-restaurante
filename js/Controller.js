var json =  
{
  0:{link:'#',imagem:'img/apple.png',titulo:'iOS 6.1',descricao:'Apple released iOS 6.1',marca:'iOS'},
  1:{link:'#',imagem:'img/blackberry_10.png',titulo:'BlackBerry 10',descricao:'BlackBerry launched the Z10 and Q10 with the new BB10 OS',marca:'BlackBerry'},
  2:{link:'#',imagem:'img/lumia_800.png',titulo:'WP 7.8',descricao:'Nokia rolls out WP 7.8 to Lumia 800',marca:'Windows Phone'},
};

$(document).ready(function(){
	   $('#saidaTxt').html("");
	   listaItens(json);

	   $('#search').bind('input',function(){
    busca = $(this).val().toLowerCase();
    var keyTeste = null;
    if(busca !== ''){
      var corresponde = false;
      var saida = Array();
      var quantidade = 0;
      for(var key in json){
        var aux = json[key];
        for(var key2 in aux){
          corresponde = aux[key2].toLowerCase().indexOf(busca) >= 0;
          if(corresponde){
            if(keyTeste != key){
              saida.push(json[key]);
              quantidade += 1;
              keyTeste = key;
            }           
            
          }
        }
      }
      if(quantidade){
        $('#saidaTxt').text('');
        $('#quantidade').html(quantidade+' resultados!<br><br>');
        
        listaItens(saida);
        
      }else{
        $('#quantidade').html('Nenhum Resultado!');
        $('#saidaTxt').text('');
        listaItens(json);
      }
    
    }else{
      $('#quantidade').html('');
      $('#saidaTxt').text('');
      listaItens(json);
    }
    
    
    
  });

});

function listaItens(objeto){    

    for(var ind in objeto){
      var li ='<li class="ui-li-has-thumb ui-first-child"><a href="'+objeto[ind]['link']+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
              '<img src="'+objeto[ind]['imagem']+'" class="ui-li-thumb">'+
              '<h2>'+objeto[ind]['titulo']+'</h2>'+
              '<p>'+objeto[ind]['descricao']+'</p>'+
              '<p class="ui-li-aside">'+objeto[ind]['marca']+'</p>'+
              '</a></li>';
      $('#saidaTxt').append(li);
    }
  
}
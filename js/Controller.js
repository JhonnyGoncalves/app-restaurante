var json =  
{
  0:{link:'#',imagem:'img/rest.png',titulo:'Carne',descricao:'Carne',marca:'Kilo'},
  1:{link:'#',imagem:'img/frango.png',titulo:'Frango',descricao:'Frango grelhado',marca:'PF'},
  2:{link:'#',imagem:'img/suco.jpg',titulo:'Sucos naturais',descricao:'Sucos naturais',marca:'Bebida'},
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
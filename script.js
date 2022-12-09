function getSearch () {
    var inputSearch = document.getElementById("textLine").value;
     $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+ inputSearch +"&srlimit=10&utf8=&format=json&callback=?", function(rs){  
       $("li").remove();/*удаление предыдущих li*/
       var newLi = document.createElement('li');
       var title = "";
       for (var i=0; i<=9; i++) {
         title = rs.query.search[i].title;
         newLi.innerHTML = "<a class = \"head\" href = \"https://en.wikipedia.org/wiki/" + title + "\" target=\"_blank\">" + title + "</a><p>" + rs.query.search[i].snippet + "...</p>";
         list.appendChild(newLi.cloneNode(true));
         
       };
     });
   };
   
   $(".earth").click(function(){
     location.href=location.href;
   });
   
   $(".searchIcon").click(function() {
       getSearch();
     });
   
   $(".searchLine").on('input',function(){
     if(this.value.length > 0) {
      $(".closeIcon").css('display', 'inline-block');
   } else {
      $(".closeIcon").css('display', 'none');
           };
   /*$(function(){
       getSearch();
     });*/
   }).keydown(function(event){
       if(event.keyCode == 13){
           getSearch()
           return false;;
       }
   }).focus(function(){
     $(".Search").css('box-shadow', '0 0 5px #eeeeef');
   }).blur(function(){
     $(".Search").css('box-shadow', 'none');
     });
   
   
   $(".closeIcon").click(function(){
     $('.searchLine').val('');
     $("li").remove();
   }).focus(function(){
     $(".Search").css('box-shadow', '0 0 5px #eeeeef');
   }).blur(function(){
     $(".Search").css('box-shadow', 'none');
     });
   
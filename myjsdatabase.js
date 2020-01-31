function myajax(method,url,dataType,data,fn){
  $.ajax({
    method:method,
    url:url,
    dataType:dataType,
    data:data,
    success: fn
  });
}
//呼叫參考 myajax('GET','https://randomuser.me/api/','json','',successtest);
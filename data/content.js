self.port.on("myMessage", function handleMyMessage(dataurl) {
  // Handle the message
  if(top.document == document) {
     var j = document.createElement('script');
     j.src = dataurl+'/jquery-1.10.2.min.js';
     (document.head || document.documentElement).appendChild(j);

     var g = document.createElement('script');
     g.src = dataurl+'/gmail.js';
     (document.head || document.documentElement).appendChild(g);

     var s = document.createElement('script');
     s.src = dataurl+'/init_main.js';
     (document.head || document.documentElement).appendChild(s);
  }
});

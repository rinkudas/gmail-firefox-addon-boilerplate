var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["https://mail.google.com/*", "http://mail.google.com/*"],
  contentScriptFile: [self.data.url('content.js')],
  contentScriptWhen: 'end',  
  onAttach: sendUrl
});

function sendUrl(worker) {
  var dataurl = self.data.url("jquery-1.10.2.min.js");
  dataurl = dataurl.substring(0, dataurl.lastIndexOf('/')); 
  worker.port.emit("myMessage", dataurl);
}

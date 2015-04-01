window.addEventListener('DOMContentLoaded', function() {

 'use strict';

  var info = document.getElementById('info');
  var wifiManager = navigator.mozWifiManager;

  if(!wifiManager) {
    log('WifiManager not available');
  } else {
    
    var status = wifiManager.connection.status;
    var connInfo = wifiManager.connectionInformation;
    var fields = [];
    fields.push(['mac', wifiManager.macAddress]);

    if(status === 'associated' || status === 'connected') {
      var network = wifiManager.connection.network;
      fields.push(['Network name', network.ssid]);
      fields.push(['Security', network.security]);
    }

    if(connInfo) {
      fields.push(['ip', connInfo.ipAddress]);
    }
    
    var txt = fields.map(function(pair) {
      return `<strong>${pair[0]}: </strong> ${pair[1]}`;
    }).join('<br />');
    log(txt);
  }

  function log(txt) {
    info.innerHTML += txt + '<br />';
  }

});

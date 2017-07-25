function Bitcoin() {
    var url = "https://blockchain.info/ru/ticker";
    var reponse = [];
    var xmlHttp = new XMLHttpRequest();

    this.init = function() {
        xmlHttp.open("GET", "https://blockchain.info/ru/ticker", false);
        xmlHttp.send(null);
        reponse = JSON.parse(xmlHttp.responseText);
    }
    this.getResponse = function() {
        return reponse;
    }

    this.getUSD = function() {
        return reponse.USD;
    }

}

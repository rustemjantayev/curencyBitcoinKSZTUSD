function Tenge() {
    var url = "http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ('USDKZT')&env=store://datatables.org/alltableswithkeys"
    var xmlHttp = new XMLHttpRequest();
    var DOMparser = new DOMParser();
    var html = "";
    var response = {};

    this.init = function() {
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);

        html = DOMparser.parseFromString(xmlHttp.responseText, "text/xml");

        response.Name = html.getElementsByTagName('Name')[0].childNodes[0].nodeValue;
        response.Rate = html.getElementsByTagName('Rate')[0].childNodes[0].nodeValue;
        response.Date = html.getElementsByTagName('Date')[0].childNodes[0].nodeValue;
        response.Ask = html.getElementsByTagName('Ask')[0].childNodes[0].nodeValue;
        response.Bid = html.getElementsByTagName('Bid')[0].childNodes[0].nodeValue;
    }

    this.getResponse = function() {
        return response
    }

    this.getKZT = function() {
        return response.Ask;
    }

    this.convertUsdtoKzt = function(usd) {
        return usd * response.Ask;
    }
}

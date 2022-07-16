
$.ajax('//download.2345.com/2345pcsafe/static/config.jsonp?_t=' + new Date().getTime(),{
  timeout: 30000,
  jsonpCallback: 'callback',
  dataType: "jsonp",
  success: function(data) { 
    initIndex(data.indexConfig)
    initLog(data.logConfig)
  }
})

function initIndex (indexConfig) {
  // 棣栧睆鐗堟湰鍙 
  // 棣栧睆鎸夐挳涓嬭浇鍦板潃銆佹枃妗 
  $('.screen-0 .sencha p').text(indexConfig.official.buttonTip)
  $('.screen-0 .sencha .btn-blue').attr('href', indexConfig.official.downloadUrl)
  $('.screen-0 .beta p').text(indexConfig.plus.buttonTip)
  $('.screen-0 .beta .btn-green').attr('href', indexConfig.plus.downloadUrl)

  // 鏈€鍚庝竴灞 
  $('.screen-3 .btn-blue').text(indexConfig.lastScreenBtnText).attr('href', indexConfig.official.downloadUrl)

  // 2,3灞忎笅杞介摼鎺 
  $('.btn-green-pure').attr('href', indexConfig.official.downloadUrl)
}
function initLog(logConfig) {
  var logHtmlStr = ''
  for (var h = 0; h < logConfig.length; h++) {
    var yearHtmlStr = ''
    for (var i = 0; i < logConfig[h].list.length; i++) {
      var moreHtmlStr = ''
      for (var j = 0; j < logConfig[h].list[i].more.length; j++) {
        moreHtmlStr += '<p>' + logConfig[h].list[i].more[j] + '</p>'
      }
      yearHtmlStr += '<li class="cls ' + (logConfig[h].list[i].highlight ? 'highlight' : '') + '">'
      yearHtmlStr += '<p class="date">' + logConfig[h].list[i].date + '</p>'
      yearHtmlStr += '<p class="intro">' + logConfig[h].list[i].intro + '</p>'
      yearHtmlStr += '<p class="version">&nbsp;</p>'
      yearHtmlStr += '<div class="more">'
      yearHtmlStr += moreHtmlStr
      yearHtmlStr += '</div>'
      yearHtmlStr += '</li>'
    }
    logHtmlStr += '<div class="year">'
    logHtmlStr += '<h2><a href="#">' + logConfig[h].year + '<i></i></a></h2>'
    logHtmlStr += '<div class="list">'
    logHtmlStr += '<ul>'
    logHtmlStr += yearHtmlStr
    logHtmlStr += '</ul>'
    logHtmlStr += '</div>'
    logHtmlStr += '</div>'
  }

  $('.content .main').html(logHtmlStr)

}

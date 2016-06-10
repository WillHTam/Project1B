$(window).keydown(function(e) {
  if(e.keyCode == 38) {
    $("#ash").animate({top: '-=150px'}, 50);
    $("#ash").css('background-image', 'url(http://i.imgur.com/GAaU3bh.png)');
    isCollided($('#ash'), $('#david'))
  }
});

$(window).keydown(function(e) {
  if(e.keyCode == 37) {
    $("#ash").animate({left: '-=150px'}, 50);
    $("#ash").css('background-image', 'url(http://i.imgur.com/xAV3LaR.png)');
    isCollided($('#ash'), $('#david'))
  }
});

$(window).keydown(function(e) {
  if(e.keyCode == 39) {
    $("#ash").animate({left: '+=150px'}, 50);
    $("#ash").css('background-image', 'url(http://i.imgur.com/Ox45MIr.png)');
    isCollided($('#ash'), $('#david'))
  }
});

$(window).keydown(function(e) {
  if(e.keyCode == 40) {
    $("#ash").animate({top: '+=150px'}, 50);
    $("#ash").css('background-image', 'url(http://i.imgur.com/EPJAvax.png)');
    isCollided($('#ash'), $('#david'))
  }
});

//COLLISION
var ash = $("#ash");
var david = $("#david");

function isCollided ($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      }
      else {
        console.log(true);
        window.location = './battle.html'
      }
  }

  setInterval(function () {
    isCollided( $('#ash'), $('#david'));
  }, 300);

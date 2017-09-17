$( document ).ready(function() {
    function appendLi(listItem){
      listItem.append("<div id='nav-construction'>Under Construction</div>");
    }

    $("#home").click(function(){
      appendLi($("#home"));
    })
    $("#about").click(function(){
      appendLi($("#about"));
    })
    $("#products").click(function(){
      appendLi($("#products"));
    })
    $("#projects").click(function(){
      appendLi($("#projects"));
    })
    $("#news").click(function(){
      appendLi($("#news"));
    })
    $("#contact").click(function(){
      appendLi($("#contact"));
    })
});

// ////////////////////////////////////////////////////////// //
//                          display                           //
// ////////////////////////////////////////////////////////// //


var $item = $('div.item'), //Cache your DOM selector
    selected=1,
    display = $("#display"),
    one = $("#mar1"),
    r1 = "url(Images/road1.png)",
    two = $("#mar2"),
    r2 = "url(Images/road2.png)",
    three = $("#mar3"),
    r3 = "url(Images/road3.png)",
    four = $("#mar4"),
    r4 = "url(Images/road4.png)",
    five = $("#mar5"),
    r5 = "url(Images/road5.png)",
    six = $("#mar6"),
    r6 = "url(Images/road6.png)";

    one.click(function(){
        if(selected !=1){
            display.fadeOut("fast",function(){
                display.css('background-image', r1);
                display.fadeIn();
            });
            selected = 1;
            $item.removeClass(" selected ");
            $("#first").addClass("selected");
        }
    });
    two.click(function(){
        if(selected !=2){
            display.fadeOut("fast",function(){
                display.css('background-image', r2);
                display.fadeIn();
            });
            selected = 2;
            $item.removeClass(" selected ");
            $("#second").addClass("selected");
        }
    });
    three.click(function(){
        if(selected !=3){
            display.fadeOut("fast",function(){
                display.css('background-image', r3);
                display.fadeIn();
            });
            selected = 3;
            $item.removeClass(" selected ");
            $("#third").addClass("selected");
        }
    });
    four.click(function(){
        if(selected !=4){
            display.fadeOut("fast",function(){
                display.css('background-image', r4);
                display.fadeIn();
            });
            selected = 4;
            $item.removeClass(" selected ");
            $("#fourth").addClass("selected");
        }
    });
    five.click(function(){
        if(selected !=5){
            display.fadeOut("fast",function(){
                display.css('background-image', r5);
                display.fadeIn();
            });
            selected = 5;
            $item.removeClass(" selected ");
            $("#fifth").addClass("selected");
        }
    });
    six.click(function(){
        if(selected !=6){
            display.fadeOut("fast",function(){
                display.css('background-image', r6);
                display.fadeIn();
            });
            selected = 6;
            $item.removeClass(" selected ");
            $("#sixth").addClass("selected");
        }
    });


// ////////////////////////////////////////////////////////// //
//                            timer                           //
// ////////////////////////////////////////////////////////// //
var i=0;
change();
function change(){
  // $item.removeClass(" selected ");
  // $item[i].addClass("selected");
  //

  // console.log($item[i]);
  i++;
  if(i==6){
    i=0;
  }

  setTimeout(change, 5000);
}


// ////////////////////////////////////////////////////////// //
//                          carousel                          //
// ////////////////////////////////////////////////////////// //
var visible = 4, //Set the number of items that will be visible
    index = 0, //Starting index
    endIndex = ( $item.length / visible ) - 1; //End index (NOTE:: Requires visible to be a factor of $item.length... You can improve this by rounding...)

$('div#arrowR').click(function(){
    if(index < endIndex ){
      index++;
      $item.animate({'left':'-=300px'});
    }
});

$('div#arrowL').click(function(){
    if(index > 0){
      index--;
      $item.animate({'left':'+=300px'});
    }
});

$(document).ready(function() {
    //this will start the JS when the webpage loads//
    var buzzer = $("#audioId")[0];
    //this var will link up to the audio link//
    var clockTime = parseInt($("#clockTime").html());
    //this will parse the inteeger of the clockTIme html and turn it into numbers that can be processed in the function//
    var breakTime = parseInt($("#breakTime").html());
    //this will parse the integer of the breakTime html into a ingeger that can be procssed by the function//
    $("#reset").hide();
    //this will hide the reset button//
  
    $("#start").click(function() {
      //when we click the start button//
      clockTime *= 60;
      //this will convert the seconds to minutes partly//
      breakTime *= 60;
      //this will change the seconds partly to minutes//
      var clockCounter = setInterval(clockTimer, 1000);
      //this will set the interval for the clockTimer by 1k miliseconds which equals 1 second//
      $(
        "#clockMinus, #clockPlus, #breakMinus, #breakTime, #breakTitle, #breakPlus, #start"
      ).hide();
      //this will hide several buttons, titles and break time// 
      function clockTimer() {      
        clockTime -= 1;
        //the interval is 1 second//
        if (clockTime === 0) {
          //when the clockTime is 0//
          clearInterval(clockCounter);
          // then clear the counter and stop it//
          buzzer.play();
          //then play the buzzer//
          $("#clockTitle, #clockTime").hide();
          //hide the clockTitle and clockTime//
          var breakCounter = setInterval(breakTimer, 1000);
          //this will set the breakCounter and interval of 1k miliseconds//
          $("#breakTitle, #breakTime").show();
          //this will show the breakTitle & breakTime//
          function breakTimer() {
            //breakTimer function//
            breakTime -= 1;
            //the interval is one second//
            if (breakTime === 0) {
              //when break time = 0//
              clearInterval(breakCounter);
              //clear the breakCounter interval or stop it//
              buzzer.play();
              //play the buzzer//
              $("#breakTitle, #breakTime").hide();
              //hide the breakTitle and breakTime when time ends//
              $("#reset").show();
              //then show the reset button//
            }
  
            if (breakTime % 60 >= 10) {
              //this will put the time into a 0:00 format. if the remainder of breakTime divided by 60 is greater than or equal to 10//
              $("#breakTime").html(
                //then put in the breakTime html//
                Math.floor(breakTime / 60) + ":" + breakTime % 60
                //breakTime divided by 60 w/ the colon and breakTime remainder of 60. do a Math.floor to round it down//
              );
            } else {
              //this doesn't work when there are 10 seconds. esle if teh breakTime reemainder of 60 isn't greater than or equal to 10//
              $("#breakTime").html(
                //put in the breakTime html//
                Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60
                //divide the breakTime by 60 plus a colon plus the string of 0 plus breakTime remainder of 60. use math floor to round down//
              );
            }
          }
        }
  
        if (clockTime % 60 >= 10) {
          //this will put the clock time into 0:00 format. if the clockTime reaminder of being divided by 60 is equal or greater than 10// 
          $("#clockTime").html(Math.floor(clockTime / 60) + ":" + clockTime % 60);
          //put in the clockTime html clockTime divided by 60 plus a colon plus clockTime reaminder of being divided by 60//
        } else {
          //the above doesn't work the clockTime reaminder of being divided by 60 is less than 10. else the clockTime remainder of being divided by 60 is not greater or equal to 10//
          $("#clockTime").html(
            //put in the clockTime html//
            Math.floor(clockTime / 60) + ":" + "0" + clockTime % 60
            //divide the clockTIme by 60 plus colon plus the string of 0 plus clockTime remainder of being divided by 60. Use Math.floor to round it down//
          );
        }
      }
    });
  
    $("#reset").click(function() {
      //when reset is clickec//
      clockTime = 1;
      //set clock time to 0//
      breakTime = 1;
      //set break clock to 0//
      $("#reset").hide();
      //hide the reset button//
      $(
        "#clockTitle, #clockMinus, #clockTime, #clockPlus, #breakTitle, #breakMinus, #breakTime, #breakPlus, #start"
      ).show();
      //show all the titles, clock times, break time and buttons//
      $("#clockTime").html(clockTime);
      //put the clockTime html to 1//
      $("#breakTime").html(breakTime);
      //put the breakTime html to 1//
    });
  
    $("#clockMinus").click(function() {
      //when clockMinus button is hit//
      if (clockTime > 1) {
        //if clockTime is greater than 1//
        clockTime -= 1;
        //then take 1 off the clockTime when the button is hit//
      }
      $("#clockTime").html(clockTime);
      //update the html clockTime minus 1//
    });
  
    $("#clockPlus").click(function() {
      //when the clockPlus button is hit//
      clockTime += 1;
      //add one to clockTime//
      $("#clockTime").html(clockTime);
      //update the clockTime to plus one//
    });
  
    $("#breakMinus").click(function() {
      //when breakMinus button is clicked//
      if (breakTime > 1) {
        //if breakTime is less than 1//
        breakTime -= 1;
        //minus 1 from breakTime//
      }
      $("#breakTime").html(breakTime);
      //update the breakTime html to breakTime minus 1//
    });
  
    $("#breakPlus").click(function() {
      //if breakPlus button is clicked//
      breakTime += 1;
      //if we add 1 to breakTime//
      $("#breakTime").html(breakTime);
      //update the breakTime html to breakTime plus one//
    });
  });
  
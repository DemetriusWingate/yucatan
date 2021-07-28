    /* This function switches the nav menus */
    function myNav () {
      var x=document.getElementById("navLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }


/*this function validates the form*/

function myFunction () {
    var x=document.getElementById('name').value;
    if (x == "") {
    alert ("You didn't tell us your name!");
        return false;
     } else {
    alert ("Thanks, " + x + " for signing up for our newsletter!");
    }
    }

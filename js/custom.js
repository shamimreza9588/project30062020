// first div for logo
var x1=document.getElementById('js_1');
    x1.addEventListener("click", function() {
     var pic1= document.getElementsByClassName('activeted_pic_div_1')[0];
     if(pic1.style.display == "block"){
       pic1.style.display = "none";
     }else {
       pic1.style.display = "block";
     }
    });
// first div but list for responsive
var y = document.getElementById('js_small_list_1');
    y.onclick = function() {
     var list = this.nextElementSibling;
     if(list.style.display == "block") {
       list.style.display = "none";
     }else {
       list.style.display = "block";
     }
    }
// second div width model pic show
// show first div
var  model_1 = document.getElementById("two-model1");
var button_1 = document.getElementById('two-caption1');
    button_1.onclick = function() {
      model_1.style.display = "block";
    }
var modelclose_1 = document.getElementById("two-close-button1");
    modelclose_1.onclick = function() {
      this.parentElement.style.display = "none";
    }
    // show second div
    var  model_2 = document.getElementById("two-model2");
    var button_2 = document.getElementById('two-caption2');
        button_2.onclick = function() {
          model_2.style.display = "block";
        }
    var modelclose_2 = document.getElementById("two-close-button2");
        modelclose_2.onclick = function() {
          this.parentElement.style.display = "none";
        }
        // show third div
        var  model_3 = document.getElementById("two-model3");
        var button_3 = document.getElementById('two-caption3');
            button_3.onclick = function() {
              model_3.style.display = "block";
            }
        var modelclose_3 = document.getElementById("two-close-button3");
            modelclose_3.onclick = function() {
              this.parentElement.style.display = "none";
            }
            // show four div
            var  model_4 = document.getElementById("two-model4");
            var button_4 = document.getElementById('two-caption4');
                button_4.onclick = function() {
                  model_4.style.display = "block";
                }
            var modelclose_4 = document.getElementById("two-close-button4");
                modelclose_4.onclick = function() {
                  this.parentElement.style.display = "none";
                }

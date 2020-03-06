
function Car(year, make, model, imageUrl, dailyPrice, description){
    this.year = year;
    this.make = make;
    this.model = model;
    this.imageUrl = imageUrl;
    this.dailyPrice = dailyPrice;
    this.description = description;
}

function clearCar(){
    $("#txtYear").val("");
    $("#txtMake").val("");
    $("#txtModel").val("");
    $("#txtImageUrl").val("");
    $("#txtDailyPrice").val("");
    $("#txtDescription").val("");

    $("#txtCode").focus();
}

function saveCar(){
    console.log("saving car");
    
    var year = $("#txtYear").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var imageUrl = $("#txtImageUrl").val();
    var dailyPrice = $("#txtDailyPrice").val();
    var description = $("#txtDescription").val();

    var theCar = new Car(year, make, model, imageUrl, dailyPrice, description);
    console.log(theCar);

    $.ajax({
        url: '/Catalog/SaveCar',
        type: 'Post',
        data: JSON.stringify(theCar),
        contentType: 'application/json',
        success: function(res){
            console.log("Yes, it works", res);
            clearCar();
        },
        error: function(errorDetails){
            console.log("Error: ", errorDetails);
            clearCar();
        }
        
    });

}

function init(){

    console.log("register page");

    $("#btnSave").click(saveCar);

    $("#txtYear").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })

    $("#txtMake").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })

    $("#txtModel").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })

    $("#txtImageUrl").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })

    $("#txtDailyPrice").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })

    $("#txtDescription").keypress(function(e){

        if(e.key == "Enter"){
            saveCar();
        }
    })
    

}

window.onload = init;
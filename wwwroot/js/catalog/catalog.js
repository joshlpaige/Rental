function fetchCatalog(){
    console.log("Fetching the catalog");

    $.ajax({
        type: 'Get',
        url: 'Catalog/GetCatalog',
        success: function(res){
            console.log("From server", res);

            for(var i=0; i<res.length;i++){
                var car = res[i]
                displayCar(car);
            }
        },
        error: function(details){
            console.log("Error", details);
        }
    })
}

function displayCar(car){
    var sntx = 
    `<div class="item">
    <img src='${car.imageUrl}'>
    <label>${car.year}</label>
    <label>${car.make}</label>
    <label>${car.model}</label>
    <label>${car.description}</label>
    <label>$${(car.dailyPrice * 1).toFixed(2)}</label>
    </div>`;

    var container = $("#catalog");
    container.append(sntx);
}


function homeWork(){
    var numbers = [11,543,222,54,6,-99,1,10,-12,2,2342,7083,1112,3,-655];

    var odd = numbers.filter(function(number){
        return (number % 2) != 0;
    });
    console.log("These are the numbers in the array:", numbers)
    console.log("The array's odd numbers:", odd);

}


function init(){
    console.log("Catalog page!");

    fetchCatalog();
    homeWork();
}

window.onload = init;
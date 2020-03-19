function fetchCatalog() {
    console.log("Fetching the catalog");

    $.ajax({
        type: 'Get',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server", res);
            

            // TODO: Sort the cars (res array) from low to high price

            // var sorted = []
            // sorted = res.sort(function(left, right){
            //      if(left.dailyPrice < right.dailyPrice){
            //          return -1; the first parameter goes first
            // }
            //      else if(right.dailyPrice < left.dailyPrice){
            //          return 1;  
            // }
            // 1
            // });
            
            var sortPrice = res.sort((left, right) => left.dailyPrice - right.dailyPrice);


            for (var i = 0; i < res.length; i++) {
                if(sortPrice[i].year && sortPrice[i].make && sortPrice[i].type){
                    var car = res[i]
                    displayCar(car, sortPrice[i]);
                }   
            }
        },
        error: function (details) {
            console.log("Error", details);
        }
    })
}

function displayCar(car) {
    var card =
        `
        <div class="wrapper">
            <div class="car-img">
                <img src="${car.imageUrl}" height="420" width="554" align="left">
            </div>
            <div class="car-info">
            <div class="car-text">
                <h1><b>${car.year} ${car.make} ${car.model}</b></h1>
                <h2><i class="far fa-user">${car.passengers}</i> Passengers 
                <i class="fas fa-gas-pump"> ${car.fuelType}</i>
                <i class="fas fa-car-side"> ${car.type}</i></h2>
                <p>${car.description}</p>
                
                <p><span>$${car.dailyPrice}</span>/day</p>
            </div>
                <br>
                <br>
            <div class="car-price-btn">
        
            <button type="button">Rent Me</button>
            </div>
            </div>
        </div>
        `;

    var container = $("#catalog");
    container.append(card);
}


function homeWork() {
    var numbers = [11, 543, 222, 54, 6, -99, 1, 10, -12, 2, 2342, 7083, 1112, 3, -655];

    var odd = numbers.filter(function (number) {
        return (number % 2) != 0;
    });
    console.log("These are the numbers in the array:", numbers)
    console.log("The array's odd numbers:", odd);

}


function init() {
    console.log("Catalog page!");

    fetchCatalog();
    homeWork();
}

window.onload = init;
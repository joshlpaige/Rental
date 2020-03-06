using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;

namespace Rental.Controllers
{
    public class CatalogController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar([FromBody] Car theCar){
            Console.WriteLine("User is saving a car");
            Console.WriteLine(theCar.Make);

            theCar.Id = 1;
            return Json(theCar);


        }

        [HttpGet]
        public IActionResult GetCatalog(){
            Car c1 = new Car();
            c1.Make = "Ford";
            c1.Model = "Focus";
            c1.Year = "2018";
            c1.Cyls = "4";
            c1.Description = "Rent an economy car for driving in crowded, downtown areas with busy traffic and tight parking spaces. Economy car rentals typically offer the best fuel efficiency.";
            c1.DailyPrice = "29.99";
            c1.ImageUrl = "https://www.wsupercars.com/wallpapers/Ford/2020-Ford-Focus-ST-V1-1080.jpg";
            c1.FuelType = "Gas";
            c1.Passengers = "5";
            c1.Type = "0";
            c1.Id = 22345;

            Car c2 = new Car();
            c2.Make = "Kia";
            c2.Model = "Niro";
            c2.Year = "2020";
            c2.Cyls = "4";
            c2.Description = "Rent an hybrid car for driving in crowded, downtown areas with busy traffic and tight parking spaces. Hybrids may not have the acceleration, but they have the fuel efficiency.";
            c2.DailyPrice = "55.99";
            c2.ImageUrl = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-niro-touring-front-three-1574274743.jpg?crop=0.739xw:0.625xh;0.199xw,0.332xh&resize=1200:*";
            c2.FuelType = "Hybrid";
            c2.Passengers = "5";
            c2.Type = "0";
            c2.Id = 22442;

            List<Car> list = new List<Car>();
            list.Add(c1);
            list.Add(c2);

            return Json(list);




        }

    }
}
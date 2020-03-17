using System;
using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;
using System.Linq;

namespace Rental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext context){
            this.dbContext = context;
        }
        
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
            

            // logic to save theCar into the Database
            dbContext.Cars.Add(theCar);
            dbContext.SaveChanges(); // Commit the changes to the DB
            

            return Json(theCar);


        }

        [HttpGet]
        public IActionResult GetCatalog(){
        
            var list = dbContext.Cars.ToList(); // access the Cars
            return Json(list);




        }

    }
}
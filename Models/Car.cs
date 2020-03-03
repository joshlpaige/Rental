
namespace Rental.Models
{
    public class Car
    {
        public int Id { get; set; }

        public string Make { get; set; }
        
        public string Model { get; set; }

        public int Year { get; set; }

        public decimal DailyPrice { get; set; }

        public int Cyls { get; set; }

        public int Passengers { get; set; }

        /// 0 - economy, 1 - mid lux, 2 - lux, 3 - sport, 4 - super sport
        public int Type { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }

        public string FuelType { get; set; }
    }
}
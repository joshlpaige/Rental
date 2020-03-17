using Microsoft.EntityFrameworkCore;

namespace Rental.Models{

/*
    this class will handle the connection to the database
    and helpss retrieve/store/update the data

    If somethings change on the models/tables, execute:
    -dotnet ef migrations add <someName>
    -dotnet ef database update
*/
    public class DataContext : DbContext{
        
        public DataContext(DbContextOptions<DataContext> options) : base(options){

        }

        // specifies which models need to be converted in to DB tables
        public DbSet<Car> Cars {get; set;} 
    }
    
}
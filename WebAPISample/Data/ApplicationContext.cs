using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Movie>()
            .HasData(
               new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese", ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Freviews%2Fdeparted-review%2F&psig=AOvVaw1vcmKepa0v6e4L8E9ugFEL&ust=1588866359243000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDOhcvKn-kCFQAAAAAdAAAAABAP" },
               new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan", ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.denofgeek.com%2Fmovies%2Fthe-dark-knight-the-joker-and-game-theory%2F&psig=AOvVaw1BcGlnsufWq1sT-SYV6c4_&ust=1588866487037000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiw84rLn-kCFQAAAAAdAAAAABAD" },
               new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan", ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Freviews%2Finception-review%2F&psig=AOvVaw2RV2LmTETZJxAkMdhxGOSr&ust=1588866595151000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj867rLn-kCFQAAAAAdAAAAABAJ" },
               new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green", ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aspentimes.com%2Fnews%2Fpineapple-express-a-stoner-comedy-thats-actually-funny%2F&psig=AOvVaw3mnHQyFpxU7zK7RqveT0tN&ust=1588866629123000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCj08vLn-kCFQAAAAAdAAAAABAJ" },
               new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan", ImageURL= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digitalspy.com%2Fmovies%2Fa822492%2Fa-major-die-hard-plot-hole-was-just-explained-29-years-later%2F&psig=AOvVaw0zjo-xdDQFs8wsPtZ6koHw&ust=1588866682882000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODB--TLn-kCFQAAAAAdAAAAABAD" }
            );
        }

        public DbSet<Movie> Movies { get; set; }
    }
}

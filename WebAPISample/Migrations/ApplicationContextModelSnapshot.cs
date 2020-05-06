﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPISample.Data;

namespace WebAPISample.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPISample.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Director")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageURL")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            MovieId = 1,
                            Director = "Martin Scorsese",
                            Genre = "Drama",
                            ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Freviews%2Fdeparted-review%2F&psig=AOvVaw1vcmKepa0v6e4L8E9ugFEL&ust=1588866359243000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDOhcvKn-kCFQAAAAAdAAAAABAP",
                            Title = "The Departed"
                        },
                        new
                        {
                            MovieId = 2,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.denofgeek.com%2Fmovies%2Fthe-dark-knight-the-joker-and-game-theory%2F&psig=AOvVaw1BcGlnsufWq1sT-SYV6c4_&ust=1588866487037000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiw84rLn-kCFQAAAAAdAAAAABAD",
                            Title = "The Dark Knight"
                        },
                        new
                        {
                            MovieId = 3,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.empireonline.com%2Fmovies%2Freviews%2Finception-review%2F&psig=AOvVaw2RV2LmTETZJxAkMdhxGOSr&ust=1588866595151000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj867rLn-kCFQAAAAAdAAAAABAJ",
                            Title = "Inception"
                        },
                        new
                        {
                            MovieId = 4,
                            Director = "David Gordon Green",
                            Genre = "Comedy",
                            ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aspentimes.com%2Fnews%2Fpineapple-express-a-stoner-comedy-thats-actually-funny%2F&psig=AOvVaw3mnHQyFpxU7zK7RqveT0tN&ust=1588866629123000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCj08vLn-kCFQAAAAAdAAAAABAJ",
                            Title = "Pineapple Express"
                        },
                        new
                        {
                            MovieId = 5,
                            Director = "John McTiernan",
                            Genre = "Action",
                            ImageURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.digitalspy.com%2Fmovies%2Fa822492%2Fa-major-die-hard-plot-hole-was-just-explained-29-years-later%2F&psig=AOvVaw0zjo-xdDQFs8wsPtZ6koHw&ust=1588866682882000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODB--TLn-kCFQAAAAAdAAAAABAD",
                            Title = "Die Hard"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

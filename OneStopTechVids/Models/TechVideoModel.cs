using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OneStopTechVids.Models
{
    public class TechVideo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Category { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
    }

    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class TechVideosData
    {
        public static List<TechVideo> TechVideos;
        public static List<Category> Categories;

        static TechVideosData()
        {
            Categories = new List<Category>()
            {
                new Category() {Id = 1, Name = "JavaScript"},
                new Category() {Id = 2, Name = "ASP.NET"},
                new Category() {Id = 3, Name = "C#"},
                new Category() {Id = 4, Name = "HTML"},
                new Category() {Id = 5, Name = "CSS"},
                new Category() {Id = 6, Name = "Patterns and Practices"}
            };

            TechVideos = new List<TechVideo>()
            {
                new TechVideo()
                {
                    Id = 1,
                    Title = "JavaScript Patterns",
                    Author = "Ravi",
                    Category = 1,
                    Description = "Takes a close look at most of the common patterns in JavaScript",
                    Rating = 4
                },
                new TechVideo()
                {
                    Id = 2,
                    Title = "AngularJSFundamentals",
                    Author = "Suprotim",
                    Category = 1,
                    Description =
                        "Teaches basics of Angular JS. Introduces the framework and dives into the concepts around.",
                    Rating = 4
                },
                // More test data

            };
        }
    }
}
using System;
using System.Collections.Generic;

#nullable disable

namespace ProductWebAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            WishLists = new HashSet<WishList>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string ImagePath { get; set; }
        public string ProductDescription { get; set; }
        public double ProductRating { get; set; }
        public double ProductOfferPrice { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<WishList> WishLists { get; set; }
    }
}

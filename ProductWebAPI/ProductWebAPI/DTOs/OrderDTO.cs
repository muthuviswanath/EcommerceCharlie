using System;

namespace ProductWebAPI.DTOs
{
    public class OrderDTO
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public DateTime OrderDate { get; set; }
        public string ProductName { get; set; }
        public string imgURL { get; set; }
        public string ProductDescription { get; set; }
        public double ProductRating { get; set; }
        public double ProductOfferPrice { get; set; }
    }
}

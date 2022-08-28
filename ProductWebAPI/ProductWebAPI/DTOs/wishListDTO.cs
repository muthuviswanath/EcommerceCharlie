namespace ProductWebAPI.DTOs
{
    public class WishListDTO
    {
        public int WishListId { get; set; }
        public int ProductId { get; set; }
        public int userId { get; set; }
        public string ProductName { get; set; }
        public string imgURL { get; set; }
        public string ProductDescription { get; set; }
        public double ProductRating { get; set; }
        public double ProductOfferPrice { get; set; }
    }
}

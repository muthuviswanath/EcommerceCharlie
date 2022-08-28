namespace ProductWebAPI.DTOs
{
    public class CartDTO
    {

        public int cartId { get; set; }
        public int productId {  get; set; }
        // public int cartQuantity { get; set; }
        public float cartTotal { get; set; }
        public string productName { get; set; }
        public string imgURL { get; set; }
        public int userId { get; set; }
    }
}

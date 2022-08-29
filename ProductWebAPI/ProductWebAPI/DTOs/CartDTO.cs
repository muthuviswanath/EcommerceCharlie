namespace ProductWebAPI.DTOs
{
    public class CartDTO
    {

        public int cartId { get; set; }
        public int productId {  get; set; }
        public double cartProductPrice { get; set; }
        public double cartTotal { get; set; }
        public string productName { get; set; }
        public string imgURL { get; set; }
        public int userId { get; set; }
    }
}

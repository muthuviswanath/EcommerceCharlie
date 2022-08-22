using System;
using System.Collections.Generic;

#nullable disable

namespace ProductApi.Models
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public double CartTotal { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}

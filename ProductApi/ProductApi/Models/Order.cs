﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ProductApi.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public DateTime OrderDate { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}

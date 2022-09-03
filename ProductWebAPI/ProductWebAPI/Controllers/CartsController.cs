using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductWebAPI.DTOs;
using ProductWebAPI.Models;


namespace ProductWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly EcommerceContext _context;

        public CartsController(EcommerceContext context)
        {
            _context = context;
        }

        // GET: api/Carts changes by apoorv 
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<CartDTO>>> GetCarts()
        {
            //return await _context.Carts.Include(u => u.User).Include(p => p.Product).ToListAsync();
            var cartData = _context.Carts.Include(p => p.Product).Include(p => p.User).Select(c => new CartDTO
            {
                cartId = c.CartId,
                cartTotal = c.CartTotal,
                productName = c.Product.ProductName,
                imgURL = c.Product.ImagePath,
                userId = c.UserId,
                productId = c.ProductId,
                cartProductPrice = c.Product.ProductOfferPrice,
            });
            var value = await cartData.ToListAsync();
            return value;

            //return await _context.Carts.ToListAsync();




        }

        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        // GET: api/Carts/5
        [HttpGet("product/{id}")]
        public async Task<ActionResult<CartDTO>> GetCartbyProductId(int id)
        {
            var usercart = _context.Carts.Include(u => u.User).Include(p => p.Product).Select(c => new CartDTO
            {
                cartId = c.CartId,
                cartTotal = c.CartTotal,
                productName = c.Product.ProductName,
                imgURL = c.Product.ImagePath,
                userId = c.UserId,
                productId = c.ProductId,
                cartProductPrice = c.Product.ProductOfferPrice,
            });
            return await usercart.FirstOrDefaultAsync(p => p.productId == id);
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult<IEnumerable<CartDTO>>> GetCartbyUserId(int id)
        {
            var usercart = _context.Carts.Where(x => x.UserId == id).Include(c => c.User).Include(p => p.Product).Select(u => new CartDTO
            {
                cartId = u.CartId,
                cartTotal = u.CartTotal,
                productName = u.Product.ProductName,
                imgURL = u.Product.ImagePath,
                userId = u.UserId,
                productId = u.ProductId,
                cartProductPrice = u.Product.ProductOfferPrice,
            });
            var newcart = await usercart.ToListAsync();
            return newcart;
        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(int id, [FromBody] Cart cart)
        {
            if (id != cart.CartId)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCart", new { id = cart.CartId }, cart);
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CartExists(int id)
        {
            return _context.Carts.Any(e => e.CartId == id);
        }
    }
}

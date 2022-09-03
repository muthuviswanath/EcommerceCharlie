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
    public class WishListsController : ControllerBase
    {
        private readonly EcommerceContext _context;

        public WishListsController(EcommerceContext context)
        {
            _context = context;
        }

        // GET: api/WishLists
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<WishListDTO>>> GetWishLists()
        {
            //return await _context.WishLists.Include(u => u.User).Include(p => p.Product).ToListAsync();

            var wishListItem = _context.WishLists.Include(i => i.Product).Include(i => i.User).Select(w => new WishListDTO
            {
                WishListId = w.WishListId,
                ProductId = w.ProductId,
                userId = w.UserId,
                ProductName = w.Product.ProductName,
                imgURL = w.Product.ImagePath,
                ProductDescription = w.Product.ProductDescription,
                ProductRating = w.Product.ProductRating,
                ProductOfferPrice = w.Product.ProductOfferPrice,

            });
            var itemResult = await wishListItem.ToListAsync();
            return itemResult;
        }

        // GET: api/WishLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WishList>> GetWishList(int id)
        {
            var wishList = await _context.WishLists.FindAsync(id);

            if (wishList == null)
            {
                return NotFound();
            }

            return wishList;
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult<IEnumerable<WishListDTO>>> GetWishListbyID(int id)
        {
            var userWishList = _context.WishLists.Where(x => x.UserId == id).Include(c => c.User).Include(p => p.Product).Select(w => new WishListDTO
            {
                WishListId = w.WishListId,
                ProductId = w.ProductId,
                userId = w.UserId,
                ProductName = w.Product.ProductName,
                imgURL = w.Product.ImagePath,
                ProductDescription = w.Product.ProductDescription,
                ProductRating = w.Product.ProductRating,
                ProductOfferPrice = w.Product.ProductOfferPrice,


            });
            var userWishListData = await userWishList.ToListAsync();
            return userWishListData;

        }

        // PUT: api/WishLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWishList(int id, WishList wishList)
        {
            if (id != wishList.WishListId)
            {
                return BadRequest();
            }

            _context.Entry(wishList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WishListExists(id))
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

        // POST: api/WishLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WishList>> PostWishList(WishList wishList)
        {
            _context.WishLists.Add(wishList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWishList", new { id = wishList.WishListId }, wishList);
        }

        // DELETE: api/WishLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWishList(int id)
        {
            var wishList = await _context.WishLists.FindAsync(id);
            if (wishList == null)
            {
                return NotFound();
            }

            _context.WishLists.Remove(wishList);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WishListExists(int id)
        {
            return _context.WishLists.Any(e => e.WishListId == id);
        }
    }
}

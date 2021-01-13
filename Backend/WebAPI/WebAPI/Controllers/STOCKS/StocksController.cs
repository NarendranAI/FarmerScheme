using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;
using System.Web.Http.Cors;

namespace WebAPI.Controllers.STOCKS
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StocksController : ApiController
    {
        private Farmer_SchemeEntities1 db = new Farmer_SchemeEntities1();

        // GET: api/Stocks/GetStocks
        public IQueryable<Stock> GetStocks()
        {
            return db.Stocks;
        }

        // GET: api/Stocks/GetStock
        [ResponseType(typeof(Stock))]
        public IHttpActionResult GetStock(int id)
        {
            Stock stock = db.Stocks.Find(id);
            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock);
        }

        // PUT: api/Stocks/PutStock
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStock(int id, Stock stock)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != stock.StockId)
            {
                return BadRequest();
            }

            db.Entry(stock).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StockExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        //api/stocks/putStockQuantity
        public IHttpActionResult putStockQuantity(Stock stock)
        {
            if (!ModelState.IsValid)
            { return BadRequest(); }
            var row = db.Stocks.Find(stock.StockId);
            if(row!=null)
            {
                row.Quantity = row.Quantity-stock.Quantity;
                db.SaveChanges();
            }
            else
            { return NotFound(); }

            return Ok(row);
        }

        // POST: api/Stocks/PostStock
        [ResponseType(typeof(Stock))]
        public IHttpActionResult PostStock(Stock stock)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Stocks.Add(stock);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (StockExists(stock.StockId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = stock.StockId }, stock);
        }

        // DELETE: api/Stocks/5
        [ResponseType(typeof(Stock))]
        public IHttpActionResult DeleteStock(int id)
        {
            Stock stock = db.Stocks.Find(id);
            if (stock == null)
            {
                return NotFound();
            }

            db.Stocks.Remove(stock);
            db.SaveChanges();

            return Ok(stock);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StockExists(int id)
        {
            return db.Stocks.Count(e => e.StockId == id) > 0;
        }
    }
}
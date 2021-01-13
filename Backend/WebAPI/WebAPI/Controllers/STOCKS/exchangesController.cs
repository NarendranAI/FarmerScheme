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
    public class exchangesController : ApiController
    {
        private Farmer_SchemeEntities1 db = new Farmer_SchemeEntities1();

        // GET: api/exchanges
        public IQueryable<exchange> Getexchanges()
        {
            return db.exchanges;
        }

        // GET: api/exchanges/GetExchange/5
        [ResponseType(typeof(exchange))]
        public IHttpActionResult Getexchange(int id)
        {
            exchange exchange = db.exchanges.Where(r => r.UserId == id).FirstOrDefault<exchange>();
            if (exchange == null)
            {
                return NotFound();
            }

            return Ok(exchange);
        }

        // PUT: api/exchanges/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putexchange(int id, exchange exchange)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exchange.StockId)
            {
                return BadRequest();
            }

            db.Entry(exchange).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!exchangeExists(id))
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

        // POST: api/exchanges/Postexchange
        [ResponseType(typeof(exchange))]
        public IHttpActionResult Postexchange(exchange exchange)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.exchanges.Add(exchange);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (exchangeExists(exchange.StockId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = exchange.StockId }, exchange);
        }


       

        // DELETE: api/exchanges/5
        [ResponseType(typeof(exchange))]
        public IHttpActionResult Deleteexchange(int id)
        {
            exchange exchange = db.exchanges.Find(id);
            if (exchange == null)
            {
                return NotFound();
            }

            db.exchanges.Remove(exchange);
            db.SaveChanges();

            return Ok(exchange);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool exchangeExists(int id)
        {
            return db.exchanges.Count(e => e.StockId == id) > 0;
        }
    }
}
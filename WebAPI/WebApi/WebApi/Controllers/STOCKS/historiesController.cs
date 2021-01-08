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
using WebApi.Models;
using System.Web.Http.Cors;


namespace WebApi.Controllers.STOCKS
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class historiesController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/histories
        public IQueryable<history> Gethistories()
        {
            return db.histories;
        }

        // GET: api/histories/5
        [ResponseType(typeof(history))]
        public IHttpActionResult Gethistory(int id)
        {
            history history = db.histories.Find(id);
            if (history == null)
            {
                return NotFound();
            }

            return Ok(history);
        }

        // PUT: api/histories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puthistory(int id, history history)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != history.transid)
            {
                return BadRequest();
            }

            db.Entry(history).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!historyExists(id))
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

        // POST: api/histories
        [ResponseType(typeof(history))]
        public IHttpActionResult Posthistory(history history)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.histories.Add(history);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (historyExists(history.transid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = history.transid }, history);
        }

        // DELETE: api/histories/5
        [ResponseType(typeof(history))]
        public IHttpActionResult Deletehistory(int id)
        {
            history history = db.histories.Find(id);
            if (history == null)
            {
                return NotFound();
            }

            db.histories.Remove(history);
            db.SaveChanges();

            return Ok(history);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool historyExists(int id)
        {
            return db.histories.Count(e => e.transid == id) > 0;
        }
    }
}
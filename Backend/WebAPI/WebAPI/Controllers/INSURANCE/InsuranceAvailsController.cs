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

namespace WebAPI.Controllers.INSURANCE
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class InsuranceAvailsController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/InsuranceAvails
        public IQueryable<InsuranceAvail> GetInsuranceAvails()
        {
            return db.InsuranceAvails;
        }

        // GET: api/InsuranceAvails/5
        [ResponseType(typeof(InsuranceAvail))]
        public IHttpActionResult GetInsuranceAvail(int id)
        {
            InsuranceAvail insuranceAvail = db.InsuranceAvails.Find(id);
            if (insuranceAvail == null)
            {
                return NotFound();
            }

            return Ok(insuranceAvail);
        }

        // PUT: api/InsuranceAvails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInsuranceAvail(int id, InsuranceAvail insuranceAvail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != insuranceAvail.ApplicationId)
            {
                return BadRequest();
            }

            db.Entry(insuranceAvail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceAvailExists(id))
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

        // POST: api/InsuranceAvails
        [ResponseType(typeof(InsuranceAvail))]
        public IHttpActionResult PostInsuranceAvail(InsuranceAvail insuranceAvail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InsuranceAvails.Add(insuranceAvail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (InsuranceAvailExists(insuranceAvail.ApplicationId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = insuranceAvail.ApplicationId }, insuranceAvail);
        }

        // DELETE: api/InsuranceAvails/5
        [ResponseType(typeof(InsuranceAvail))]
        public IHttpActionResult DeleteInsuranceAvail(int id)
        {
            InsuranceAvail insuranceAvail = db.InsuranceAvails.Find(id);
            if (insuranceAvail == null)
            {
                return NotFound();
            }

            db.InsuranceAvails.Remove(insuranceAvail);
            db.SaveChanges();

            return Ok(insuranceAvail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InsuranceAvailExists(int id)
        {
            return db.InsuranceAvails.Count(e => e.ApplicationId == id) > 0;
        }
    }
}
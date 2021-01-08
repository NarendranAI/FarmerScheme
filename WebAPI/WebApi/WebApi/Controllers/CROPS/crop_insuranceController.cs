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


namespace WebApi.Controllers.CROPS
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class crop_insuranceController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/crop_insurance
        public IQueryable<crop_insurance> Getcrop_insurance()
        {
            return db.crop_insurance;
        }

        // GET: api/crop_insurance/5
        [ResponseType(typeof(crop_insurance))]
        public IHttpActionResult Getcrop_insurance(string id)
        {
            crop_insurance crop_insurance = db.crop_insurance.Find(id);
            if (crop_insurance == null)
            {
                return NotFound();
            }

            return Ok(crop_insurance);
        }

        // PUT: api/crop_insurance/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcrop_insurance(string id, crop_insurance crop_insurance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != crop_insurance.croptype)
            {
                return BadRequest();
            }

            db.Entry(crop_insurance).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!crop_insuranceExists(id))
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

        // POST: api/crop_insurance
        [ResponseType(typeof(crop_insurance))]
        public IHttpActionResult Postcrop_insurance(crop_insurance crop_insurance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.crop_insurance.Add(crop_insurance);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (crop_insuranceExists(crop_insurance.croptype))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = crop_insurance.croptype }, crop_insurance);
        }

        // DELETE: api/crop_insurance/5
        [ResponseType(typeof(crop_insurance))]
        public IHttpActionResult Deletecrop_insurance(string id)
        {
            crop_insurance crop_insurance = db.crop_insurance.Find(id);
            if (crop_insurance == null)
            {
                return NotFound();
            }

            db.crop_insurance.Remove(crop_insurance);
            db.SaveChanges();

            return Ok(crop_insurance);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool crop_insuranceExists(string id)
        {
            return db.crop_insurance.Count(e => e.croptype == id) > 0;
        }
    }
}
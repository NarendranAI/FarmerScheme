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
    public class InsuranceClaimsController : ApiController
    {
        private Farmer_SchemeEntities1 db = new Farmer_SchemeEntities1();
        

        // GET: api/InsuranceClaims/GetInsuranceClaims
        public IQueryable<InsuranceClaim> GetInsuranceClaims()
        {
            return db.InsuranceClaims;
        }

        // GET: api/InsuranceClaims/GetInsuranceClaim/
        [ResponseType(typeof(InsuranceClaim))]
        public IHttpActionResult GetInsuranceClaim(int id)
        {
            InsuranceClaim insuranceClaim = db.InsuranceClaims.Find(id);
            if (insuranceClaim == null)
            {
                return NotFound();
            }

            return Ok(insuranceClaim);
        }

        // PUT: api/InsuranceClaims/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutInsuranceClaim(int id, InsuranceClaim insuranceClaim)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != insuranceClaim.ApplicationId)
            {
                return BadRequest();
            }

            db.Entry(insuranceClaim).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceClaimExists(id))
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

        // POST: api/InsuranceClaims/PostInsuranceClaim
        [ResponseType(typeof(InsuranceClaim))]
        public IHttpActionResult PostInsuranceClaim(InsuranceClaim insuranceClaim)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InsuranceClaims.Add(insuranceClaim);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (InsuranceClaimExists(insuranceClaim.ApplicationId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = insuranceClaim.ApplicationId }, insuranceClaim);
        }
        //InsuranceClaims/PutStatus
        public IHttpActionResult PutStatus(InsuranceClaim claim)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            var row = db.InsuranceClaims.Find(claim.ApplicationId);
            if(row!=null)
            {
                row.ApplicationStatus = claim.ApplicationStatus;
                db.SaveChanges();

            }
            else
            {
                return NotFound();
            }
            return Ok(row);
        }

        // DELETE: api/InsuranceClaims/5
        [ResponseType(typeof(InsuranceClaim))]
        public IHttpActionResult DeleteInsuranceClaim(int id)
        {
            InsuranceClaim insuranceClaim = db.InsuranceClaims.Find(id);
            if (insuranceClaim == null)
            {
                return NotFound();
            }

            db.InsuranceClaims.Remove(insuranceClaim);
            db.SaveChanges();

            return Ok(insuranceClaim);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InsuranceClaimExists(int id)
        {
            return db.InsuranceClaims.Count(e => e.ApplicationId == id) > 0;
        }
    }
}
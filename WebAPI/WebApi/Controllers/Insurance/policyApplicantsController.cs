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

namespace WebApi.Controllers.Insurance
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class policyApplicantsController : ApiController
    {
        private FarmerSchemeEntities1 db = new FarmerSchemeEntities1();

        // GET: api/policyApplicants
        public IQueryable<policyApplicant> GetpolicyApplicants()
        {
            return db.policyApplicants;
        }

        // GET: api/policyApplicants/5
        [ResponseType(typeof(policyApplicant))]
        public IHttpActionResult GetpolicyApplicant(int id)
        {
            policyApplicant policyApplicant = db.policyApplicants.Find(id);
            if (policyApplicant == null)
            {
                return NotFound();
            }

            return Ok(policyApplicant);
        }

        // PUT: api/policyApplicants/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutpolicyApplicant(int id, policyApplicant policyApplicant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != policyApplicant.ApplicationId)
            {
                return BadRequest();
            }

            db.Entry(policyApplicant).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!policyApplicantExists(id))
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

        // POST: api/policyApplicants
        [ResponseType(typeof(policyApplicant))]
        public IHttpActionResult PostpolicyApplicant(policyApplicant policyApplicant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.policyApplicants.Add(policyApplicant);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (policyApplicantExists(policyApplicant.ApplicationId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = policyApplicant.ApplicationId }, policyApplicant);
        }

        // DELETE: api/policyApplicants/5
        [ResponseType(typeof(policyApplicant))]
        public IHttpActionResult DeletepolicyApplicant(int id)
        {
            policyApplicant policyApplicant = db.policyApplicants.Find(id);
            if (policyApplicant == null)
            {
                return NotFound();
            }

            db.policyApplicants.Remove(policyApplicant);
            db.SaveChanges();

            return Ok(policyApplicant);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool policyApplicantExists(int id)
        {
            return db.policyApplicants.Count(e => e.ApplicationId == id) > 0;
        }
    }
}
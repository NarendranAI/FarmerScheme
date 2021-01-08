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



namespace WebApi.Controllers.INSURANCE
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class PolicyDetailsController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/PolicyDetails
        public IQueryable<PolicyDetail> GetPolicyDetails()
        {
            return db.PolicyDetails;
        }

        // GET: api/PolicyDetails/5
        [ResponseType(typeof(PolicyDetail))]
        public IHttpActionResult GetPolicyDetail(int id)
        {
            PolicyDetail policyDetail = db.PolicyDetails.Find(id);
            if (policyDetail == null)
            {
                return NotFound();
            }

            return Ok(policyDetail);
        }

        // PUT: api/PolicyDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPolicyDetail(int id, PolicyDetail policyDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != policyDetail.PolicyNo)
            {
                return BadRequest();
            }

            db.Entry(policyDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PolicyDetailExists(id))
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

        // POST: api/PolicyDetails
        [ResponseType(typeof(PolicyDetail))]
        public IHttpActionResult PostPolicyDetail(PolicyDetail policyDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PolicyDetails.Add(policyDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PolicyDetailExists(policyDetail.PolicyNo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = policyDetail.PolicyNo }, policyDetail);
        }

        // DELETE: api/PolicyDetails/5
        [ResponseType(typeof(PolicyDetail))]
        public IHttpActionResult DeletePolicyDetail(int id)
        {
            PolicyDetail policyDetail = db.PolicyDetails.Find(id);
            if (policyDetail == null)
            {
                return NotFound();
            }

            db.PolicyDetails.Remove(policyDetail);
            db.SaveChanges();

            return Ok(policyDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PolicyDetailExists(int id)
        {
            return db.PolicyDetails.Count(e => e.PolicyNo == id) > 0;
        }
    }
}
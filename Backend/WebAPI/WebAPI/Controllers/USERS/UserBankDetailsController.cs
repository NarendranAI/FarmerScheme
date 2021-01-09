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

namespace WebAPI.Controllers.USERS
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserBankDetailsController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/UserBankDetails
        public IQueryable<UserBankDetail> GetUserBankDetails()
        {
            return db.UserBankDetails;
        }

        // GET: api/UserBankDetails/5
        [ResponseType(typeof(UserBankDetail))]
        public IHttpActionResult GetUserBankDetail(long id)
        {
            UserBankDetail userBankDetail = db.UserBankDetails.Find(id);
            if (userBankDetail == null)
            {
                return NotFound();
            }

            return Ok(userBankDetail);
        }

        // PUT: api/UserBankDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserBankDetail(long id, UserBankDetail userBankDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userBankDetail.BankAccountNumber)
            {
                return BadRequest();
            }

            db.Entry(userBankDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserBankDetailExists(id))
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

        // POST: api/UserBankDetails
        [ResponseType(typeof(UserBankDetail))]
        public IHttpActionResult PostUserBankDetail(UserBankDetail userBankDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserBankDetails.Add(userBankDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserBankDetailExists(userBankDetail.BankAccountNumber))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = userBankDetail.BankAccountNumber }, userBankDetail);
        }

        // DELETE: api/UserBankDetails/5
        [ResponseType(typeof(UserBankDetail))]
        public IHttpActionResult DeleteUserBankDetail(long id)
        {
            UserBankDetail userBankDetail = db.UserBankDetails.Find(id);
            if (userBankDetail == null)
            {
                return NotFound();
            }

            db.UserBankDetails.Remove(userBankDetail);
            db.SaveChanges();

            return Ok(userBankDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserBankDetailExists(long id)
        {
            return db.UserBankDetails.Count(e => e.BankAccountNumber == id) > 0;
        }
    }
}
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


namespace WebApi.Controllers.USERS
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UserDocumentsController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/UserDocuments
        public IQueryable<UserDocument> GetUserDocuments()
        {
            return db.UserDocuments;
        }

        // GET: api/UserDocuments/5
        [ResponseType(typeof(UserDocument))]
        public IHttpActionResult GetUserDocument(long id)
        {
            UserDocument userDocument = db.UserDocuments.Find(id);
            if (userDocument == null)
            {
                return NotFound();
            }

            return Ok(userDocument);
        }

        // PUT: api/UserDocuments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserDocument(long id, UserDocument userDocument)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userDocument.AadharNumber)
            {
                return BadRequest();
            }

            db.Entry(userDocument).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDocumentExists(id))
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

        // POST: api/UserDocuments
        [ResponseType(typeof(UserDocument))]
        public IHttpActionResult PostUserDocument(UserDocument userDocument)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserDocuments.Add(userDocument);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserDocumentExists(userDocument.AadharNumber))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = userDocument.AadharNumber }, userDocument);
        }

        // DELETE: api/UserDocuments/5
        [ResponseType(typeof(UserDocument))]
        public IHttpActionResult DeleteUserDocument(long id)
        {
            UserDocument userDocument = db.UserDocuments.Find(id);
            if (userDocument == null)
            {
                return NotFound();
            }

            db.UserDocuments.Remove(userDocument);
            db.SaveChanges();

            return Ok(userDocument);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDocumentExists(long id)
        {
            return db.UserDocuments.Count(e => e.AadharNumber == id) > 0;
        }
    }
}
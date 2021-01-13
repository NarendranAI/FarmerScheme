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
    public class UserTablesController : ApiController
    {

       
        public class TObj
        {
            public string type { get; set; }
        }

        private Farmer_SchemeEntities2 db = new Farmer_SchemeEntities2();

        // GET: api/UserTables/GetUserTables
        public IQueryable<UserTable> GetUserTables()
        {
            return db.UserTables;
        }

       
          

        // GET: api/UserTables/5
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult GetUserTable(int id)
        {
            UserTable userTable = db.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            return Ok(userTable);
        }

        [ResponseType(typeof(UserTable))]
        [Route("api/usertable/ByEmail/{email}")]
        
        public IHttpActionResult GetUserTableByEmail(string email)
        {
                email=email.Replace('-', '.');
            
                 var usertable1 = from r in db.UserTables
                                where r.Email ==email
                                select r;
            
            
            if (usertable1 == null)
            {
                return NotFound();
            }
            return Ok(usertable1);

        }

        [HttpPost]
        [Route("api/Login")]
        public IHttpActionResult PostLogin(UserTable user)
        {
            var usertable = from r in db.UserTables
                            where r.Email==user.Email && r.Password == user.Password
                            select new { r.UserID, r.UserName, r.Email,r.MobileNumber , r.TypeCode ,
                            r.Address,r.City,r.Pincode,r.BankAccountNumber,r.AadharNumber,
                            r.LandAddress,r.LandCity,r.LandPinCode};
            if(usertable==null)
            {
                return NotFound();
            }
            return Ok(usertable);
            
        }

        [ResponseType(typeof(UserTable))]
        [Route("api/usertables/ByMobileNo/{mob}")]
        public IHttpActionResult GetUserTableByMobileNo(long mob)
        {
            var usertable = from r in db.UserTables
                            where r.MobileNumber == mob
                            select r;
            if (usertable == null)
            {
                return NotFound();
            }
            return Ok(usertable);

        }

        [Route("api/usertables/ByType")]
        public IQueryable<UserTable> GetUserTablesByType(TObj t)
        {
            var usertable = from r in db.UserTables
                            where r.TypeCode==t.type
                            select r;
           
            return usertable;

        }


        // PUT: api/UserTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserTable(int id, UserTable userTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userTable.UserID)
            {
                return BadRequest();
            }

            db.Entry(userTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserTableExists(id))
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

        // POST: api/UserTables
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult PostUserTable(UserTable userTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserTables.Add(userTable);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserTableExists(userTable.UserID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = userTable.UserID }, userTable);
        }

        // DELETE: api/UserTables/5
        [ResponseType(typeof(UserTable))]
        public IHttpActionResult DeleteUserTable(int id)
        {
            UserTable userTable = db.UserTables.Find(id);
            if (userTable == null)
            {
                return NotFound();
            }

            db.UserTables.Remove(userTable);
            db.SaveChanges();

            return Ok(userTable);
        }

       


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserTableExists(int id)
        {
            return db.UserTables.Count(e => e.UserID == id) > 0;
        }
    }
}
﻿using System;
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
    public class cropsController : ApiController
    {
        private Farmer_SchemeEntities db = new Farmer_SchemeEntities();

        // GET: api/crops
        public IQueryable<crop> Getcrops()
        {
            return db.crops;
        }

        // GET: api/crops/5
        [ResponseType(typeof(crop))]
        public IHttpActionResult Getcrop(int id)
        {
            crop crop = db.crops.Find(id);
            if (crop == null)
            {
                return NotFound();
            }

            return Ok(crop);
        }

        // PUT: api/crops/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcrop(int id, crop crop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != crop.cropid)
            {
                return BadRequest();
            }

            db.Entry(crop).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!cropExists(id))
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

        // POST: api/crops
        [ResponseType(typeof(crop))]
        public IHttpActionResult Postcrop(crop crop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.crops.Add(crop);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = crop.cropid }, crop);
        }

        // DELETE: api/crops/5
        [ResponseType(typeof(crop))]
        public IHttpActionResult Deletecrop(int id)
        {
            crop crop = db.crops.Find(id);
            if (crop == null)
            {
                return NotFound();
            }

            db.crops.Remove(crop);
            db.SaveChanges();

            return Ok(crop);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool cropExists(int id)
        {
            return db.crops.Count(e => e.cropid == id) > 0;
        }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class history
    {
        public int transid { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<System.TimeSpan> time { get; set; }
        public Nullable<int> UserID { get; set; }
        public Nullable<int> StockId { get; set; }
        public Nullable<int> quantity { get; set; }
        public Nullable<int> price { get; set; }
        public string status { get; set; }
        public string comment { get; set; }
    
        public virtual Stock Stock { get; set; }
        public virtual UserTable UserTable { get; set; }
    }
}

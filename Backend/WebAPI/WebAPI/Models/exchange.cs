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
    
    public partial class exchange
    {
        public int StockId { get; set; }
        public int UserId { get; set; }
        public Nullable<int> bid { get; set; }
    
        public virtual Stock Stock { get; set; }
        public virtual UserTable UserTable { get; set; }
    }
}

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
    
    public partial class policyApplicant
    {
        public int ApplicationId { get; set; }
        public Nullable<int> PolicyNo { get; set; }
        public Nullable<int> UserID { get; set; }
    
        public  InsuranceAvail InsuranceAvail { get; set; }
        public  InsuranceClaim InsuranceClaim { get; set; }
        public  PolicyDetail PolicyDetail { get; set; }
        public  UserTable UserTable { get; set; }
    }
}
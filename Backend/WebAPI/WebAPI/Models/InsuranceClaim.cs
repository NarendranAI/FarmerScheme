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
    
    public partial class InsuranceClaim
    {
        public int ApplicationId { get; set; }
        public Nullable<System.DateTime> AppliedDate { get; set; }
        public string ApplicationStatus { get; set; }
        public string ReasonForClaim { get; set; }
        public string Comment { get; set; }
    
        public virtual policyApplicant policyApplicant { get; set; }
    }
}

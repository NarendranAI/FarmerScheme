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
    
    public partial class PolicyDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PolicyDetail()
        {
            this.policyApplicants = new HashSet<policyApplicant>();
        }
    
        public int PolicyNo { get; set; }
        public Nullable<int> SumInsured { get; set; }
        public Nullable<int> SumInsured_per_hectare { get; set; }
        public Nullable<int> Premium { get; set; }
        public Nullable<int> SharePremium { get; set; }
        public Nullable<int> Area { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public  ICollection<policyApplicant> policyApplicants { get; set; }
    }
}
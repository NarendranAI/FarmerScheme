create table PolicyDetails(
PolicyNo int primary key,
SumInsured int,
SumInsured_per_hectare int,
Premium int,
SharePremium int,
Area int);

create table policyApplicants(
ApplicationId int primary key,
PolicyNo int foreign key references PolicyDetails(PolicyNo),
UserID int foreign key references UserTable(UserId)
);

create table InsuranceClaim(
ApplicationId int foreign key references PolicyApplicants(ApplicationId),
AppliedDate date,
ApplicationStatus varchar,
ReasonForClaim varchar,
Comment varchar,
primary key(ApplicationId )
);

create table InsuranceAvail(
ApplicationId int primary key foreign key references PolicyApplicants(ApplicationId),
UserID int foreign key references UserTable(UserId),
cropid int FOREIGN KEY REFERENCES crop(cropid) not null,
 );


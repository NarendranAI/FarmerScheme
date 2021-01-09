
create table UserType
(
TypeName varchar(10) Primary Key,
TypeCode varchar(1) unique not null
)



create table UserTable
(
UserID int not null Primary Key,
UserName varchar(25) not null,
Email varchar(30) not null unique,
MobileNumber bigint not null unique,
Password varchar(20) not null,
TypeCode varchar(1) Foreign Key references UserType(TypeCode),
Address varchar(100) not null,
City varchar(20) not null,
Pincode int not null,
BankAccountNumber bigint not null unique,
AadharNumber bigint not null unique,
LandAddress varchar(100),
LandCity varchar(20),
LandPinCode int
)
create Table UserBankDetails
(
BankAccountNumber bigint Primary Key Foreign Key references UserTable(BankAccountNumber),
IFSC_Code varchar(15) not null,
)

create Table UserDocuments
(
AadharNumber bigint Primary Key Foreign Key references UserTable(AadharNumber),
AadharCard varbinary(Max) not null,
PanNumber varchar(10) not null unique,
PanCard varbinary(Max) not null,
TraderCertificate varbinary(Max),
FarmerLicense varbinary(Max)
)

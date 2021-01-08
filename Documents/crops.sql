create table crop
(
cropid int not  null identity(1,1) primary key,
cropname varchar(20),
croptype varchar(20) not null foreign key references crop_insurance(croptype)
)

create table crop_insurance
(
croptype varchar(20) primary key,
premium_percentage decimal(4,2),
insurance_validity date
)


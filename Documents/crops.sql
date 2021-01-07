create table crop
(
cropid int not  null identity(1,1) primary key,
cropname varchar(20),
croptype varchar(20)
)

create table crop_insurance
(
cropid int foreign key references crop(cropid),
premium_percentage decimal(4,2),
insurance_validity date
)


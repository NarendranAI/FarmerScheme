create table Stock(
StockId int not null Primary Key ,
UserID int Foreign Key references UserTable(UserID),
cropId int Foreign Key references crop(cropid),
Fertilizer varchar ,
soilPH varbinary(max),
Quantity int,
Selling_Price int
);


create table exchange 
(
StockId int foreign key references Stock(StockId),
UserId int foreign key references UserTable(UserId),
bid int ,
primary key(StockId,UserId)
);


create table history
(
transid int primary key,
date date ,
time time,
UserID int foreign key references UserTable(UserId),
StockId int foreign key references Stock(StockId),
quantity int ,
price int ,
status varchar,
comment varchar
);


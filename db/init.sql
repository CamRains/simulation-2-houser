drop table if exists houses;


create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zipcode integer
);

insert into houses (name, address, city, state, zipcode)
values('river home', '1234 joan rd', 'BHC', 'AZ', 86432),('rental home','8482 riveria','BHC','AZ',86442),('goal house','1232 big duck lane','Boulder', 'CO', 12336);

select * from houses;


alter table houses
add column img text,
add column mortgage decimal,
add column rent decimal;
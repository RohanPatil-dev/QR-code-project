
create database QR_Code;

use QR_code;

create table data(
id int auto_increment primary key,
name varchar(100),
email varchar(100),
age varchar(30),
password varchar(100),
code TEXT(100000000)
);

select * from data
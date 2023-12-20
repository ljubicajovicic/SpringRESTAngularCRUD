
DROP TABLE if exists smer cascade;
DROP TABLE if exists projekat cascade;
DROP TABLE if exists grupa cascade;
DROP TABLE if exists student cascade;


CREATE TABLE smer(
id integer primary key,
naziv varchar(100),
oznaka varchar(50)
);

CREATE TABLE projekat(
id integer primary key,
naziv varchar(100),
oznaka varchar(10),
opis varchar(500)
);

CREATE TABLE grupa(
id integer primary key,
oznaka varchar(10),
smer integer not null,
constraint fk_grupa_smer foreign key(smer) references smer(id)
);

CREATE TABLE student(
id integer primary key,
ime varchar(50),
prezime varchar(50),
broj_indeksa varchar(20),
grupa integer not null,
projekat integer not null,
constraint fk_student_grupa foreign key(grupa) references grupa(id),
constraint fk_student_projekat foreign key(projekat) references projekat(id)
);

CREATE INDEX idx_smer_pk on smer(id);
CREATE INDEX idx_projekat_pk on projekat(id);
CREATE INDEX idx_grupa_pk on grupa(id);
CREATE INDEX idx_student_pk on student(id);

CREATE INDEX idx_student_fk_grupa on student(grupa);
CREATE INDEX idx_student_fk_projekat on student(projekat);
CREATE INDEX idx_grupa_fk on grupa(smer);

DROP SEQUENCE IF EXISTS smer_id_seq;
CREATE SEQUENCE smer_id_seq
minvalue 0
start with 1;

DROP SEQUENCE IF EXISTS projekat_id_seq;
CREATE SEQUENCE projekat_id_seq
minvalue 0
start with 1;

DROP SEQUENCE IF EXISTS grupa_id_seq;
CREATE SEQUENCE grupa_id_seq
minvalue 0
start with 1;

DROP SEQUENCE IF EXISTS student_id_seq;
CREATE SEQUENCE student_id_seq
minvalue 0
start with 1;
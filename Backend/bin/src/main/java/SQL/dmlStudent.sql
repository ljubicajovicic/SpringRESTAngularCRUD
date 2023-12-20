insert into smer
values(nextval('smer_id_seq'), 'Inzenjerstvo informacionih sistema', 'IT');

insert into smer
values(nextval('smer_id_seq'), 'Industrijsko inzenjerstvo', 'II');

insert into smer
values(nextval('smer_id_seq'), 'Inzenjerski menadzment', 'IM');

insert into smer
values(nextval('smer_id_seq'), 'Softversko inzenjerstvo', 'SIIT');

insert into projekat
values(nextval('projekat_id_seq'), 'Web aplikacija', 'Web', 'Razvoj web aplikacije');

insert into projekat
values(nextval('projekat_id_seq'), 'Mobilna aplikacija', 'Mob', 'Razvoj mobilne aplikacije');

insert into projekat
values(nextval('projekat_id_seq'), 'Desktop aplikacija', 'DP', 'Razvoj desktop aplikacije');

insert into projekat
values(nextval('projekat_id_seq'), 'Projekat 1', 'P1', 'Razvoj baze podataka');

insert into grupa
values(nextval('grupa_id_seq'), 'G1', 1);

insert into grupa
values(nextval('grupa_id_seq'), 'G2', 2);

insert into grupa
values(nextval('grupa_id_seq'), 'G3', 3);

insert into grupa
values(nextval('grupa_id_seq'), 'G4', 4);

insert into student
values (nextval('student_id_seq'), 'Ljubica', 'Jovicic', 'IT67/2019', 1, 2);

insert into student
values (nextval('student_id_seq'), 'Ljiljana', 'Jovanic', 'IT6/2018', 2, 2);

insert into student
values (nextval('student_id_seq'), 'Milan', 'Kovacev', 'IM6/2018', 2, 1);

insert into student
values (nextval('student_id_seq'), 'Marko', 'Kovacevic', 'II12/2018', 1, 1);

insert into student
values (nextval('student_id_seq'), 'Janko', 'Markovic', 'SIIT12/2020', 1, 2);

insert into student
values (nextval('student_id_seq'), 'Milos', 'Kovacevic', 'IM22/2018', 1, 3);

insert into student
values (nextval('student_id_seq'), 'Miljana', 'Janic', 'IT6/2018', 1, 2);

insert into student
values (nextval('student_id_seq'), 'Marijana', 'Markovic', 'SIIT23/2021', 2, 1);

insert into student
values (nextval('student_id_seq'), 'Bosko', 'Jankovic', 'II50/2020', 2, 1);

insert into student
values (nextval('student_id_seq'), 'Marko', 'Markovic', 'SIIT3/2019', 2, 1);

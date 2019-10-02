BEGIN;

DROP TABLE IF EXISTS diary CASCADE;

create table diary (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	log_type VARCHAR(20) NOT NULL,
	message VARCHAR(250) NOT NULL,
	time_stamp VARCHAR(100)
);
insert into diary (name, log_type, message, time_stamp) values ('burhan', 'Challenge', 'Today I built this database for a daily memory logge and I am proud of it', TO_CHAR(NOW() :: DATE, 'day dd Mon, yyyy'));

COMMIT;

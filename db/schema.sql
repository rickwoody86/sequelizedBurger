USE seqburgers_db;

CREATE TABLE seqburgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);

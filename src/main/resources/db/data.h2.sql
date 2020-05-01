DROP TABLE IF EXISTS CARD;
CREATE TABLE CARD(ID BIGINT PRIMARY KEY auto_increment, WORD VARCHAR(4000), LAST_VIEWED date);
INSERT INTO CARD(word, last_viewed) VALUES('Hello', CURRENT_DATE);
INSERT INTO CARD(word, last_viewed) VALUES('World', CURRENT_DATE );
INSERT INTO CARD(word, last_viewed) VALUES('And', CURRENT_DATE);
INSERT INTO CARD(word, last_viewed) VALUES('good day', CURRENT_DATE);
INSERT INTO CARD(word, last_viewed) VALUES('beef', CURRENT_DATE);


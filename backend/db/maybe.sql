-- CREATE TABLE IF NOT EXISTS Token (
--   Id SERIAL,
--   User_Id INTEGER NOT NULL,
--   Access_Signature VARCHAR(255) UNIQUE NOT NULL,
--   Refresh_Signature VARCHAR(255) UNIQUE NOT NULL,
--   modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (Id),
--   FOREIGN KEY (User_Id) REFERENCES System_User (Id) ON
--   DELETE
--     CASCADE
-- );
-- CREATE
-- OR REPLACE TRIGGER Modified_Upd BEFORE
-- UPDATE
--   ON Token FOR EACH ROW EXECUTE PROCEDURE Upd_Timestamp();
-- 
-- CREATE TABLE IF NOT EXISTS Proxy (
--   Ip VARCHAR(64) NOT NULL,
--   Port VARCHAR(64) NOT NULL,
--   Uuid_ UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
--   Last_Successful_Req TIMESTAMP,
--   Added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (Ip, Port)
-- );
-- BEGIN
-- ;
-- INSERT INTO
--   Proxy (Ip, Port)
-- VALUES
--   ('192.168.1.123', '80');
-- END;
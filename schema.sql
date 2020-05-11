DROP DATABASE fenty;

CREATE DATABASE fenty;

USE fenty;


CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  color VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  rating INT NOT NULL,
  background VARCHAR(1000) NOT NULL,
  foreground VARCHAR(1000) NOT NULL,
  bkcolor VARCHAR (25)
);



INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER LAVENDER", 32, "LAVENDER", "POWDER", "FOR FAIR TO LIGHT SKIN TONES - GREAT FOR BRIGHTENING", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwbe971e80/product-bg/FB30011_FB9001_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw01eabf06/hi-res/FB30011_FB9001.jpg?sw=550", "#F7F1F1");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER BUTTER", 32, "BUTTER", "POWDER", "FOR FAIR TO MEDIUM SKIN TONES", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw28591ed5/product-bg/FB30011_FB9002_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3dcc92e3/hi-res/FB30011_FB9002.jpg?sw=550", "#FFF3D8");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER BANANNA", 32, "BANANNA", "POWDER", "FOR LIGHT TO TAN SKIN TONES- GREAT FOR BRIGHTENING", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw0d7ea751/product-bg/FB30011_FB9003_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1393fcf8/hi-res/FB30011_FB9003.jpg?sw=550", "#F0C696");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER CASHEW", 32, "CASHEW", "POWDER", "FOR MEDIUM TO TAN SKIN TONES", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw5a7c4397/product-bg/FB30011_FB9004_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw9a0a0f1b/hi-res/FB30011_FB9004.jpg?sw=550", "#F1BA8D");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER HONEY", 32, "HONEY", "POWDER", "FOR TAN TO DEEP SKIN TONES", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwedd00aaf/product-bg/FB30011_FB9005_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwda6a380b/hi-res/FB30011_FB9005.jpg?sw=550", "#F7B863");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER HAZELNUT", 32, "HAZELNUT", "POWDER", "FOR TAN TO DEEP SKIN TONES", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw25fa0cc5/product-bg/FB30011_FB9006_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw5023b829/hi-res/FB30011_FB9006.jpg?sw=550", "#CF915D");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER NUTMEG", 32, "NUTMEG", "POWDER", "FOR DEEP TO VERY DEEP SKIN TONES - GREAT FOR BRIGHTENING", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8cd3f2c1/product-bg/FB30011_FB9007_bg.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwf61c9873/hi-res/FB30011_FB9007.jpg?sw=550", "#D48D56");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("PRO FILT'R SETTING POWDER COFFEE", 32, "COFFEE", "POWDER", "FOR DEEP TO VERY DEEP SKIN TONES", 4.7, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8cd3f2c1/product-bg/FB30011_FB9007_bg.jpg", "https://www.fentybeauty.com/on/demandw#are.static/-/Sites-itemmaster_FNT/default/dwf61c9873/hi-res/FB30011_FB9007.jpg?sw=550", "#8E6448");





INSERT INTO products (name, price, color, category, description, rating, background, foreground) VALUES ("INVISIMATTE BLOTTING POWDER", 32, "MATTE", "POWDER", "INSTANT REFRESH. ON-THE-GO FILTER EFFECT", 4.8, "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwbe2f485a/product-bg/22346.jpg?sw=700", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwe9162778/hi-res/22346.jpg?sw=550");


INSERT INTO products (name, price, color, category, description, rating, background, foreground) VALUES ("INVISIMATTE COMPLETE ESSENTIALS", 54, "MATTE", "POWDER", "INSTANT REFRESH. ON-THE-GO FILTER EFFECT", 4.7, "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdd508192/product-bg/22520.jpg?sw=700", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw722b2ffd/hi-res/39335.jpg?sw=550");





INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK PORCELAIN", 25, "PORCELAIN", "CONTOUR", "COOL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwf9d97da3/product-bg/FB30003_FB3021_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1828cfe4/hi-res/FB30003_FB3021.jpg?sw=550", "#FFD8AA");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK IVORY", 25, "IVORY", "CONTOUR", "WARM", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw7e4a84bd/product-bg/FB30003_FB3015_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw72e16e27/hi-res/FB30003_FB3015.jpg?sw=550", "#FBD69F");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK LINEN", 25, "LINEN", "CONTOUR", "COOL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw15069f3e/product-bg/FB30003_FB3017_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw91d18e34/hi-res/FB30003_FB3017.jpg?sw=550", "#FED7AF");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK FRENCH VANILLA", 25, "FRENCH VANILLA", "CONTOUR", "WARM", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw7cf68b8d/product-bg/FB30003_FB3013_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1d4716f5/hi-res/FB30003_FB3013.jpg?sw=550", "#F5D19A");

INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK TRUFFLE", 25, "TRUFFLE", "CONTOUR", "NEUTRAL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwd5bab8d7/product-bg/FB30003_FB3024_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw31211e30/hi-res/FB30003_FB3024.jpg?sw=550", "#855B46");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK WALNUT", 25, "WALNUT", "CONTOUR", "NEUTRAL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw41914a1a/product-bg/FB30003_FB3025_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw9eb3846d/hi-res/FB30003_FB3025.jpg?sw=550", "#B78D64");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK AMBER", 25, "AMBER", "CONTOUR", "COOL CONTOUR", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb45293d6/product-bg/FB30003_FB3008_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwbe68ddfb/hi-res/FB30003_FB3008.jpg?sw=550", "#977E6A");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK COCOA", 25, "COCOA", "CONTOUR", "COOL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw9ff51ed0/product-bg/FB30003_FB3011_MODEL.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw71b560d3/hi-res/FB30003_FB3011.jpg?sw=550", "#A76945");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK EBONY", 25, "EBONY", "CONTOUR", "NATURAL", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw7278c75f/product-bg/FB30003_FB3051_tosin.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw2b82a3bb/hi-res/FB30003_FB3051.jpg?sw=550", "#4A3633");


INSERT INTO products (name, price, color, category, description, rating, background, foreground, bkcolor) VALUES ("MATCH STIX MATTE SKINSTICK CAVIAR", 25, "CAVIAR", "CONTOUR", "DEEP", 4.6, "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw50e15f47/product-bg/FB30003_FB3051_khoudia.jpg", "https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwe556a5db/hi-res/FB30003_FB3050.jpg?sw=550", "#3B332F");





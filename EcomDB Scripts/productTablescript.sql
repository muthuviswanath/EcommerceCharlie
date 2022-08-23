USE [Ecommerce]
GO

INSERT INTO [dbo].[Products]
           ([ProductName]
           ,[Quantity]
           ,[Price]
           ,[ImagePath]
           ,[ProductDescription]
           ,[ProductRating]
           ,[ProductOfferPrice])
     VALUES
           ('Khadi Nehru Jacket',15,1000,'https://m.media-amazon.com/images/I/81hpFRbbFCL._UY879_.jpg','Mens Khadi Wear',5,700),
 	('Pashmina Shawl',10, 3000,'https://m.media-amazon.com/images/I/812d9XcrhqL._UY879_.jpg','Womens Pashmina Wear',4,2500),
	 ('Chicken Kurti',9,1700,'https://m.media-amazon.com/images/I/51rdgH8CelL._UY741_.jpg','Kurtis',4,1200),
 	('Leather Mojari',7,1200,'https://m.media-amazon.com/images/I/41hQ+b1xpQL.jpg','Shoes',3,1000),
 	('Banarsi Silk Saree',17,800,'https://m.media-amazon.com/images/I/41l8h6uJa+L._UX679_.jpg','Sarees',4,500);
GO


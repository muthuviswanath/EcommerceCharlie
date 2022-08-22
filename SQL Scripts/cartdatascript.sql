USE [Ecommerce]
GO

INSERT INTO [dbo].[Cart]
           ([UserId]
           ,[ProductId]
           ,[CartTotal])
     VALUES
           (1,1,1200),
	   (2,2,1400);
GO


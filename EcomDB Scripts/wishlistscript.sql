USE [Ecommerce]
GO

/****** Object:  Table [dbo].[WishList]    Script Date: 23-08-2022 10:24:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WishList](
	[WishListId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
 CONSTRAINT [PK_WishList] PRIMARY KEY CLUSTERED 
(
	[WishListId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[WishList]  WITH CHECK ADD  CONSTRAINT [FK_WishList_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([ProductId])
GO

ALTER TABLE [dbo].[WishList] CHECK CONSTRAINT [FK_WishList_Products]
GO

ALTER TABLE [dbo].[WishList]  WITH CHECK ADD  CONSTRAINT [FK_WishList_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO

ALTER TABLE [dbo].[WishList] CHECK CONSTRAINT [FK_WishList_User]
GO


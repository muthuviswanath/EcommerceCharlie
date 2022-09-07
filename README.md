# EcommerceCharlie
Ecommerce Application - Charlie  Team

## BuyMeLocal
BuyMeLocal is an Online Ecommerce Web Application made using **Angular** & **.NET**. It provides an easy-to-handle and automated system. It also provides various features and an interface for selling and buying local handloom products for user. The admin can easily update, delete and insert data in the database with this application.
### Features
> For User
* Can Register and Login.
* Can View Products and Add them to Cart or Wishlist.
* Can Purchase Items that are in Cart.
* Can View his Cart, Order History, and, Wishlist
> For Admin
 * Can perform *CRUD* operations on Products tables.


> Product Page

![Screenshot (13)](https://user-images.githubusercontent.com/109417065/188799683-7e62081f-a545-4067-adda-0bb5e70fc0e1.png)

> Login Page

![Screenshot (14)](https://user-images.githubusercontent.com/109417065/188799666-47aa29c2-bd99-4b4d-8b2f-4ce1940d13f9.png)

> Admin Page

![Screenshot (15)](https://user-images.githubusercontent.com/109417065/188799675-cfad432b-e3e5-4f52-b643-f68548883f2c.png)
## Getting Started
### Prerequisites
Download and install the below mentioned softwares -
* Microsoft Visual Studio Community 2022 (64-bit) Version **17.3.0**
* Microsoft SQL Server Management Studio Version **18.2.1**
* .NET Framework Version **5.0.17**
* Node.js Version **16.16.0**
* Visual Studio Code **1.71.0**

### Installation
Install the below-mentioned packages inside your Visual Studio by navigating to 
> **Tools** > **NuGet Package Manager** > **Manage NuGet Packages for Solution**

* Microsoft.EntityFrameworkCore Version **5.0.17**
* Microsoft.EntityFrameworkCore.Design Version **5.0.17**
* Microsoft.EntityFrameworkCore.Tools Version **5.0.17**
* Microsoft.EntityFrameworkCore.SqlServer Version **5.0.17**
* Microsoft.AspNetCore.Authentication.JwtBearer **5.0.17**

Install the required npm modules by entering below-mentioned commands in your Command Prompt:
```sh
npm install angular
npm install @auth0/angular-jwt
npm install ng-angular-popup
```

### Configuration
* Run All the scripts that are present in [EcomDB Scripts](https://github.com/muthuviswanath/EcommerceCharlie/tree/master/EcomDB%20Scripts) inside your SQL Server Management Studio to create the Database.
* Run the .NET Web API in [ProductWebAPI](https://github.com/muthuviswanath/EcommerceCharlie/tree/master/ProductWebAPI)
* Enter the follwing command inside your Command Prompt in [Frontend](https://github.com/muthuviswanath/EcommerceCharlie/tree/master/Frontend)
```sh
ng serve --open
```

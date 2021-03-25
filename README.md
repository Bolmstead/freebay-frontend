<p align="center">    <br />


<p align="center">
<img src="public/Images/logo.png?raw=true" width=300 >
</p>

  <p align="center">
    A website where users bid on fake products with fake money!
    <br />    <br />

  </p>

  <p align="center">
    <img src="public/Images/Homepage.png?raw=true" >
  </p>

</p>    <br />


<!-- ABOUT THE PROJECT -->
## About The Project

The freeBay website is an eBay clone that allows users to search for and bid on fake products. Once a user creates an account, they receive $100 freeBay bucks to bid on any products. They can also receive $100 each time they login on a separate day.
<br><br/>

  <p align="center">
    <img src="public/Images/Productpage.png?raw=true" >
  </p>
<br><br/>

Each product has an auction time limit and the highest bid at the end of the limit, "wins" the product. A user will receive a notification based on activity within the app such as, winning a product, being outbid, or receiving a daily reward. Notifications, a user's highest bids, and products a user has won can all be viewed on their profile. Any user can view any profile, however notifications can only be seen by the owner.
<br/>

  <p align="center">
    <img src="public/Images/Profile.png?raw=true" >
  </p>

Each product's condition, rating, number of ratings, and auction end time are generated randomly, however all other product data in freeBay was scraped from a variety of Amazon's Best Sellers web pages using Python. The products are then pulled and manipulated to the frontend website by calling the [backend API](https://github.com/freebay-backend). 

  <p align="center">
    <img src="public/Images/ProductListPage.png?raw=true" >
  </p>

## Built With

The coding languages, frameworks, and libraries that I used to build this project:

Frontend
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Material-UI](https://material-ui.com/)
* HTML
* CSS
* [Axios](https://www.npmjs.com/package/axios)

Backend
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Node-PostgreSQL](https://node-postgres.com/)
* [JSON Schema](https://json-schema.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)



## How to Run the Project

To get a local copy up and running follow these steps:

....

### Clone Repos

1. Clone the frontend repo by clicking Download Zip from the green Code button at the top of the page or enter the following in the desired directory in your terminal:
   ```sh
   git clone https://github.com/Bolmstead/freebay-frontend.git
   ```
2. Clone the backend repo to a separate directory by going to [https://github.com/freebay-backend](https://github.com/freebay-backend). From there, click Download Zip again from the green Code button at the top of the page or enter the following in a separate directory in your terminal:
   ```sh
   git clone https://github.com/Bolmstead/freebay-backend.git
   ```

### Library Installations

3. After cloning each repo (and unzipping if downloaded), install the libraries in each frontend and backend repo.

    ```sh
    npm install
    ```

### Postgres Installation

4. Install [Postgres](https://www.postgresql.org/).
5. Create a database named "freebay" in your terminal in the backend directory.
    ```sh
    createdb freebay
    ```

### Seed Products to Database 

6. Run the following command in your terminal in the backend directory to create the database tables.
    ```sh
    psql -d freebay -f freebay-schema.sql
    ```

7. Open an API client of your choice. If you don't have one, you can download and use [Insomnia](https://insomnia.rest/download). Once opened, run a GET request for the following URL to seed all the products to the database:
    ```sh
    http://127.0.0.1:3001/products/SEEDALLPRODUCTS
    ```

8. Start servers in both frontend and backend directories and you are done!


## Roadmap

Stretch goals for this project:
* Search filter box for a list of searched products.
* Users add their own products and ratings for products they've won.
* Websocket chat feature.

## Contact

Berkley Olmstead - olms2074@gmail.com - [Linkedin](https://www.linkedin.com/in/berkleyolmstead/)

Project Links: [https://github.com/freebay-frontend](https://github.com/freebay-frontend) <br/>
               [https://github.com/freebay-backend](https://github.com/freebay-backend)
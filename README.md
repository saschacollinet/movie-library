# Movie Library

A simple movie library

## Tech-Stack

`React`,
`Styled-Components`,
`React-Hooks`,
`Axios`,
`Node.js`,
`Express`,
`MySQL`,
`MySQL Workbench`,
`npm`

## Install project

- clone project
- run `npm i` in the client and the server folder to install all necessary dependencies
- add `.env` file in the server folder containing `PORT=your_port_for_the_localhost` and `PASSWORD=your_password_for_MYSQL_user_ root`
- connect to MySQL Database on your localhost, create the schema `movieLibrary` and add the following tables:

```
CREATE TABLE `movies` (
`id` int NOT NULL AUTO_INCREMENT,
`title` text NOT NULL,
`length` int NOT NULL,
`genre` text NOT NULL,
`description` text NOT NULL,
`director` text NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `movies` (`id`,`title`,`length`,`genre`,`description`,`director`) VALUES
(1,'Dune',155,'Sci-Fi','Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.','Denis Villeneuve'),
(2,'Ghostbusters: Afterlife',124,'Fantasy','When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.','Jason Reitman'),
(3,'Spider-Man: Far from Home',129,'Action','Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.','Jon Watts'),
(4,'Scarface',170,'Crime','In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.','Brian De Palma'),
(5,'Pulp Fiction',154,'Crime','The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.','Quentin Tarantino'),
(6,'The Boondock Saints',108,'Action','Two Irish Catholic brothers become vigilantes and wipe out Boston\'s criminal underworld in the name of God.','Troy Duffy'),
(7,'Forrest Gump',144,'Drama','The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.','Robert Zemeckis'),
(8,'The Shawshank Redemption',144,'Drama','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.','Frank Darabont'),
(9,'Schindler\'s List',195,'Drama','In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.','Steven Spielberg'),
(10,'Fight Club',139,'Drama','An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.','David Fincher');
```

- run `npm start` in the client folder and `node index.js` in the server folder to run the project locally
- press `control + c` inside the relevant terminal tabs to stop the localhosts

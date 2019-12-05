-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 03, 2019 at 08:35 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_malekf_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

DROP TABLE IF EXISTS `tbl_portfolio`;
CREATE TABLE IF NOT EXISTS `tbl_portfolio` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `Mockups` varchar(30) NOT NULL,
  `Apps-used` varchar(100) NOT NULL,
  `Images` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`ID`, `Name`, `Description`, `Mockups`, `AppsUsed`, `Images`) VALUES
(1, 'The Lost Boy Album Review Site', 'YBN Cordae\'s Album review site by Malek Farag. Developed using HTML 5, SCSS, pure Javascript & after effects (for video background).', 'mock1.png', 'SCSS,HTML5,After Effects,Vanilla JS, Node.js', 'cordae1.jpg,cordae2.jpg,cordae3.jpg,cordae4.jpg'),
(2, 'HouseCom Thermo Security Site', 'Site showcasing the new security system by HouseCom (fictional company). Our team had 24hrs to complete this project. Developed with SCSS, MySQL, Vanilla Javascript & Cinema 4D (for the 3D model of the product).', 'mock2.png', 'MySQL,SCSS,Vanilla JS,Node.js,Cinema4D', 'hack1.jpg,hack2.jpg,hack3.jpg,hack4.jpg'),
(3, 'Cliff Creatives Startup Site', 'Web design agency startup site. Cliff Creatives has all your Web-development needs! Developed using HTML 5, SASS, Javascript & after effects (for video preview).', 'mock3.png', 'SASS,Vanilla JS,After Effects,HTML5', 'cliff1.jpg,cliff2.jpg,cliff3.jpg,cliff4.jpg'),
(4, 'Site about things I like...', 'My favorite things. Learn about me and the things that make me happy. Using MySQL and HBS, swap through different data sets with the click of a mouse.', 'mock4.png', 'MySQL,HBS,Node.js,SASS', 'fav1.jpg,fav2.jpg,fav3.jpg,fav4.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
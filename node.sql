-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2018 at 09:52 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `gname` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phn` int(11) NOT NULL,
  `divi` varchar(20) NOT NULL,
  `area` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id`, `gname`, `email`, `phn`, `divi`, `area`) VALUES
(1, 'Aiub Blood Group', 'aiubblood@gmail.com', 1900000000, 'dhaka', 'uttara'),
(2, 'My Blood Bank', 'mybloodbank@gmail.co', 1700000000, 'Rajshahi', 'Naogaon'),
(3, 'Test Blood', 'test@gmail.com', 1600000000, 'Rajshahi', 'Naogaon'),
(9, 'Test 2', 'test2@gmail.com', 150000000, 'barisal', 'sador'),
(11, 'Test', 'khan@gmail.com', 1900000000, 'Rajshahi', 'Naogaon'),
(12, 'Test', 'merun@gmail.com', 1762290253, 'Chittagong', 'Chittagong'),
(13, 'Test', 'merun1@gmail.com', 1762594445, 'barisal', 'patuakhali'),
(14, 'Test', 'merun1@gmail.com', 1762594445, 'dhaka', 'mirpur');

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE `employe` (
  `empname` varchar(50) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `type` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`empname`, `cname`, `contact`, `uname`, `pass`, `type`) VALUES
('merunn', 'merun', 'merunn', 'merun', 'merunn', NULL),
('1', '1234', '1234', '1234', '1234', NULL),
('merun', 'google', '01762290253', 'merun', '123456', NULL),
('merun', 'merunhowlader@gmail.com', 'AB+', '01762290253', '123456', NULL),
('merunn', 'merunhowlader@gmail.com', 'AB+', '01762290253', '123456', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(20) NOT NULL,
  `division` varchar(70) NOT NULL,
  `area` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `division`, `area`) VALUES
(1, 'dhaka', 'uttara'),
(2, 'barisal', 'sador rode'),
(3, 'barisal', 'patuakhali'),
(4, 'dhaka', 'mirpur'),
(5, 'Dhaka', 'Narayanganj '),
(6, 'Dhaka', 'Manikganj '),
(7, 'Chittagong	', 'Chittagong	'),
(8, 'Barisal', 'Barisal'),
(9, 'Barisal', 'Patuakhali '),
(10, 'Khulna', 'Khulna'),
(11, 'Khulna', 'Jessore '),
(12, 'Mymensingh', 'Mymensingh'),
(13, 'Rajshahi', 'Rajshahi'),
(14, 'Rangpur', 'Rangpur'),
(15, 'Rangpur', 'Dinajpur '),
(16, 'Sylhet', 'Sylhet'),
(17, 'Chittagong', 'Chittagong'),
(18, 'barisal', 'barguna'),
(19, 'Rajshahi', 'sadar'),
(20, 'Khulna', 'sadar');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `pid` int(50) NOT NULL,
  `name` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `bg` varchar(50) NOT NULL,
  `divi` varchar(50) NOT NULL,
  `area` varchar(50) NOT NULL,
  `phn` varchar(50) NOT NULL,
  `pdate` varchar(70) NOT NULL,
  `rdate` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`pid`, `name`, `email`, `bg`, `divi`, `area`, `phn`, `pdate`, `rdate`) VALUES
(2, 'merun@gmail.com', 'merun@gmail.com', 'B+', 'dhaka', 'mirpur', '01762290253', '2018-11-3', '2018-11-05'),
(5, 'kanti', 'merun@gmail.com', 'A+', 'Chittagong', '', '01762290253', '2018-11-3', '2018-11-06'),
(7, 'kanti', 'merun@gmail.com', 'A+', 'dhaka', 'uttara', '01762290253', '2018-11-4', '2018-11-05'),
(8, 'kanti', 'merun@gmail.com', 'O+', 'Rajshahi', 'Rajshahi', '01762594445', '2018-11-4', '2018-11-15'),
(9, 'kanti', 'merun@gmail.com', 'B+', 'dhaka', 'Narayanganj', '0176', '2018-11-4', '2018-11-05'),
(16, 'merun', 'merunhowlader@gmail.com', 'AB+', 'dhaka', 'mirpur', '01824241833', '2018-11-4', '2018-11-13'),
(17, 'merun', 'merunhowlader@gmail.com', 'O+', 'Chittagong', 'Chittagong', '01762290253', '2018-11-4', '2018-11-06'),
(18, 'merun', 'merunhowlader@gmail.com', 'AB+', 'dhaka', 'mirpur', '01824241833', '2018-11-8', '2018-11-09');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `type`) VALUES
(19, 'merun', 'merun', 0),
(20, 'admin', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `name` varchar(70) NOT NULL,
  `email` varchar(70) NOT NULL,
  `bg` varchar(10) NOT NULL,
  `phn` varchar(20) NOT NULL,
  `divi` varchar(70) NOT NULL,
  `area` varchar(70) NOT NULL,
  `dob` varchar(70) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `public` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `bg`, `phn`, `divi`, `area`, `dob`, `pass`, `public`, `type`) VALUES
(2, 'merun', 'merunhowlader@gmail.com', 'AB+', '01762290253', 'Dhaka', 'mirpur', '2018-11-15', '1234567', NULL, NULL),
(3, 'merun  howlader', 'merun.kh@gmail.com', 'AB+', '01824241833', 'Barisal', 'patuakhali', '2000-0-0', '123456', '1', '1'),
(4, 'kanti', 'merun@gmail.com', 'AB+', '01762290253', 'dhaka', 'mirpur', '2018-11-13', '1234', NULL, NULL),
(5, 'merun1', 'merun1@gmail.com', 'O-', '01762290253', 'Chittagong', 'Chittagong', '2018-11-14', '123456', NULL, NULL),
(8, 'mk', 'mk@gmail.com', 'A-', '01762594445', 'Rangpur', 'Rangpur', '2018-11-06', '123456', NULL, NULL),
(9, 'merunn', 'merunhowlader22@gmail.com', 'B+', '01762290253', 'Dhaka', 'uttara', '1996-01-08', '123456', NULL, NULL),
(10, 'aa', 'merunhowlader1234@gmail.com', 'B+', '01824241833', 'Dhaka', 'mirpur', '2000-04-06', '123456', NULL, NULL),
(11, 'aaa', 'aaa@gmail.com', 'AB+', '01762290253', 'Dhaka', 'mirpur', '2000-04-06', '123456', NULL, NULL),
(12, 'mk', 'merunhowlader33@gmail.com', 'AB+', '01824241833', 'Barisal', 'patuakhali', '2008-02-05', '123456', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `pid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2022 at 06:03 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `listen2it`
--

-- --------------------------------------------------------

--
-- Table structure for table `fasting`
--

CREATE TABLE `fasting` (
  `id` int(5) NOT NULL,
  `type` int(5) NOT NULL,
  `started_at` datetime NOT NULL,
  `ended_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fasting`
--

INSERT INTO `fasting` (`id`, `type`, `started_at`, `ended_at`) VALUES
(1, 1, '2022-02-28 16:12:42', '2022-03-01 08:12:42'),
(2, 1, '2022-02-28 16:15:21', '2022-03-01 08:15:21'),
(3, 1, '2022-03-28 16:15:21', '2022-03-29 08:15:21'),
(4, 1, '2022-02-28 16:52:01', '2022-02-28 16:52:06'),
(5, 1, '2022-02-28 20:55:45', '2022-02-28 20:55:53');

-- --------------------------------------------------------

--
-- Table structure for table `fasting_types`
--

CREATE TABLE `fasting_types` (
  `id` int(5) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fasting_types`
--

INSERT INTO `fasting_types` (`id`, `name`) VALUES
(1, '16:8'),
(2, '20:4');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `time_stamp`) VALUES
(2, 'Kushal Poddar', 'kushal160200@gmail.com', '$2b$10$8dxVmQRmiMi4gCLHWp/.T.7svvskMZWfaT8OG4t4r8BHBeKkwmu8e', '2022-02-28 18:36:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fasting`
--
ALTER TABLE `fasting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fasting_types`
--
ALTER TABLE `fasting_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fasting`
--
ALTER TABLE `fasting`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fasting_types`
--
ALTER TABLE `fasting_types`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

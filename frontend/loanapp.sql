-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2021 at 12:38 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loanapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_06_12_230212_funds', 2),
(5, '2021_06_15_092614_create_transaction_table', 3),
(6, '2021_06_15_200251_create-atm-table', 4),
(7, '2021_06_16_014909_create_notification-table', 5),
(8, '2021_06_17_232819_create_nots_history', 6),
(9, '2021_06_18_005723_create-history_table', 7),
(10, '2021_06_28_093117_create_admin_table', 8),
(11, '2021_06_30_223116_create_admin_table', 9),
(12, '2021_07_03_182947_create_admins_table', 10),
(13, '2021_07_03_193011_create_admins_table', 11),
(14, '2021_07_03_200446_create_termsandconditions-table', 12),
(15, '2021_07_03_200719_create_loan_table', 12),
(16, '2021_07_03_203153_create_category_table', 12),
(17, '2021_07_03_203933_create_loanrequests_table', 13),
(18, '2021_07_06_022139_create_loantrans_table', 14),
(19, '2021_07_06_024404_create_loantrans_table', 15),
(20, '2021_07_09_194021_create_chat_table', 16);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clientID` varchar(56) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acct_type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accountno` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `phone`, `clientID`, `acct_type`, `accountno`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Maryann', 'Ezeobidi', 'chimaeze223@gmail.com', '09085529517', 'HAT178527', 'savings', '0038898577', NULL, '$2y$10$sGxc4lfPpa5tVwcvwv7sZe7.U4HtR/ArcVXYN36s1hCoRFzkZ19Ey', NULL, '2021-06-16 10:22:02', '2021-06-16 10:22:02'),
(2, 'Charles', 'Akintaro', 'charleswealthinternational@gmail.com', '08156734539', 'HAT44257', 'savings', '0039770624', NULL, '$2y$10$4EH0cohHK06Xxhzvx6hSQelXrYl/SkRrMPmtpvLqFetQhAVBa.TgG', NULL, '2021-06-16 10:22:57', '2021-06-16 10:22:57'),
(3, 'Rhoda', 'Anuoluwapo', 'rhodataiwo@gmail.com', '09055774356', 'HAT133999', 'Current', '0054091807', NULL, '$2y$10$7RmglZWSXJzA9f4KCJYoUePIgARW0unxOiTD.hN4gVKbwYpsFPxE2', NULL, '2021-06-16 10:23:43', '2021-06-16 10:23:43'),
(4, 'David', 'Ogunjuola', 'isdavayan@gmail.com', '08166588654', 'HAT98442', 'Current', '0061491782', NULL, '$2y$10$gUabtTJTKLkeSiQTV6nuLe/a.HbHMli130QcM9cV9UbhE.YRcshFa', NULL, '2021-06-16 10:25:26', '2021-06-16 10:25:26'),
(5, 'Eliah', 'Agboola', 'agboolaelijah077@gmail.com', '09054234423', 'HAT89019', 'Current', '0018138846', NULL, '$2y$10$6HCA0AW3kWorGEuObbwdkOHrtXFjQPwgEWp1aey.OfwSzQpZFSHPu', NULL, '2021-06-19 06:03:02', '2021-06-19 06:03:02'),
(6, 'Chidimma', 'Okafor', 'chidimma@gmail.com', '09045634526', 'HAT95197', 'Savings', '0042241047', NULL, '$2y$10$cl70EjajaRfrIxoQZO0JQOoW3TB4GqAG.ot5hD7PrnWTxLVFGWcXa', NULL, '2021-07-01 04:10:41', '2021-07-01 04:10:41'),
(7, 'Chidimma', 'Ileme', 'ileme@gmail.com', '09045634526', 'HAT137891', 'Savings', '0079381739', NULL, '$2y$10$Pe2JkoDodbPaDpOSglFnNu1NzpnBkOcIXsreLuMptrok/RVe3IJwK', NULL, '2021-07-01 05:54:51', '2021-07-01 05:54:51'),
(8, 'Tolu', 'Okin', 'tolu@gmail.com', '09067546888', 'HAT21111', 'Savings', '0010571362', NULL, '$2y$10$vjsIU5wk7.AqRMYwhdiIRefE3cuo.2V7uxtVXCx/wkCsNRj4KcJRa', NULL, '2021-07-01 06:02:02', '2021-07-01 06:02:02'),
(9, 'Joseph', 'Babatunde', 'babatundejoseph85@gmail.com', '0905422324', 'HAT153333', 'Savings', '0030259620', NULL, '$2y$10$BmrF0DQqmJhhu7kvD/6hLO4HrntzxZ2DaCI7Gj.kyT7jO1NicUt/G', NULL, '2021-07-08 03:42:22', '2021-07-08 03:42:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

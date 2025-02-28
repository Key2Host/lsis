-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 08. Feb 2025 um 15:13
-- Server-Version: 10.11.6-MariaDB-0+deb12u1
-- PHP-Version: 8.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `k2h`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `auth_refreshtokens`
--

CREATE TABLE `auth_refreshtokens` (
  `user` int(11) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `nodes_instances`
--

CREATE TABLE `nodes_instances` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('Proxmox','Keyhelp') NOT NULL,
  `host` varchar(45) NOT NULL,
  `port` smallint(6) NOT NULL DEFAULT 443,
  `api_key` varchar(255) NOT NULL,
  `api_url` varchar(255) GENERATED ALWAYS AS (case when `type` = 'Proxmox' then concat('https://',`host`,':',`port`,'/api2/json/') when `type` = 'Keyhelp' then concat('https://',`host`,'/api/v2') else NULL end) STORED,
  `location` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `nodes_locations`
--

CREATE TABLE `nodes_locations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `coords` varchar(45) GENERATED ALWAYS AS (concat(`latitude`,', ',`longitude`)) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `shop_plans_webspaces`
--

CREATE TABLE `shop_plans_webspaces` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `disk_space` decimal(4,1) UNSIGNED NOT NULL,
  `domains` int(10) UNSIGNED NOT NULL,
  `subdomains` int(10) UNSIGNED DEFAULT NULL,
  `email_accounts` int(10) UNSIGNED DEFAULT NULL,
  `email_addresses` int(10) UNSIGNED DEFAULT NULL,
  `databases` int(10) UNSIGNED DEFAULT NULL,
  `ftp_users` int(10) UNSIGNED DEFAULT NULL,
  `scheduled_tasks` int(10) UNSIGNED DEFAULT NULL,
  `allow_backups` tinyint(1) NOT NULL,
  `allow_certmanager` tinyint(1) NOT NULL,
  `allow_remotedb` tinyint(1) NOT NULL,
  `allow_emailcatchall` tinyint(1) NOT NULL,
  `price` decimal(10,2) UNSIGNED NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `shop_plans_webspaces`
--

INSERT INTO `shop_plans_webspaces` (`id`, `name`, `disk_space`, `domains`, `subdomains`, `email_accounts`, `email_addresses`, `databases`, `ftp_users`, `scheduled_tasks`, `allow_backups`, `allow_certmanager`, `allow_remotedb`, `allow_emailcatchall`, `price`, `available`) VALUES
(1, 'WebLite', 2.0, 1, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2.99, 1),
(2, 'WebPro', 5.0, 1, NULL, 3, 3, 2, 1, 1, 1, 0, 1, 1, 5.49, 1),
(3, 'WebMax', 10.0, 3, NULL, 10, 10, 3, 3, NULL, 1, 1, 1, 1, 9.99, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `shop_voucher`
--

CREATE TABLE `shop_voucher` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `type` enum('Percentage','Amount') NOT NULL DEFAULT 'Percentage',
  `amount` decimal(10,2) NOT NULL,
  `valid_from` datetime NOT NULL,
  `valid_until` datetime NOT NULL,
  `max_uses` int(10) UNSIGNED DEFAULT NULL,
  `max_uses_per_user` int(10) UNSIGNED DEFAULT NULL,
  `valid_products` set('Webspace','VPS','KVM') DEFAULT 'Webspace,VPS,KVM'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `image` longblob DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `company` varchar(45),
  `sex` enum('male','female') NOT NULL,
  `birthday` date NOT NULL,
  `street` varchar(100) NOT NULL,
  `postalcode` varchar(10) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `stripeCustomerId` varchar(255) NOT NULL,
  `pendingActivation` tinyint(4) NOT NULL DEFAULT 1,
  `suspended` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users_emails`
--

CREATE TABLE `users_emails` (
  `user` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `is_primary` tinyint(4) NOT NULL DEFAULT 0,
  `verified` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users_phones`
--

CREATE TABLE `users_phones` (
  `user` int(11) NOT NULL,
  `number` varchar(20) NOT NULL,
  `is_primary` tinyint(4) NOT NULL DEFAULT 0,
  `verified` tinyint(4) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users_settings_notifications`
--

CREATE TABLE `users_settings_notifications` (
  `user` int(11) NOT NULL,
  `security` set('SMS','MAIL','PUSH') NOT NULL DEFAULT 'MAIL',
  `account_changes` set('SMS','MAIL','PUSH') NOT NULL DEFAULT 'MAIL',
  `marketing` set('SMS','MAIL','PUSH') NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `auth_refreshtokens`
--
ALTER TABLE `auth_refreshtokens`
  ADD PRIMARY KEY (`user`,`token`);

--
-- Indizes für die Tabelle `nodes_instances`
--
ALTER TABLE `nodes_instances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_nodes_locations_iid` (`location`),
  ADD KEY `idx_type_name` (`type`,`name`);

--
-- Indizes für die Tabelle `nodes_locations`
--
ALTER TABLE `nodes_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `shop_plans_webspaces`
--
ALTER TABLE `shop_plans_webspaces`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `shop_voucher`
--
ALTER TABLE `shop_voucher`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gutscheincode_UNIQUE` (`code`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- Indizes für die Tabelle `users_emails`
--
ALTER TABLE `users_emails`
  ADD PRIMARY KEY (`user`,`email`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indizes für die Tabelle `users_phones`
--
ALTER TABLE `users_phones`
  ADD PRIMARY KEY (`user`,`number`),
  ADD UNIQUE KEY `number_UNIQUE` (`number`);

--
-- Indizes für die Tabelle `users_settings_notifications`
--
ALTER TABLE `users_settings_notifications`
  ADD PRIMARY KEY (`user`),
  ADD UNIQUE KEY `user_UNIQUE` (`user`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `nodes_instances`
--
ALTER TABLE `nodes_instances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `nodes_locations`
--
ALTER TABLE `nodes_locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `shop_plans_webspaces`
--
ALTER TABLE `shop_plans_webspaces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `shop_voucher`
--
ALTER TABLE `shop_voucher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `auth_refreshtokens`
--
ALTER TABLE `auth_refreshtokens`
  ADD CONSTRAINT `fk_auth_refreshtokens_uid` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `nodes_instances`
--
ALTER TABLE `nodes_instances`
  ADD CONSTRAINT `fk_nodes_locations_iid` FOREIGN KEY (`location`) REFERENCES `nodes_locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `users_emails`
--
ALTER TABLE `users_emails`
  ADD CONSTRAINT `fk_users_emails_uid` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `users_phones`
--
ALTER TABLE `users_phones`
  ADD CONSTRAINT `fk_users_phones_uid` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `users_settings_notifications`
--
ALTER TABLE `users_settings_notifications`
  ADD CONSTRAINT `fk_users_settings_notifications_uid` FOREIGN KEY (`user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

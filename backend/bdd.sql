-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `Comments`;
CREATE TABLE `Comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `Projects`;
CREATE TABLE `Projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `vote` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `github_link` varchar(255) DEFAULT NULL,
  `project_link` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `Projects_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Projects` (`id`, `title`, `description`, `vote`, `image`, `github_link`, `project_link`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1,	'DeviensDev - le site pour découvrir les métiers du développement',	'Créé par des développeurs, DeviensDev vous ouvre les portes du développement web en mettant à votre disposition toutes les clés pour comprendre le métier de développeur, vous initier au code et vous orienter vers les formations adéquates.',	NULL,	'https://api.apiflash.com/v1/urltoimage?access_key=7f1be3118d9a403fa34838ac18c9d9b1&url=https://deviens.dev',	'https://github.com/O-clock-Alumni/DeviensDev',	'https://deviens.dev/',	3,	'2020-12-02 04:17:19',	'2020-12-02 04:17:19');

DROP TABLE IF EXISTS `ProjectTags`;
CREATE TABLE `ProjectTags` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `project_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`project_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `ProjectTags_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `Projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ProjectTags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `Tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `ProjectTags` (`createdAt`, `updatedAt`, `project_id`, `tag_id`) VALUES
('2020-12-02 04:19:35',	'2020-12-02 04:19:35',	1,	1),
('2020-12-02 04:20:08',	'2020-12-02 04:20:08',	1,	7),
('2020-12-02 04:20:57',	'2020-12-02 04:20:57',	1,	47);

DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20201130140844-create-user.js'),
('20201130141005-create-project.js'),
('20201130141119-create-tag.js'),
('20201130141152-create-comment.js'),
('20201201023214_pikachu.js');

DROP TABLE IF EXISTS `Tags`;
CREATE TABLE `Tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Tags` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1,	'HTML/CSS',	NULL,	'2020-12-02 03:48:38',	'2020-12-02 03:48:38'),
(2,	'Javascript',	NULL,	'2020-12-02 03:49:15',	'2020-12-02 03:49:15'),
(3,	'PHP',	NULL,	'2020-12-02 03:49:32',	'2020-12-02 03:49:32'),
(4,	'Typescript',	NULL,	'2020-12-02 03:49:42',	'2020-12-02 03:49:42'),
(5,	'Angular',	NULL,	'2020-12-02 03:49:50',	'2020-12-02 03:49:50'),
(6,	'Vue.JS',	NULL,	'2020-12-02 03:49:56',	'2020-12-02 03:49:56'),
(7,	'React',	NULL,	'2020-12-02 03:50:03',	'2020-12-02 03:50:03'),
(8,	'Node.JS',	NULL,	'2020-12-02 03:50:13',	'2020-12-02 03:50:13'),
(9,	'Laravel',	NULL,	'2020-12-02 03:50:23',	'2020-12-02 03:50:23'),
(10,	'Lumen',	NULL,	'2020-12-02 03:50:29',	'2020-12-02 03:50:29'),
(11,	'Next.JS',	NULL,	'2020-12-02 03:50:50',	'2020-12-02 03:50:50'),
(12,	'Nuxt.JS',	NULL,	'2020-12-02 03:51:18',	'2020-12-02 03:51:18'),
(13,	'Electron',	NULL,	'2020-12-02 03:51:28',	'2020-12-02 03:51:28'),
(14,	'React Native',	NULL,	'2020-12-02 03:51:36',	'2020-12-02 03:51:36'),
(15,	'Vue Native',	NULL,	'2020-12-02 03:51:42',	'2020-12-02 03:51:42'),
(16,	'Flutter',	NULL,	'2020-12-02 03:51:48',	'2020-12-02 03:51:48'),
(17,	'MySQL',	NULL,	'2020-12-02 03:52:12',	'2020-12-02 03:52:12'),
(18,	'PostgreSQL',	NULL,	'2020-12-02 03:52:23',	'2020-12-02 03:52:23'),
(19,	'MongoDB',	NULL,	'2020-12-02 03:52:30',	'2020-12-02 03:52:30'),
(20,	'Microsoft SQL Server',	NULL,	'2020-12-02 03:52:58',	'2020-12-02 03:52:58'),
(21,	'SQLite',	NULL,	'2020-12-02 03:53:08',	'2020-12-02 03:53:08'),
(22,	'Cassandra',	NULL,	'2020-12-02 03:53:23',	'2020-12-02 03:53:23'),
(23,	'Elasticsearch',	NULL,	'2020-12-02 03:53:33',	'2020-12-02 03:53:33'),
(24,	'Redis',	NULL,	'2020-12-02 03:53:38',	'2020-12-02 03:53:38'),
(25,	'DynamoDB',	NULL,	'2020-12-02 03:53:52',	'2020-12-02 03:53:52'),
(26,	'Symfony',	NULL,	'2020-12-02 03:54:25',	'2020-12-02 03:54:25'),
(27,	'Wordpress',	NULL,	'2020-12-02 03:54:32',	'2020-12-02 03:54:32'),
(28,	'CodeIgniter',	NULL,	'2020-12-02 03:55:08',	'2020-12-02 03:55:08'),
(29,	'CakePHP',	NULL,	'2020-12-02 03:55:20',	'2020-12-02 03:55:20'),
(30,	'Zend Framework',	NULL,	'2020-12-02 03:55:43',	'2020-12-02 03:55:43'),
(31,	'Cappuccino',	NULL,	'2020-12-02 03:56:18',	'2020-12-02 03:56:18'),
(32,	'Prototype',	NULL,	'2020-12-02 03:56:30',	'2020-12-02 03:56:30'),
(33,	'Ember.JS',	NULL,	'2020-12-02 03:56:41',	'2020-12-02 03:56:41'),
(34,	'Ruby',	NULL,	'2020-12-02 03:56:53',	'2020-12-02 03:56:53'),
(35,	'Ruby on Rails',	NULL,	'2020-12-02 03:57:09',	'2020-12-02 03:57:09'),
(36,	'Python',	NULL,	'2020-12-02 03:57:18',	'2020-12-02 03:57:18'),
(37,	'Go',	NULL,	'2020-12-02 03:57:28',	'2020-12-02 03:57:28'),
(38,	'Deno',	NULL,	'2020-12-02 03:57:33',	'2020-12-02 03:57:33'),
(39,	'Java',	NULL,	'2020-12-02 03:58:32',	'2020-12-02 03:58:32'),
(40,	'C',	NULL,	'2020-12-02 03:58:38',	'2020-12-02 03:58:38'),
(41,	'C++',	NULL,	'2020-12-02 03:58:46',	'2020-12-02 03:58:46'),
(42,	'C#',	NULL,	'2020-12-02 03:58:52',	'2020-12-02 03:58:52'),
(43,	'Objective-C',	NULL,	'2020-12-02 03:59:00',	'2020-12-02 03:59:00'),
(44,	'Kotlin',	NULL,	'2020-12-02 03:59:52',	'2020-12-02 03:59:52'),
(45,	'Swift',	NULL,	'2020-12-02 03:59:58',	'2020-12-02 03:59:58'),
(46,	'SCSS',	NULL,	'2020-12-02 04:01:38',	'2020-12-02 04:01:38'),
(47,	'Gatsby',	NULL,	'2020-12-02 04:20:22',	'2020-12-02 04:20:22'),
(48,	'Strapi',	NULL,	'2020-12-02 04:20:28',	'2020-12-02 04:20:28');

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `Users` (`id`, `username`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1,	'Almigra',	'almigra.dev@gmail.com',	'$2b$05$D9wHO2GSVMQrCVVXFylNYeuc1AiVxd7ySz5JSEwyeUcBStYd68gPu',	0,	'2020-12-01 09:44:37',	'2020-12-01 09:44:37'),
(2,	'Alban',	'albanvincent.pro@gmail.com',	'$2b$05$5Xl4vJ2NGPe6kdzgdXp2hulx2YaDagXkPrjTLs.FPbltJebnPUUJe',	0,	'2020-12-01 10:26:01',	'2020-12-01 10:26:01'),
(3,	'O\'Clock',	'hello@oclock.io',	'$2b$05$0uZEOS5VgnT7rvcCDos6XO9y1uQPzY4TzCewOqFRnpEF0L7odW/0i',	0,	'2020-12-02 03:13:20',	'2020-12-02 03:13:20');

-- 2020-12-02 03:26:18
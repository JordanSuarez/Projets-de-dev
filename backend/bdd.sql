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
(2,	'Celine',	'celine@pikachu.com',	'$2b$05$X1MsHqdiK0uJxbohlz8eNuY/IvKTCc/qHcu6BzOgVFLTShZUybsii',	0,	'2020-12-01 10:19:11',	'2020-12-01 10:19:11'),
(3,	'Test',	'Test@test.com',	'$2b$05$ZVPO0j79Yy5xIlIkDcbvXu/EgAVfFrQlaTr/ARxtowNeYKu4ELbM2',	0,	'2020-12-01 10:21:57',	'2020-12-01 10:21:57'),
(4,	'Alban',	'albanvincent.pro@gmail.com',	'$2b$05$5Xl4vJ2NGPe6kdzgdXp2hulx2YaDagXkPrjTLs.FPbltJebnPUUJe',	0,	'2020-12-01 10:26:01',	'2020-12-01 10:26:01'),
(5,	'Jo',	'Jo@pokemon.com',	'$2b$05$L/Y7fzDPXcwHlib0luDbs.e072UaGKR0GaPEnoOdytxhlxwnMmJhC',	0,	'2020-12-01 10:33:33',	'2020-12-01 10:33:33'),
(8,	'Elisabeth',	'reineangleterre@gmail.com',	'$2b$05$Ts/m.cgP0doWw7qgmKpsge69Be/IkhuHxce8ZawwwHy3kwwTCpW72',	0,	'2020-12-01 11:55:37',	'2020-12-01 11:55:37'),
(9,	'Boubli',	'bouli@gmail.com',	'$2b$05$zxkASGfWKuMGe5.Eq2daRurd96LuL.YPAKMssL0E0pVP29IjIIeI6',	0,	'2020-12-01 12:40:33',	'2020-12-01 12:40:33'),
(12,	'Elisabetha',	'almigra.dev1@gmail.com',	'$2b$05$y08XmFCY7o6ktEvbBUrC..3ku3f3MCp5.uML7WUIiYrQO7b3hrIWS',	0,	'2020-12-01 13:20:32',	'2020-12-01 13:20:32');

-- 2020-12-01 13:30:56
-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';


INSERT INTO `Projects` (`id`, `title`, `description`, `vote`, `image`, `github_link`, `project_link`, `userId`, `createdAt`, `updatedAt`) VALUES
(1,	'DeviensDev - le site pour découvrir les métiers du développement',	'Créé par des développeurs, DeviensDev vous ouvre les portes du développement web en mettant à votre disposition toutes les clés pour comprendre le métier de développeur, vous initier au code et vous orienter vers les formations adéquates.',	NULL,	'https://api.apiflash.com/v1/urltoimage?access_key=7f1be3118d9a403fa34838ac18c9d9b1&url=https://deviens.dev',	'https://github.com/O-clock-Alumni/DeviensDev',	'https://deviens.dev/',	3,	'2020-12-02 04:17:19.000',	'2020-12-02 04:17:19.000'),
(2,	'O\'Clock - Formation développeur web',	'Embarquez dans nos salles de classe virtuelles pour apprendre le métier de développeur, entouré de vos camarades de promotion et de vos formateurs. Un seul objectif : faire de vous un développeur web compétent, diplômé et recruté !',	NULL,	'https://api.apiflash.com/v1/urltoimage?access_key=7f1be3118d9a403fa34838ac18c9d9b1&url=https://oclock.io',	NULL,	'https://oclock.io/',	3,	'2020-12-02 11:25:10.000',	NULL);

INSERT INTO `ProjectTags` (`createdAt`, `updatedAt`, `project_id`, `tag_id`) VALUES
('2020-12-02 04:19:35.000',	'2020-12-02 04:51:14.000',	1,	1),
('2020-12-02 04:20:08.000',	'2020-12-02 04:20:08.000',	1,	7),
('2020-12-02 04:20:57.000',	'2020-12-02 04:20:57.000',	1,	47);

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20201130140844-create-user.js'),
('20201130141005-create-project.js'),
('20201130141119-create-tag.js'),
('20201130141152-create-comment.js'),
('20201201023214_project-tags.js');

INSERT INTO `Tags` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1,	'HTML/CSS',	NULL,	'2020-12-02 03:48:38.000',	'2020-12-02 03:48:38.000'),
(2,	'Javascript',	NULL,	'2020-12-02 03:49:15.000',	'2020-12-02 03:49:15.000'),
(3,	'PHP',	NULL,	'2020-12-02 03:49:32.000',	'2020-12-02 03:49:32.000'),
(4,	'Typescript',	NULL,	'2020-12-02 03:49:42.000',	'2020-12-02 03:49:42.000'),
(5,	'Angular',	NULL,	'2020-12-02 03:49:50.000',	'2020-12-02 03:49:50.000'),
(6,	'Vue.JS',	NULL,	'2020-12-02 03:49:56.000',	'2020-12-02 03:49:56.000'),
(7,	'React',	NULL,	'2020-12-02 03:50:03.000',	'2020-12-02 03:50:03.000'),
(8,	'Node.JS',	NULL,	'2020-12-02 03:50:13.000',	'2020-12-02 03:50:13.000'),
(9,	'Laravel',	NULL,	'2020-12-02 03:50:23.000',	'2020-12-02 03:50:23.000'),
(10,	'Lumen',	NULL,	'2020-12-02 03:50:29.000',	'2020-12-02 03:50:29.000'),
(11,	'Next.JS',	NULL,	'2020-12-02 03:50:50.000',	'2020-12-02 03:50:50.000'),
(12,	'Nuxt.JS',	NULL,	'2020-12-02 03:51:18.000',	'2020-12-02 03:51:18.000'),
(13,	'Electron',	NULL,	'2020-12-02 03:51:28.000',	'2020-12-02 03:51:28.000'),
(14,	'React Native',	NULL,	'2020-12-02 03:51:36.000',	'2020-12-02 03:51:36.000'),
(15,	'Vue Native',	NULL,	'2020-12-02 03:51:42.000',	'2020-12-02 03:51:42.000'),
(16,	'Flutter',	NULL,	'2020-12-02 03:51:48.000',	'2020-12-02 03:51:48.000'),
(17,	'MySQL',	NULL,	'2020-12-02 03:52:12.000',	'2020-12-02 03:52:12.000'),
(18,	'PostgreSQL',	NULL,	'2020-12-02 03:52:23.000',	'2020-12-02 03:52:23.000'),
(19,	'MongoDB',	NULL,	'2020-12-02 03:52:30.000',	'2020-12-02 03:52:30.000'),
(20,	'Microsoft SQL Server',	NULL,	'2020-12-02 03:52:58.000',	'2020-12-02 03:52:58.000'),
(21,	'SQLite',	NULL,	'2020-12-02 03:53:08.000',	'2020-12-02 03:53:08.000'),
(22,	'Cassandra',	NULL,	'2020-12-02 03:53:23.000',	'2020-12-02 03:53:23.000'),
(23,	'Elasticsearch',	NULL,	'2020-12-02 03:53:33.000',	'2020-12-02 03:53:33.000'),
(24,	'Redis',	NULL,	'2020-12-02 03:53:38.000',	'2020-12-02 03:53:38.000'),
(25,	'DynamoDB',	NULL,	'2020-12-02 03:53:52.000',	'2020-12-02 03:53:52.000'),
(26,	'Symfony',	NULL,	'2020-12-02 03:54:25.000',	'2020-12-02 03:54:25.000'),
(27,	'Wordpress',	NULL,	'2020-12-02 03:54:32.000',	'2020-12-02 03:54:32.000'),
(28,	'CodeIgniter',	NULL,	'2020-12-02 03:55:08.000',	'2020-12-02 03:55:08.000'),
(29,	'CakePHP',	NULL,	'2020-12-02 03:55:20.000',	'2020-12-02 03:55:20.000'),
(30,	'Zend Framework',	NULL,	'2020-12-02 03:55:43.000',	'2020-12-02 03:55:43.000'),
(31,	'Cappuccino',	NULL,	'2020-12-02 03:56:18.000',	'2020-12-02 03:56:18.000'),
(32,	'Prototype',	NULL,	'2020-12-02 03:56:30.000',	'2020-12-02 03:56:30.000'),
(33,	'Ember.JS',	NULL,	'2020-12-02 03:56:41.000',	'2020-12-02 03:56:41.000'),
(34,	'Ruby',	NULL,	'2020-12-02 03:56:53.000',	'2020-12-02 03:56:53.000'),
(35,	'Ruby on Rails',	NULL,	'2020-12-02 03:57:09.000',	'2020-12-02 03:57:09.000'),
(36,	'Python',	NULL,	'2020-12-02 03:57:18.000',	'2020-12-02 03:57:18.000'),
(37,	'Go',	NULL,	'2020-12-02 03:57:28.000',	'2020-12-02 03:57:28.000'),
(38,	'Deno',	NULL,	'2020-12-02 03:57:33.000',	'2020-12-02 03:57:33.000'),
(39,	'Java',	NULL,	'2020-12-02 03:58:32.000',	'2020-12-02 03:58:32.000'),
(40,	'C',	NULL,	'2020-12-02 03:58:38.000',	'2020-12-02 03:58:38.000'),
(41,	'C++',	NULL,	'2020-12-02 03:58:46.000',	'2020-12-02 03:58:46.000'),
(42,	'C#',	NULL,	'2020-12-02 03:58:52.000',	'2020-12-02 03:58:52.000'),
(43,	'Objective-C',	NULL,	'2020-12-02 03:59:00.000',	'2020-12-02 03:59:00.000'),
(44,	'Kotlin',	NULL,	'2020-12-02 03:59:52.000',	'2020-12-02 03:59:52.000'),
(45,	'Swift',	NULL,	'2020-12-02 03:59:58.000',	'2020-12-02 03:59:58.000'),
(46,	'SCSS',	NULL,	'2020-12-02 04:01:38.000',	'2020-12-02 04:01:38.000'),
(47,	'Gatsby',	NULL,	'2020-12-02 04:20:22.000',	'2020-12-02 04:20:22.000'),
(48,	'Strapi',	NULL,	'2020-12-02 04:20:28.000',	'2020-12-02 04:20:28.000');

INSERT INTO `Users` (`id`, `username`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1,	'Almigra',	'almigra.dev@gmail.com',	'$2b$05$D9wHO2GSVMQrCVVXFylNYeuc1AiVxd7ySz5JSEwyeUcBStYd68gPu',	0,	'2020-12-01 09:44:37.000',	'2020-12-01 09:44:37.000'),
(2,	'Alban',	'albanvincent.pro@gmail.com',	'$2b$05$5Xl4vJ2NGPe6kdzgdXp2hulx2YaDagXkPrjTLs.FPbltJebnPUUJe',	0,	'2020-12-01 10:26:01.000',	'2020-12-01 10:26:01.000'),
(3,	'O\'Clock',	'hello@oclock.io',	'$2b$05$0uZEOS5VgnT7rvcCDos6XO9y1uQPzY4TzCewOqFRnpEF0L7odW/0i',	0,	'2020-12-02 03:13:20.000',	'2020-12-02 03:13:20.000');

-- 2020-12-02 12:01:33
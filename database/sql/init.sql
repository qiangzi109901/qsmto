create table `test` (
  `id` int(11) not null auto_increment,
  `name` varchar(45)  default null,
  `password` varchar(45)  default null,
  `gender` varchar(10)  default null,
  primary key (`id`)
) default charset=utf8 collate=utf8_bin;


CREATE DATABASE IF NOT EXISTS shoping CHARACTER SET utf8 COLLATE utf8_general_ci;
USE shoping;
    CREATE TABLE shoping(
        id int primary key auto_increment,
        vestido varchar(20) not null,
        precio decimal(8,2) not null,
        cantidad varchar(20) not null,
        descripcion varchar(20)not null,
        img varchar(20)not null;

    );

        INSERT INTO shoping( vestido, precio, cantidad, descripcion, img) VALUES
        ("aesthetic",2.4,"3","ropa juvenil","001.jpg"),
        ("aesthetic",3.0,"3","ropa juvenil","002.jpg"),
        ("aesthetic",4.4,"3","ropa juvenil","003.jpg"),
        ("aesthetic",2.2,"3","ropa juvenil","004.jpg"),
        ("aesthetic",2.9,"3","ropa juvenil","005.jpg"),
        ("aesthetic",3.0,"3","ropa juvenil","006.jpg"),
        ("aesthetic",3.0,"3","ropa juvenil","007.jpg"),
        ("aesthetic",4.0,"3","ropa juvenil","008.jpg"),
        ("aesthetic",3.4,"3","ropa juvenil","009.jpg"),
        ("aesthetic",2.1,"3","ropa juvenil","010.jpg");

        

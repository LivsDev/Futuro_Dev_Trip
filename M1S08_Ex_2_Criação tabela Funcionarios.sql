create table funcionario (
	id serial primary key,
	nome varchar(200) not null,
	idade int not null,
	check(idade >= 14),
	cargo varchar(100) not null,
	salario decimal(18, 2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references departamento (id)
);
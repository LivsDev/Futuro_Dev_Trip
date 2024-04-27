-- exercício 05
select * from funcionario as f inner join departamento as d
on f.iddepartamento = d.id;

-- exercício 05
select
f.nome as Funcionario,
f.idade,
f.cargo,
f.salario,
d.nome as Departamento,
d.dataCriacao
from Funcionario as f
inner join Departamento as d
on f.idDepartamento = d.id;
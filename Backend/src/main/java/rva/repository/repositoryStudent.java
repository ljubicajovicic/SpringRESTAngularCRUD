package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;


import rva.model.Grupa;
import rva.model.Projekat;
import rva.model.Student;

public interface repositoryStudent extends JpaRepository<Student,Integer> {
	Collection<Student> findByIme(Student ime);
	Collection<Student> findByGrupa(Grupa grupa);
	Collection<Student> findByProjekat(Projekat projekat);
	

}

package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Projekat;

public interface repositoryProjekat extends JpaRepository<Projekat, Integer>{
	Collection <Projekat> findByNaziv(String naziv); 

}

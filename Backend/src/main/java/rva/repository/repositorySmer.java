package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Smer;
//sadrzi metode koje rade sa bazom
public interface repositorySmer extends JpaRepository <Smer,Integer> {

	Collection <Smer> findByNazivContainingIgnoreCase(String naziv); 
	
}

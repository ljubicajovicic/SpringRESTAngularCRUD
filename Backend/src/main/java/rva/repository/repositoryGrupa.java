package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Grupa;

public interface repositoryGrupa extends JpaRepository<Grupa,Integer> {
	Collection <Grupa> findByOznaka(String naziv);
}

package rva.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.model.Grupa;
import rva.repository.repositoryGrupa;
@CrossOrigin
@RestController
@Api(tags=("CRUD operations with Grupa table"))
public class GrupaController {
	
	@Autowired
	private repositoryGrupa grupaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@ApiOperation(value="Method which returns all grupa")
	@GetMapping("/grupa")
	public Collection <Grupa> getAllGrupa(){
		return grupaRepository.findAll();
	}
	
	@ApiOperation(value="Method which returns one specific grupa")
	@GetMapping("/grupa/{id}")
	public Grupa getGrupaById (@PathVariable Integer id) {
		return grupaRepository.getById(id);
	}
	
	@ApiOperation(value="Method which returns grupa by oznaka") 
	@GetMapping("/grupa/oznaka/{oznaka}")
	public Collection <Grupa> getGrupaByOznaka(@PathVariable String oznaka){
		return grupaRepository.findByOznaka(oznaka);
	}

	@ApiOperation(value="Method which create grupa") 
	@PostMapping("/grupa")
	public ResponseEntity <Grupa> createGrupa(@RequestBody Grupa grupa){
		if(!grupaRepository.existsById(grupa.getId())) {
			Grupa temp = grupaRepository.save(grupa);
			return new ResponseEntity<Grupa> (temp, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Grupa>(HttpStatus.CONFLICT);
		}
	}
	
	@ApiOperation(value="Method which update grupa") 
	@PutMapping("/grupa")
	public ResponseEntity <Grupa> updateGrupa(@RequestBody Grupa grupa){
		if(grupaRepository.existsById(grupa.getId())) {
			grupaRepository.save(grupa);
			return new ResponseEntity<Grupa>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Grupa>(HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value="Method which delete grupa") 
	@DeleteMapping("/grupa/{id}")
	public ResponseEntity<Grupa> deleteGrupa(@PathVariable int id){
		if(grupaRepository.existsById(id)) {
			if(id==-100) {
				grupaRepository.deleteById(id);
				jdbcTemplate.execute("insert into grupa(\"id\",\"oznaka\",\"smer\")"
				+ "values(-100, 'Test', 2)");
				return new ResponseEntity<Grupa>(HttpStatus.OK);
			} else {
				grupaRepository.deleteById(id);
				return new ResponseEntity<Grupa>(HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<Grupa>(HttpStatus.NOT_FOUND);
		}
	}

}

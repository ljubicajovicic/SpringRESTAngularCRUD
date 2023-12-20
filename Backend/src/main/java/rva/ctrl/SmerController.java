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
import rva.model.Smer;
import rva.repository.repositorySmer;
@CrossOrigin
@RestController//end note 
@Api(tags=("CRUD operations with Smer table"))
public class SmerController {
	
	@Autowired//pravi se anonimna klasa koja implementira nas interfejs i metode, kako bi im pristupili, izvrsava dependency injection, moze jos iznad konstruktora i set metode
	private repositorySmer smerRepository;
	
	@Autowired 
	private JdbcTemplate jdbcTemplate;
	
	@ApiOperation(value="Method which returns all smer") 
	@GetMapping("/smer")
	public Collection<Smer> getAllSmer(){
		return smerRepository.findAll();
	}
	
	@ApiOperation(value="Method which returns one specific smer") 
	@GetMapping("/smer/{id}")
	public Smer getSmerById(@PathVariable Integer id) {
		return smerRepository.getById(id);
		
	}
	
	@ApiOperation(value="Method which returns smer by naziv") 
	@GetMapping("/smer/naziv/{naziv}")
	public Collection<Smer> getSmerByIdNaziv (@PathVariable String naziv){
		return smerRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@ApiOperation(value="Method which create smer") 
	@PostMapping("/smer")
	public ResponseEntity<Smer> createSmer(@RequestBody Smer smer){ //response etity vraca poruku u vidu json formata
		if(!smerRepository.existsById(smer.getId())) {
			Smer temp = smerRepository.save(smer);
			return new ResponseEntity<Smer>(temp, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Smer>(HttpStatus.CONFLICT);
		}	
	}
	
	@ApiOperation(value="Method which update smer") 
	@PutMapping("/smer")
	public ResponseEntity <Smer> updateSmer(@RequestBody Smer smer) {
		if(smerRepository.existsById(smer.getId())){
			smerRepository.save(smer);
			return new ResponseEntity<Smer>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Smer>(HttpStatus.NOT_FOUND);
		}
	}

	@ApiOperation(value="Method which delete smer")
	@DeleteMapping("/smer/{id}")
	public ResponseEntity <Smer> deleteSmer(@PathVariable int id) {
		if(smerRepository.existsById(id)) {
			if(id==-100) {
				smerRepository.deleteById(id);
				jdbcTemplate.execute("insert into smer(\"id\",\"naziv\",\"oznaka\")"
						+ "values(-100, 'Test', 'Test')");
				//jdbcTemplate.execute("INSERT INTO \"smer\"VALUES(-100,'test naziv','test oznaka')");
				return new ResponseEntity<Smer>(HttpStatus.OK);
			} else {
				smerRepository.deleteById(id);
				return new ResponseEntity<Smer>(HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<Smer>(HttpStatus.CONFLICT);
		}
	}
	/* unutar skripta 
	 * insert into smer values (-100, test, test) za svaku tabelu
	 */
}

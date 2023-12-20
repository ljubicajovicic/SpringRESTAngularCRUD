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
import rva.model.Projekat;
import rva.repository.repositoryProjekat;
@CrossOrigin
@RestController
@Api(tags=("CRUD operations with Projekat table"))
public class ProjekatController {

	@Autowired
	private repositoryProjekat projekatRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@ApiOperation(value="Method which returns all projekat") 
	@GetMapping("/projekat")
	public Collection <Projekat> getAllProjekat(){
		return projekatRepository.findAll();
	}
	
	@ApiOperation(value="Method which returns one specific projekat") 
	@GetMapping("/projekat/{id}")
	public Projekat getProjekatById(@PathVariable Integer id) {
		return projekatRepository.getById(id);
	}
	
	@ApiOperation(value="Method which returns projekat by naziv") 
	@GetMapping("/projekat/naziv/{naziv}")
	public Collection <Projekat> getProjekatByIdNaziv(@PathVariable String naziv) {
		return projekatRepository.findByNaziv(naziv);
	}
	
	@ApiOperation(value="Method which create projekat") 
	@PostMapping("/projekat")
	public ResponseEntity<Projekat> createProjekat(@RequestBody Projekat projekat){
		if(!projekatRepository.existsById(projekat.getId())) {
			Projekat temp = projekatRepository.save(projekat);
			return new ResponseEntity<Projekat>(temp, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Projekat>(HttpStatus.CONFLICT);
		}
	}
	
	@ApiOperation(value="Method which update projekat") 
	@PutMapping("/projekat")
	public ResponseEntity<Projekat> updateProjekat(@RequestBody Projekat projekat){
		if(projekatRepository.existsById(projekat.getId())) {
			projekatRepository.save(projekat);
			return new ResponseEntity<Projekat>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Projekat>(HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value="Method which delete projekat") 
	@DeleteMapping("/projekat/{id}")
	public ResponseEntity<Projekat> deleteProjekat(@PathVariable int id){
		if(projekatRepository.existsById(id)) {
			if(id==-100) {
				projekatRepository.deleteById(id);
				jdbcTemplate.execute("insert into projekat(\"id\",\"naziv\",\"oznaka\",\"opis\")"
				+ "values(-100, 'Test', 'Test', 'Test')");
				return new ResponseEntity<Projekat>(HttpStatus.OK);
			} else {
				projekatRepository.deleteById(id);
				return new ResponseEntity<Projekat>(HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<Projekat>(HttpStatus.NOT_FOUND);
		}
	}
	
}

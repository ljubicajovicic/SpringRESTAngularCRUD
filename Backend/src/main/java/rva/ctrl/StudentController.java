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
import rva.model.Projekat;
import rva.model.Student;
import rva.repository.repositoryGrupa;
import rva.repository.repositoryProjekat;
import rva.repository.repositoryStudent;
@CrossOrigin
@RestController
@Api(tags=("CRUD operations with Student table"))
public class StudentController {

	@Autowired
	private repositoryStudent studentRepository;
	
	@Autowired
	private repositoryGrupa grupaRepository;
	
	@Autowired
	private repositoryProjekat projekatRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;//omogucava da pisemo ddl dml
	
	@ApiOperation(value="Method which returns all students") 
	@GetMapping("/student")
	public Collection<Student> getAllStudent(){
		return studentRepository.findAll();
	}
	
	@ApiOperation(value="Method which returns one specific student") 
	@GetMapping("/student/{id}")
	public Student getStudentById(@PathVariable Integer id) {
		return studentRepository.getById(id);
	}
	
	@ApiOperation(value="Method which returns student by grupa") 
	@GetMapping("/student/byGrupa/{grupa}")
	public Collection<Student> getStudentbyGrupa(@PathVariable int grupa){
		Grupa temp = grupaRepository.getById(grupa);
		return studentRepository.findByGrupa(temp);
	}
	
	@ApiOperation(value="Method which returns student by projekat") 
	@GetMapping("/student/byProjekat/{projekat}")
	public Collection<Student> getStudentbyProjekat(@PathVariable int projekat){
		Projekat temp = projekatRepository.getById(projekat);
		return studentRepository.findByProjekat(temp);
	}
	
	@ApiOperation(value="Method which create student") 
	@PostMapping("/student")
	public ResponseEntity<Student> createStudent(@RequestBody Student student){
		if(studentRepository.existsById(student.getId())) {
			return new ResponseEntity<Student>(HttpStatus.CONFLICT);
		} else {
			Student temp = studentRepository.save(student);
			return new ResponseEntity<Student>(temp,HttpStatus.CREATED);
		}
	}
	
	@ApiOperation(value="Method which update smer") 
	@PutMapping("/student")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
		if(studentRepository.existsById(student.getId())){
			studentRepository.save(student);
			return new ResponseEntity<Student>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
	
	@ApiOperation(value="Method which delete smer") 
	@DeleteMapping("/student/{id}")
	public ResponseEntity<Student> deleteStudent(@PathVariable int id){
		if(studentRepository.existsById(id)) {
			if(id==-100) {
				studentRepository.deleteById(id);
				jdbcTemplate.execute("insert into student(\"id\",\"ime\",\"prezime\",\"broj_indeksa\",\"grupa\",\"projekat\" )"
				+ "values(-100, 'Test', 'Test', 'test', 2,2)");
				return new ResponseEntity<Student>(HttpStatus.OK);
			} else {
				studentRepository.deleteById(id);
				return new ResponseEntity<Student>(HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
	
	//assertion + compliance onda http onda unesemo 200/201
	//desni klik na http kod test pa prvo izabrati(show test case editor) i run
}

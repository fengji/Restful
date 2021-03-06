package com.ventyx.webservices;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.PathSegment;
@Path("/sample")
public class HelloworldService {
	@GET
	@Path("helloworld")
	public String helloworld(){
		return "helloworld";
	}
	
	@GET
	@Path("helloname/{name}")
	public String hello(@PathParam("name") final String name){
		return "Hello "+name;
	}
	
	//http://localhost:8080/Restful/services/sample/hellothere/people;hua=li;feng=ji
	@GET
	@Path("hellothere/{people}")
	public String hellothere(@PathParam("people") PathSegment people){
		MultivaluedMap<String, String> map =people.getMatrixParameters(); 
		String value = "";
		for(Iterator<String> it =map.keySet().iterator();it.hasNext(); ){
			String key = it.next();
			value += key + " " + map.getFirst(key);
			value += " | ";
		}
		System.out.println("Path:"+people.getPath());
		return "hello " + value;
	}
	
	//http://localhost:8080/Restful/services/sample/hello;firstname=feng;lastname=ji
	@GET
	@Path("hello")
	public String hello(@MatrixParam("firstname") String firstname, @MatrixParam("lastname") String lastname){
		return "hello " + firstname + " " + lastname;
	}
	
	@GET
	@Path("myjson")
	@Produces("application/json")
	public Map<String, String> getJSON(){
		Map<String, String> myjson = new HashMap<String, String>();
		myjson.put("name1", "value1");
		myjson.put("name2", "value2");
		myjson.put("name3", "value3");
		myjson.put("name4", "value4");
		return myjson;
	}
}

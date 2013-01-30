package com.ventyx.webservices;

import javax.ws.rs.*;
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
}

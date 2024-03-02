package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="Watched")

public class Watch {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Lob
	private byte[] image;
	private String name;
	private String type;
	private int price;
	private String color;
	private String specs;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public byte[] getImage() {
        return image;
    }
    public void setImage(byte[] image) {
        this.image = image;
    }
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getprice() {
		return price;
	}
	public void setprice(int price) {
		this.price = price;
	}
	public String getcolor() {
		return color;
	}
	public void setcolor(String color) {
		this.color = color;
	}
	public String getspecs() {
		return specs;
	}
	public void setspecs(String specs) {
		this.specs = specs;
	}
	
	public Watch(int id,byte[] image,String name, String type, int price, String color,String specs) {
		super();
		this.id = id;
		this.image = image;
		this.name = name;
		this.type = type;
		this.price = price;
		this.color = color;
		this.specs = specs;
	}
	public Watch() {}
	
}

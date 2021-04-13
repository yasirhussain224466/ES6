
import java.util.Scanner;

public class JavaApplication4 {
    static Scanner input=new Scanner(System.in);
    public static void main(String[] args) {
        System.out.print("Enter Array Size: ");
	int size=input.nextInt();
	String name, address, program, school;
	int year;
	double fee,pay;
	Person[] arr = new Person[size];
	for (int i=0;i<arr.length;i++) {
	System.out.print("Enter 1 for Person, 2 for Student and 3 for Staff: ");
	size=input.nextInt();
	System.out.print("Enter Name: ");
	name=input.next();
	System.out.print("Enter Address: ");
	address=input.next();
	if (size==1) {
            arr[i]= new Person(name,address);
	}
	else if (size==2) {
            System.out.print("Enter Program: ");
            program=input.next();
            System.out.print("Enter Year: ");
            year=input.nextInt();
            System.out.print("Enter Fee: ");
            fee=input.nextDouble();
            arr[i]= new Student(name,address,program,year,fee);
			}
	else if (size==3) {
            System.out.print("Enter School: ");
            school=input.next();
            System.out.print("Enter Pay: ");
            pay=input.nextDouble();
            arr[i]= new Staff(name,address,school,pay);
            }
		}
        for (int i=0;i<arr.length;i++) {
            System.out.println(arr[i].toString());
		}
	}
    }
class Person extends Object{
    private String Name;
    private String Address;
    
    public Person(String Name, String Address){
    this.Name=Name;
    this.Address=Address;
    }
    
    public String getName(){
        return this.Name;
    }
    
    public String getAddress(){
    return this.Address;
    }
    
    public void setAddress(String Address){
        this.Address=Address;
    }
    
    public String toString(){
        return "Person[Name= "+this.Name+" ,Address= "+this.Address+"]";
    }
}


class Student extends Person{
    private String Program;
    private int Year;
    private double fee;
    
    public Student(String Name, String Address, String Program, int Year, double fee){
        super(Name, Address);
        this.Program=Program;
        this.Year=Year;
        this.fee=fee;
    }
    
    public String getProgram(){
        return this.Program;
    }
    
    public int getYear(){
    return this.Year;
    }
    
    public double getfee(){
    return this.fee;
    }
    
    public void setfee(double fee){
        this.fee=fee;
    } 
    
    public String toString(){
        return "Student["+super.toString()+", Program= "+this.Program+", Year= "+this.Year+", Fee= "+this.fee+"]";
    }
}


class Staff extends Person{
    
    private double pay;
    private String School;
    
    public Staff(String Name, String Address, String School,  double pay){
        super(Name, Address);
        this.School=School;
        this.pay=pay;
    }
    
    public String getSchool(){
        return this.School;
    }
    
    public double getpay(){
    return this.pay;
    }
    
    public void setSchool(String School){
        this.School=School;
    }
    
    public void setpay(double pay){
        this.pay=pay;
    }
    
    public String toString(){
        return "Staff["+super.toString()+", School= "+this.School+", Pay= "+this.pay+"]";
    }
}
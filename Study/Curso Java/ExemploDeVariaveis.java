/*
public class ExemploDeVariaveis{
	public static void main(String args[]){

	int a;		// ocupa 32 bits (4 bytes)   - valores de -2G a 2G//
	long b;		// ocupa 64 bits (8 bytes)   - valores de -9P a 9P//
	short c;	// ocupa 16 bits (2 bytes) 	 - valores de -32.768 a 32.767//
	byte d;		// ocupa 8 bits (1 bytes) 	 - valores de -128 a 127//

	a = 10;
	b = 8914;
	c = 10000;
	d = 200;     //Colocando 200 dentro de (byte) forca o java a compilar esse valor que excede//

	System.out.println("Valor de a = " + a);
	System.out.println("Valor de b = " + b);
	System.out.println("Valor de c = " + c);
	System.out.println("Valor de d = " + d);
//

// CALCULOS
	int a,b,c;  //int sao numeros inteiros, ex: 10,20,30//

	a = 10;
	b = 3;
	c = a / b;  //Pode ser qualquer calculo aqui. Se for %, que significa RESTO da conta, so retorna o resto da conta. Se for /, que e o resultado da divisao, retorna o mesmo//

	System.out.println("Valor do a = "+a);
	System.out.println("Valor do b = "+b);
	System.out.println("Valor do c = "+c);
	//


	//
	float x;  //Float ocupa 32 bits(8 bytes)//
	double y; //Double ocupa 64 bits (16 bytes)//
	
    x = 1.0f;  //Esse vai dar erro, porque tem que acrescentar o f depois do valor//
    y = 2.0;      //O double nao pq ele ja e 64bits //


    System.out.println("Valor do x = " +x);
    System.out.println("Valor do y = " +y);
    

//
    boolean b, b2;

    b = true;
    b2 = false;

    System.out.println("Valor do x = " +b);
    System.out.println("Valor do y = " +b2);
//

//
    char c;    //Char = caracter, so pode ser usado pra colocar 1 caracter//
    String s;  // Texto //

    c = 'x';
    s = 'Ola'


    System.out.println("Valor do x = " +c);
    System.out.println("Valor do y = " +s);
}
}
*/ 




/* PARTE DE INPUT USANDO INT =====================================//

import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int a;
		float b;
		double c;
		String d;
		char e;

		Scanner teclado;
		teclado = new Scanner(System.in);

		System.out.println("Digite um valor inteiro ");
		 a = teclado.nextInt();

		System.out.println("Valor digitado "+a);
	}
}
*/

/* PARTE DE INPUT USANDO FLOAT (O SCANNER TRABALHA COMO IDIOMA DA MAQUINA, NO LUGAR DA , EU USO . )=====================================//

import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int a;
		float b;
		double c;
		String d;
		char e;

		Scanner teclado;
		teclado = new Scanner(System.in);

		System.out.println("Digite um valor real ");
		 b  = teclado.nextFloat();

		System.out.println("Valor digitado "+b);
	}
}
*/ 

/* PARTE DE INPUT USANDO DOUBLE =====================================//

import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int a;
		float b;
		double c;
		String d;
		char e;

		Scanner teclado;
		teclado = new Scanner(System.in);

		System.out.println("Digite um valor inteiro ");
		 c = teclado.nextDouble();

		System.out.println("Valor digitado "+c);
	
}
*/

/* PARTE DE INPUT USANDO STRING =====================================//

import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int a;
		float b;
		double c;
		String d;
		char e;

		Scanner teclado;
		teclado = new Scanner(System.in);

		System.out.println("Digite um texto ");
		 d = teclado.nextLine();

		System.out.println("Valor digitado "+d);
	
}
*/
/* PARTE DE INPUT USANDO CHAR =====================================//

import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int a;
		float b;
		double c;
		String d;
		char e;

		Scanner teclado;
		teclado = new Scanner(System.in);

		System.out.println("Digite um texto ");
		 e = teclado.nextLine().charAt(0);

		System.out.println("Valor digitado "+e);
	
}
*/

/* PROJETINHO DE CONTADOR DE DIAS =====================================//
*/
import java.util.Scanner;

public class ExemploDeVariaveis{
	public static void main(String args[]){
		int anosEmDias;
		int qtdAnos, qtdMeses, qtdDias;
		int resto;
		

		Scanner teclado = new Scanner(System.in);
		anosEmDias = teclado.nextInt();
		
		qtdAnos = anosEmDias / 365;
		resto = anosEmDias % 365;
		qtdMeses = resto / 30;
		qtdDias = resto % 30;


		System.out.println(qtdAnos + " ano(s)");
		System.out.println(qtdMeses + " mes(es)");
		System.out.println(qtdDias + " dia(s)");
	
}
}
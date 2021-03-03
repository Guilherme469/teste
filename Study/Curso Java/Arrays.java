import java.util.Scanner;

public class Arrays {
	public static void main(String args[]){
		Scanner teclado = new Scanner(System.in);

		String vetor[];

		vetor = new String[20];

		System.out.println("Digite 20 strings diferentes");
		for (int pos=0; pos < vetor.length; pos++){
			vetor[pos] = teclado.nextLine();
		}

		System.out.println("=================");
		for(int pos=0; pos < vetor.length; pos++){
			System.out.println("vetor["+pos+"]= "+vetor[pos]);
		}
	}
}
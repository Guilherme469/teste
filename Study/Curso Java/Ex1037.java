import java.util.Scanner;

public class Ex1037{
	public static void main(String args[]){
		Scanner teclado = new Scanner(System.in);

		float n1, n2, media;

		System.out.println("Nota 1");
		n1 = teclado.nextFloat();
		System.out.println("Nota 2");
		n2 = teclado.nextFloat();

		media = (n1 + n2)/2;

		System.out.println("Media Final "+media);


		if (media >= 9.0f){
			System.out.println("Conceito A");
		} else {
			if (media >= 80f){
				System.out.println("Conceito B");
			}else {
				if (media >= 70f){
					System.out.println("Conceito C");
				}else {
					if (media >= 60f) {
						System.out.println("Conceito D");
					}else {
						System.out.println("Conceito E");
					}
				}
			}
		}




	}
}
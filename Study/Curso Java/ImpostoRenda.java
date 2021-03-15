import java.util.Scanner;

public class ImpostoRenda {
	public static void main(String args[]){

	Scanner teclado = new Scanner(System.in);
	double valor,total,total1,total2,imposto,imposto1,imposto2;
	valor = teclado.nextDouble();	


	if(valor >= 0 && valor <= 2000.00){
		System.out.println("Isento");
	}else {
		if(valor >= 2000.01 && valor <= 3000.00){
			imposto = valor * 8/100;
			System.out.printf("R$ = %.2f\n", imposto);
		}else {
			if (valor >= 3000.01 && valor <= 4500.00){
			imposto1 = valor * 18/100;
			System.out.printf("R$ = %.2f\n", imposto1);
			}else {
				if (valor >= 4500.00) {
			imposto2 = valor * 28/100;
			System.out.printf("R$ = %.2f\n", imposto2);
		}
}
}
}}}

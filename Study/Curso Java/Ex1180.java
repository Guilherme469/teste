import java.util.Scanner;

public class Ex1180{
	public static void main(String args[]){
		int X[], N;
		int menor, posMenor;

		Scanner teclado = new Scanner(System.in);

		N = teclado.nextInt();
		X = new int[N];

		for (int pos=0; pos < X.length; pos++){
			X [pos] = teclado.nextInt();
		}

		menor = X[0];
		posMenor = 0;

		for (int pos=0;pos<X.length;pos++){
			if(X[pos] < menor){
				menor = X[pos];
				posMenor=pos;
			}
		}

		System.out.println("Menor valor: "+menor);
		System.out.println("Posicao: "+posMenor);
}
}
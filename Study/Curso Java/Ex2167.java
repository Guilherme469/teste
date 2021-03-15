import java.util.Scanner;

public class Ex2167 {
	public static void main(String args[]) {

		Scanner teclado = new Scanner(System.in);

		int N, R[];  //Esse R e o vetor//

		int posQueda=0;

		for(int i=0; i<R.length; i++){ 
			R[i] = teclado.nextInt();
		}

		for (int i=1; i <R.length; i++){
			if (R[i] < R[i-1]){
				posQueda = i+1;
				break;
			}
		}
		System.out.println(posQueda);

	}
}
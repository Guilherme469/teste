public class AppTelevisao{
	public static void main(String args[]){
	int a;
	String b;

	Televisao t = new Televisao();
	Televisao t1 = new Televisao();
	Televisao t2 = new Televisao();

	t.marca = "AOC";
	t.ligada = true;
	t.volume = 10;
	t.canal = 500;

	t1.marca = "LG";
	t1.ligada = true;
	t1.volume = 25;
	t1.canal = 700;

	t2.marca = "Samsung";
	t2.ligada = false;
	t2.volume = 50;
	t2.canal = 300;

	
	t.ligar();
	t.aumentarVolume();
	t.avancarCanal();

	t1.ligar();
	t1.aumentarVolume();
	t1.avancarCanal();

	t2.ligar();
	t2.aumentarVolume();
	t2.avancarCanal();
	}
}
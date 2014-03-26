#pragma strict
var direction : Vector3;
//var alien: Transform;
var dist: float;
public var speed : float;
private var ataque: boolean;
private var vida: int = 3;
var Alien : GameObject;
function Start () {
	ataque = false ;
	direction = Vector3.forward;
	
	Alien = GameObject.Find("alien");
}

function Update () {
	PintarLinea();
	MoverEne ();
	Teveo ();
	
}
	
function MoverEne () {	
	if(ataque==false){	
		var dirAdelante    = transform.TransformDirection(direction);
		var dirAdelanteIzq = transform.TransformDirection(Vector3(-1,0,1));
		var dirAdelanteDer = transform.TransformDirection(Vector3( 1,0,1));
	}
	if (ataque==true);
		 dirAdelante    = transform.TransformDirection(direction);
		 dirAdelanteIzq = transform.TransformDirection(Vector3(0,0,0));
		 dirAdelanteDer = transform.TransformDirection(Vector3( 0,0,0));
	
	var hit1 : RaycastHit;
	var hit2 : RaycastHit;
	var hit3 : RaycastHit;

	
	if (Physics.Raycast(transform.position,dirAdelante , hit1 , 1) || Physics.Raycast(transform.position, dirAdelanteIzq , hit2 , 1) || Physics.Raycast(transform.position, dirAdelanteDer , hit3 , 1)){
		
		
		Debug.Log("HIT");
		
		if (hit1.collider!=null || hit2.collider!=null ||  hit3.collider!=null ){
			if ( hit1.collider.gameObject.name == "alien" || hit2.collider.gameObject.name == "alien" || hit3.collider.gameObject.name == "alien" ){
				
				
				Debug.Log(playercontroller.vida);
				if (ataque == false){
					ataque = true;
					playercontroller.vida= playercontroller.vida-1;
					yield WaitForSeconds (3) ;
					ataque = false;
					
				}
				
				
				
			}
							
		
		}
	}
}
function PintarLinea(){	
	

		Debug.DrawRay( transform.position, transform.TransformDirection(direction)*1, Color.red); 
		Debug.DrawRay(transform.position, transform.TransformDirection(Vector3(-1,0,1))*1, Color.red);
		Debug.DrawRay(transform.position, transform.TransformDirection(Vector3(1,0,1))*1, Color.red);
}

function Teveo() {
//Debug.Log(dist);
	dist = Vector3.Distance(Alien.transform.position, transform.position);
	if (dist<=10 && dist>1){
	
	 	Debug.Log("que viene");
	 	transform.LookAt( Alien.transform.position);
	transform.eulerAngles.x= 0;
	 	
	 	transform.Translate(Vector3.forward*speed);
	}
}

public function Vida (){
	vida -- ;
	Debug.Log(vida + "enemigo");
		if ( vida <= 0){
			
			Destroy(gameObject);
		
		}

}


#pragma strict
private var subebaja : boolean ;
private var activar : boolean;
 
function Start () {
	subebaja = false;
	activar  = false;
	
}


function Update () {

	if (activar == true){
 		if (subebaja == true){
 		
 			transform.Translate(Vector3(0,2*Time.deltaTime,0));
 			if( transform.position.y>=0.8){
 			subebaja = false;
 			}
 		}
 	
	 	if (subebaja== false){
	 		transform.Translate(Vector3(0,-4*Time.deltaTime,0));
	 		if( transform.position.y<=-2){
	 		subebaja = true;
	 		}
	 	}
 	}
 	
 	
 	
}


public function Activar(){
	activar = true;
}


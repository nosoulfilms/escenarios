#pragma strict
public var speed : float ;

private var salto :boolean;
static  var vida:int;
static var nivel : int = 0 ;
private var v : int;
private var h: int;
private var muerto: boolean;
function Start () {
vida = 4 ;
muerto = false;
}

function Update () {

	if (muerto == false){
		 v=Input.GetAxisRaw ("Vertical")  ;
		 h=Input.GetAxisRaw ("Horizontal") ;
	
		
		transform.Translate(0,0, v*speed);
	
		
			//girar
			/*
		if ( v > 0)
			transform.eulerAngles.y=0;
		if( v < 0 )
			transform.eulerAngles.y=180;
			*/
		if ( h > 0 )
			transform.eulerAngles.y+=3;
		if ( h < 0 )
			transform.eulerAngles.y-=3;
			
		if(salto == false && Input.GetKeyDown(KeyCode.Space)){
		Debug.Log("salta");
			//transform.Translate(0,5,0); 
			//rigidbody.AddForce (Vector3(v*5,10,0),ForceMode.Impulse);
			rigidbody.AddForce (Vector3(0,10,0),ForceMode.Impulse);
			salto = true;
		}
			
	}
		
	matarenemigo();	
	Salud();
}


 
 function OnCollisionEnter(other:Collision){
 
 	if(other. gameObject.tag== "terreno")
 		salto = false ;
 		
 	
 	
 	
 }
 
 //----------terminar nivel ------------//
 function OnTriggerEnter (other:Collider) {
	if (other.gameObject.name== "final"){
		Debug.Log("padentro");
		nivel++;
		Application.LoadLevel(nivel);
 	}
 	//----- trampa------//
	if (other.gameObject.tag== "trampa"){
	 	Debug.Log("aaaaaargh");
	 		vida--;
	 		Debug.Log(vida); 
	 }
 	
 }
 function Salud (){
 	if ( vida==0 || vida < 0) {
 		Destroy(gameObject,3);
 		muerto=true;
	 }
 }
 
 function matarenemigo (){

	if(Input.GetKeyDown(KeyCode.H)){
	Debug.Log("h");
		var fwd2 =transform.TransformDirection (Vector3.forward);
		
		
		var hit : RaycastHit;
		Debug.DrawRay(transform.position, fwd2*100,Color.blue);
		if(Physics.Raycast(transform.position,fwd2 , hit , 100 )){
				Debug.Log("ray");
				if ( hit.collider.gameObject.tag == "enemigo" ){
					var script = hit.collider.gameObject.GetComponent(movimientoenemigo);
					script.Vida();
					//Destroy(hit.collider.gameObject);
					Debug.Log("destruyelo");
				
				}
		}

	
	
	
	}
	
}
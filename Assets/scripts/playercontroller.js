#pragma strict
//public var speed : float ;

//private var salto :boolean;
static  var vida:int;
static var nivel : int = 0 ;
private var v : int;
private var h: int;
private var muerto: boolean;


// Variables del Character Controller

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var salto : boolean;
 
private var moveDirection : Vector3 = Vector3.zero;

// -------


function Start () {
	vida = 4 ;
	muerto = false;
	
	salto = true;

}

function Update () {

	if (muerto == false){
	
		/*
		v=Input.GetAxisRaw ("Vertical")  ;
		h=Input.GetAxisRaw ("Horizontal") ;
			
		transform.Translate(0,0, v*speed);
		
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
		*/
		
		ControladorMovimiento();
		
			
	}
	
	matarenemigo();	
	Salud();
}


 
 function OnCollisionEnter(other:Collision){
 
 	//Debug.Log("COLISION");
 
 	//----- trampa------//
	if (other.gameObject.tag== "trampa"){
	 	Debug.Log("aaaaaargh");
	 		vida--;
	 		Debug.Log(vida); 
	 }
 }
 
 
 function OnTriggerEnter (other:Collider) {
 //----------terminar nivel ------------//
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
		Debug.Log(nivel);
	  	Application.LoadLevel(nivel);
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

function ControladorMovimiento(){
	var controller : CharacterController = GetComponent(CharacterController);
	
	if (controller.isGrounded) {
	// We are grounded, so recalculate
		// move direction directly from axes
		moveDirection = Vector3(0, 0,Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
		
		var h = Input.GetAxis("Horizontal");
		
		if ( h > 0 )
			transform.eulerAngles.y+=3;
		if ( h < 0 )
			transform.eulerAngles.y-=3;
	 
		if (Input.GetButton ("Jump") && salto) {
			moveDirection.y = jumpSpeed;
		}
	}
	 
	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
	 
	// Move the controller
	controller.Move(moveDirection * Time.deltaTime);
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
 
    if(hit.normal.y <= 0.9)
    {
 
		salto = false;
 
    }
    else
    {
 
    	salto = true;
 
    }
 
}
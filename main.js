



Webcam.set({
 width:350,
 height:300,
 img_format: 'png',
 png_quality:90.
})

camera=document.getElementById("camera");

Webcam.attach("camera")

function snapshot(){

Webcam.snap(
    function(data_uri){
    document.getElementById("result").innerHTML='<img id="snapper" src="'+data_uri+'">'
    }
)
}


console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Sd3J1j3mZ/model.json",model_loaded);
function model_loaded(){
    console.log("model_loaded");
}

function check(){

 img=document.getElementById('snapper');
 classifier.classify(img, gotresult)


}
function gotresult(error,result){
if (error){
    console.log(error);
}
if (result){

 console.log(result);
 document.getElementById("Object_name").innerHTML= result[0].label;
 document.getElementById("Accuracy").innerHTML= result[0].confidence.toFixed(2);

}
 


}


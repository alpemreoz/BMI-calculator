// var boy = document.getElementById("inputBoy");
// var kilo = document.getElementById("inputKilo");
// var result;

function getInputValue(){
    // Selecting the input element and get its value 
    var status = document.getElementById("bmiRes")
    var exp = document.getElementById("bmiExp")
    var boy = document.getElementById("inputBoy").value;
    var kilo = document.getElementById("inputKilo").value;
    var ideKilo = document.getElementById("ideal")
    // Displaying the value
    boy = boy/100;
    var result = kilo/boy**2 ;
    result = result.toFixed(2);
    var idealFirst = (18.5*boy**2);
    var idealSec = (24.9*boy**2);
     idealFirst = idealFirst.toFixed(2);
     idealSec = idealSec.toFixed(2);
    if(result<18.5){
        status.innerText= "Vücut Kitle İndeksiniz: " +result +" Zayıf"
        exp.innerText = "Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz."
        ideKilo.innerText = "İdeal Kilo Aralığınız : "+ idealFirst + " - " + idealSec + " Kg"
    }

    else if(result>=18.5 && result<=24.9){
        status.innerText= "Vücut Kitle İndeksiniz: "+ result +" Normal Kilolu"
        exp.innerText = "Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösterinİz."
    }
    else if(result>=25 && result<=29.9){
        status.innerText= "Vücut Kitle İndeksiniz: "+result+" Fazla Kilolu"
        exp.innerText = "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar."
        ideKilo.innerText = "İdeal Kilo Aralığınız : "+ idealFirst + " - " + idealSec + " Kg"
    }

    else if(result>=30 && result<=34.9){
        status.innerText= "Vücut Kitle İndeksiniz: "+result+" Obez 1.Derece"
        exp.innerText = "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        ideKilo.innerText = "İdeal Kilo Aralığınız : "+ idealFirst + " - " + idealSec + " Kg"
    }

    else if(result>=35 && result<=39.9){
        status.innerText= "Vücut Kitle İndeksiniz: "+result+" Obez 2.Derece"
        exp.innerText = "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        ideKilo.innerText = "İdeal Kilo Aralığınız : "+ idealFirst + " - " + idealSec + " Kg"
    }
    else if(result>=40){
        status.innerText= "Vücut Kitle İndeksiniz: "+result+" Obez 3.Derece"
        exp.innerText = "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        ideKilo.innerText = "İdeal Kilo Aralığınız : "+ idealFirst + " - " + idealSec + " Kg"
    }
    
}

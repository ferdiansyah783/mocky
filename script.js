// data
var data_inside={
    satu:{
        it:"Blockchain Ecosystem Report",
        img:"img/1.jpg",
        p:"Highlights impactful developments and trends in Singapore’s blockchain ecosystem over the last one year",
        a:"Where will Blockchain Take us in 2021"
    },
    dua:{
        it:"IBM Cloud Certifications",
        img:"img/2.jpg",
        p:"IBM Cloud certifications, learning paths and training",
        a:"Certify Today"
    },
    tiga:{
        it:"IBM Cloud Youtube Channel",
        img:"img/3.jpg",
        p:"In this lightboard video, learn about REST APIs and the benefits a company can gain when developing apps using REST APIs",
        a:"Learn with our Developer Advocates!"
    },
    empat:{
        it:"IBM Cloud Labs",
        img:"img/4.jpg",
        p:"Learn how to deploy and manage applications on IBM Cloud Kubernetes Service",
        a:"Hands-on Labs"
    }
}

var key_inside=Object.keys(data_inside);

var result="";
// var i;
for(i=0;i<key_inside.length;i++){
    result += data_inside[key_inside[i]].it;
}



document.getElementsByTagName("i").innerHTML = result;


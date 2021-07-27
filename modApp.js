function eraseText() {
    document.getElementById("detail").value = "";
        modal.style.display = "none";
          
}

function detectSpecial() {
    var str = document.getElementById("detail").value;
    var myArr = str.split("#");

    var alamatdetail = myArr[1];
    document.getElementById("full_name").value = myArr[0]; 
    document.getElementById("phone_number").value = myArr[2];

    if (myArr[3] == null || myArr[3] == "") {
    } else {
        document.getElementById("email_address").value = myArr[3];
    }
    var wordCount = alamatdetail.match(/(\w+)/g).length;
    let reg = /\d+/g;
    let result = alamatdetail.match(reg);
    let posk = result.length;
    let s = posk - 1
    let poskod = parseInt(result[s]);
    document.getElementById("poskod_address").value = poskod;
    var AddArr = alamatdetail.split(poskod);
    document.getElementById("present_address").value = AddArr[0];
    var a = AddArr[1];
    var deArr = a.split(",");
    let c = deArr[0].trim();
    let d = deArr[1].trim();

    document.getElementById("bandar_address").value = c;
    document.getElementById("state_country").value = d.toLowerCase();
    
    document.getElementById("detail").value = "";
    modal.style.display = "none";
      
}

function checkForm() {
    alert("masuk")
    var a = document.forms["my-form"]["full-name"].value;
    var b = document.forms["my-form"]["phone"].value;
    var d = document.forms["my-form"]["alamat"].value;
    var e = document.forms["my-form"]["poskod"].value;
    var f = document.forms["my-form"]["bandar"].value;
    var g = document.forms["my-form"]["state"].value;
    alert(a)
    if (a == null || a == "") {
        alert("Sila masukkan nama anda");
        return false;
    } else if (b == null || b == "") {
        alert("Sila Masukkan nombor telefon anda");
        return false;
        //} else if (c == null || c == "") {
        //    alert("Please Enter Your Email Address");
        //    return false;
    } else if (d == null || d == "") {
        alert("Sila masukkan alamat anda");
        return false;
    } else if (e == null || e == "") {
        alert("Sila masukkan poskod");
        return false;
    } else if (f == null || f == "") {
        alert("Sila masukkan bandar");
        return false;
        //} else if (e == null || e == "") {
        //    alert("Please Enter Your NID Number");
        //    return false;
    } else {
        //switch (g) {
        //    case perlis:
        //        //code
        //        break;
        //    case kedah:
        //        //code
        //        break;
        //    case pulaupinang:
        //        //code
        //        break;
        //    case kelantan:
        //        //code
        //        break;
        //    case terengganu:
        //        //code
        //        break;
        //    case pahang:
        //        //code
        //        break;
        //    case perak:
        //        //code
        //        break;
        //    case selangor:
        //        //code
        //        break;
        //    case kualalumpur:
        //        //code
        //        break;
        //    case putrajaya:
        //        //code
        //        break;
        //    case negerisembilan:
        //        //code 
        //        break;
        //    case melaka:

        //        break;
        //    case johor:
        //        //code
        //        break;
        //    case labuan:
        //        //code
        //        break;
        //    case sabah:
        //        //code
        //        break;
        //    case sarawak:
        //        //code
        //        break;
        //}
    }

}



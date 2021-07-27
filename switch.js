window.switchstyle = document.createElement("STYLE");
window.switchstyle.innerHTML = `switch {
    border: 4px solid rgb(172, 170, 170);
    border-radius: 3px;
    background: rgb(172, 170, 170);
    cursor: pointer;
}
opt {
    position: relative;
    padding: 2px;
    z-index: 1;
    display: inline-block;
    transition: color 1s ease;
}
optside {
    transition: all 1s ease;
    position: absolute;
    top: 0;
    width: 0%;
    height: 100%;
    display: block;
    z-index: -1;
}`;
document.head.appendChild(window.switchstyle);
delete window.switchstyle;
for (let i = 0; i < document.getElementsByTagName("switch").length; i++) {
    const tswitch = document.getElementsByTagName("switch")[i];
    tswitch.fsize = tswitch.getAttribute("fsize");
    if (tswitch.getAttribute("fsize") == null)
        tswitch.fsize = "22px";
    if (tswitch.getElementsByTagName("opt")[0].getAttribute("sbgcolor") == null || tswitch.getElementsByTagName("opt")[1].getAttribute("sbgcolor") == null || tswitch.getElementsByTagName("opt")[0].getAttribute("scolor") == null || tswitch.getElementsByTagName("opt")[1].getAttribute("scolor") == null) {
        console.error("The switch element with an index of "+i+" does not have either a scolor or sbgcolor specified");
        break;
    }
    tswitch.style.fontSize = tswitch.fsize;
    var optside = document.createElement("OPTSIDE");
    optside.style.right = "0px";
    optside.style.background = tswitch.getElementsByTagName("opt")[0].getAttribute("sbgcolor");
    tswitch.getElementsByTagName("opt")[0].style.color = tswitch.getElementsByTagName("opt")[0].getAttribute("scolor");
    optside.style.width = "100%";
    tswitch.getElementsByTagName("opt")[0].appendChild(optside);
    var optside2 = document.createElement("OPTSIDE");
    optside2.style.left = "0px";
    optside2.style.background = tswitch.getElementsByTagName("opt")[1].getAttribute("sbgcolor");
    tswitch.getElementsByTagName("opt")[1].style.color = "black";
    tswitch.getElementsByTagName("opt")[1].appendChild(optside2);
    tswitch.vl = 0;
    tswitch.onclick = function() {
        changeSwitch(document.getElementsByTagName("switch")[i], document.getElementsByTagName("switch")[i].getElementsByTagName("optside")[0], document.getElementsByTagName("switch")[i].getElementsByTagName("optside")[1]);
        eval(tswitch.getAttribute("onswitch"));
    };
}
function changeSwitch(tswitch, optside, optside2) {
    if (tswitch.vl == 0) {
        tswitch.vl = 1;
        optside.style.width = "0%";
        tswitch.getElementsByTagName("opt")[0].style.color = "black";
        optside2.style.width = "100%";
        tswitch.getElementsByTagName("opt")[1].style.color = tswitch.getElementsByTagName("opt")[1].getAttribute("scolor");
    } else {
        tswitch.vl = 0;
        optside.style.width = "100%";
        tswitch.getElementsByTagName("opt")[0].style.color = tswitch.getElementsByTagName("opt")[0].getAttribute("scolor");
        optside2.style.width = "0%";
        tswitch.getElementsByTagName("opt")[1].style.color = "black";
    }
}
function updateBorderRadius(){
    let tl = document.getElementById("tl").value;
    let tr = document.getElementById("tr").value;
    let bl = document.getElementById("bl").value;
    let br = document.getElementById("br").value;
    
    document.getElementById("tlValue").textContent = tl;
    document.getElementById("trValue").textContent = tr;
    document.getElementById("blValue").textContent = bl;
    document.getElementById("brValue").textContent = br;

    let borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
    document.getElementById("box").style.borderRadius = borderRadius;
    document.getElementById("code").textContent = `border-radius: ${borderRadius}`;
}

function copyCode(){
    let copyText = document.getElementById("code").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard");
}

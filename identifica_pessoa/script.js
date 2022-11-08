function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dado e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "meninoCriança.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "jovemHomem");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "homemAdulto");
      } else {
        //Idoso
        img.setAttribute("src", "homemIdoso");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "meninaCriança");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "jovemMulher");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "mulherAdulta");
      } else {
        //Idoso
        img.setAttribute("src", "mulherIdosa");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
